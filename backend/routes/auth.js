const express= require('express');
const router = express.Router();
const mongoose=require('mongoose');

const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const {JWT_SECRET}=require('../config/keys');

const requireLogin=require('../middleware/requireLogin')



router.get('/protected',requireLogin,(req,res)=>{
	res.send("hello user")
})

router.get('/',(req,res)=>{
	console.log("auths")
	res.send("Hello")
})

router.post('/signup',(req,res)=>{

	const {name,email,password,pic}= req.body
	if(!email|| !password||!name){
	return 	res.status(422).json({error:"please add all the feilds"})
	}

	User.findOne({email:email})
	.then((savedUser)=>{
		if(savedUser){
			return res.status(422).json({error:"User already exits with that name"})

		}
		bcrypt.hash(password,15)
		
		.then(hashedpassword=>{
			const user=new User({
			email,
			password:hashedpassword,
			name,
			pic
		})
		user.save()
		.then(user=>{
			res.json({message:"Saved successfully"})

		})
		.catch(err=>{
			console.log(err)
		})

		})
		

	})
	.catch(err=>{
		console.log(err)
	})
})


module.exports=router