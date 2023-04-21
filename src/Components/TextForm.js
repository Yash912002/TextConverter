import { useState } from "react";
import React from "react";

export default function TextForm(props) {

    // const[text, setText] = useState("Write a message")
    const[text, setText] = useState("")

    const handleClick = ()=>{
        // console.log("Uppercase button clicked");
        let UpperText = text.toUpperCase();
        setText(UpperText);
    }

    const handleLoClick = ()=>{
        // console.log("Lowercase button clicked");
        let UpperText = text.toLowerCase();
        setText(UpperText);
    }

    const handleFindClick = ()=>{
        let result;
        let word = prompt("Which word you want to search inside text ?");

        // console.log(text.split(" ").length); // 3 for word == "yash"

        for (let i = 0; i <= text.split(" ").length; i++){
            if(text.split(" ")[i] == word){
                result = text.split(" ")[i]
            }
        } 
        if (result) 
            alert("Word found successfully");
        else
            alert("Word not found");
        
    }
        
    
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const placeholder = "Write a message"

    return (
        <>
            <div className="container my-2 "style={{color: props.mode === 'dark'?'white':'#343a40'}} >
                <h1> {props.heading} </h1>

                <div className="mb-3">
                    <textarea 
                        className = "form-control"
                        id = "myBox" 
                        placeholder = {placeholder}
                        value = {text}
                        style = {{backgroundColor: props.mode === 'dark' ? '#1d1e1f' : 'white',
                                  color: props.mode === 'dark' ? 'white' : 'black'}} 
                        rows="8"
                        onChange={handleOnChange}
                    >
                    </textarea>
                </div>

                <button className="btn btn-primary" onClick={handleClick}>
                    Convert to Uppercase
                </button>

                <button className="btn btn-warning mx-3" onClick={handleLoClick}>
                    Convert to lowercase
                </button>

                <button className="btn btn-success mx-1" onClick={handleFindClick}>
                    Find
                </button>
            </div>

            <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1> Text Summary </h1>
                <p> {text.split(" ").length} words and {text.length} characters </p>
                <p> {0.008 * text.split(" ").length} minutes require to read </p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}

