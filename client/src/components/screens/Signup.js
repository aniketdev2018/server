import React, {useState,useEffect,createContext,useReducer,useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'



const Signup =()=>{
      const history=useHistory()
      const[firstName,setfirstName]=useState("")
      const[lastName,setlastName]=useState("")

      const[password,setPasword]=useState("")
      const[email,setEmail]=useState("")
      const [image,setImage]=useState("")
      const [url,setUrl]=useState(undefined)
     
      
  const uploadFields=()=>{

    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
          M.toast({html: "Invalid email" ,classes:"#c62828 red darken-3"}) 
          return
        }
        // if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password)){
        //   M.toast({html: "Invalid password! it must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character" ,classes:"#c62828 red darken-3"}) 
        //    return 
        // }
        fetch ("/signup",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
          // 'Accept':'application/json'
        },
        body:JSON.stringify({
          firstName,
         lastName,
          
          password,
          email

        })
      }).then(res=>res.json())
        .then(data=>{
          if(data.error){
             M.toast({html: data.error ,classes:"#c62828 red darken-3"})
          }
         
          // console.log("Data fetched")
      }).catch(err=>{
        console.log(err)
      })
  }

      const PostData =()=>
        {

             uploadFields()
        }

        
    


      
	return (
    <main>
            <label>
        <div className=	"mycard">
              
            <div className="card auth-card input-field">
             
                                  SIGN UP
                  <h4>Create your account</h4>
                <p>Learn ipsum door sit some text</p>
             
         
                <div > 
                  <button  className="  #42a5f5 grey lighten-2">
                <a 
                  href="https://accounts.google.com/"
                      className="fagoogle social">
                                <FontAwesomeIcon style={{marginLeft:"10px ",}}icon={faGoogle } size="1x" />
                                Sign up with Google
                  </a>
                 </button>
                 <button style={{marginLeft:"10px"}} className="  #42a5f5 grey lighten-2">
                  <a  href="https://www.facebook.com/"
                      className="facebook social">
                                <FontAwesomeIcon icon={ faFacebook } size="1x" />
                                 Sign up with facebook
                  </a>
                   </button>
                 
                  
               </div>
                
                
               
                   
                  <form> 
                    <br/>
                      or
                    <label>
                      <input type="text" placeholder="First Name"
                      required
                        value={firstName}
                        onChange={(e)=>setfirstName(e.target.value)}
                        />
                      <input type="text" placeholder="Last Name"
                      required
                        value={lastName}
                        onChange={(e)=>setlastName(e.target.value)}
                        />
                      <input type="text" placeholder="Email Address" 
                          required 
                          value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                      <input type="password" placeholder="Password"
                          value={password}
                        onChange={(e)=>setPasword(e.target.value)}
                        />
                        </label>
                  </form>
                   <p>
                     By clicking Sign Up, you agree to our <a href="#">Terms of Use</a> and Our <a href="#">Privacy Police.</a>
                   </p>
                  <button  style={{width:"280px"}} className="btn waves-effect waves-light  #42a5f5 blue darken-1" 
                  onClick={()=>PostData()} 
                  >
                     SIGN UP
                    </button>
              
              
              </div>
        </div>	
        </label>
    
   </main>
		
		)
}

export default Signup

export const UserContext=createContext()
