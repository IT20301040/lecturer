import { useState } from "react";
import axios from "axios";


export default function Login(){

    const [email ,setEmail] =useState("");
    const [password ,setPassword] =useState("");
    
     function sendDetails(e){
        e.preventDefault();
       

        const newStudent ={
            email,
            password
        }
        axios.post("http://localhost:8000/post/save",newStudent).then(()=>{
            alert("Lecturer Added")

        }).catch((err) =>{
            alert(err)
        })
       
    }

   return(
    <div className="login-parent">
   

    <div className="login-name">
                <h1 className="title-login"> Lecturer Login </h1><br/>
                
        </div>

    <div className="login-form">
        <form onSubmit={sendDetails}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input name="email" type="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
          onChange={(e) =>{
              setEmail(e.target.value);
          }} />
         
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
          onChange={(e) => {
              setPassword(e.target.value);
          }}/>
        </div><br/>
        <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                </div>

                <button type="submit" className="btn submit-button">Sign In</button><br></br>
                <a href="/CreatePost">
                <button  type="submit" className="btn submit-button">Register</button>
                </a>
        
          </form>
      </div>
      </div>
      
    )
}