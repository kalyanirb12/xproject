import { useState } from "react";
import "./app.css"
import FormInput from "./components/FormInput.jsx";

const App=()=>{
   // const[Username,setUsername]=useState("")
   // console.log(Username)
   const usernameRef=useRef()
   console.log(usernameRef)


   const handelSubmit=(e)=>{
    e.preventDefault();
   }
    return <div className="app">
        <form  onSubmit={handelSubmit}>
       <FormInput refer={usernameRef}placeholder="Username" />
       <FormInput placeholder="Email"/>
       <FormInput placeholder="FullName"/>
       <FormInput placeholder="Images"/>
       <button>Submit</button>
        </form>
    </div>;
};

export default App;