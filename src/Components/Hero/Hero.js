import React from "react";
import "./../../App.css";
import Book from "./Book";

const Hero=(props)=>{
   
    const arr=props.books;
    // console.log(arr);
    return(
        <div className="books-3">
            {
                arr && 
                arr.map((book)=>(
                    <Book book={book}/>
                ))
                
            }
            
            
         
        </div>
    )
}

export default Hero;