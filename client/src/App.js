import React,{useEffect,createContext,useReducer,useContext} from 'react';
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdb react";


import './App.css'
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
 import {reducer,initialState} from './reducers/userReducer'
 import Signup from './components/screens/Signup'

 export const UserContext=createContext()

const Routing =()=>{
  const history =useHistory()
   const {state,dispatch}=useContext(UserContext)
  useEffect(()=>{
   const  user =JSON.parse(localStorage.getItem("user"))
    {
         //dispatch({type:"USER",payload:user})
          history.push('/signup')
        //history.push('/')
       }
  },[])
  return(
             <switch>
                
            
            <Route path="/signup">
               <Signup/>
            </Route>
           
            </switch>
            )
}
function App() {
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
   
    <Routing/>
  

    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
