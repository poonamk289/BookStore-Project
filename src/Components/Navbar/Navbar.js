import React, { useState } from "react";
import "./../../App.css"

const Navbar =({setValue})=>{
    const [input,setInput] = useState("")
 
    console.log(input);
 

    return (
        <div className="navbar">
           <div className="logo-title">
                <img src="./images/Logo.svg"/>
                <h2>KeazoN
                <span>BOOKS</span>
                </h2>
               
                
           </div>

           <div className="input-btn">
                <input  type="text" placeholder="Search for the book you want and read it now..."
                    onChange={(e)=>(setInput(e.target.value))}
                />
                <button  >Search</button>
           </div>

           <div className="image-link">
                <img src="./images/heart.svg"/>
                <img src="./images/notifications.svg"/>
                <img src="./images/diamond.svg"/>

           </div>
        </div>
    )
}

export default Navbar;