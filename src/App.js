import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [Text, setText] = useState("Dark");
  const [textMode, setTextMode] = useState("Light Mode")

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      setText("light")
      setTextMode("Dark Mode")
      document.body.style.backgroundColor = "#121212"
      // document.body.style.backgroundColor = "black"
    }
    else{
      setMode("light");
      setText("dark");
      setTextMode("Light Mode")
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <>
      <Navbar title = "Word Counter" info = "About us" mode = {mode} toggleMode = {toggleMode} text = {Text}
      textMode = {textMode}/>

      <div className="container my-3" >
        {/* <About/> */}
        <TextForm heading = "Enter the text" mode = {mode} toggleMode = {toggleMode}/> 
      </div>
    </>
  );
}

export default App;


