import React, { useState } from 'react'

export default function FullS(props) {
  const [screen,setScreen] = useState("false");
  const fullscreen = ()=>{
    if(props.num){
      var elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
        localStorage.setItem("fullscreen","true");
        setScreen(localStorage.getItem("fullscreen"));
        document.getElementsByClassName("body")[0].style.height = "calc(100vh - 2rem)";
      }
      if(screen==="true") {
        document.exitFullscreen();
        localStorage.setItem("fullscreen","false");
        setScreen(localStorage.getItem("fullscreen"));
        document.getElementsByClassName("body")[0].style.height = "calc(100vh - 2rem)";
      }
    }
  }
  return (
    <div className='cat'onClick={fullscreen}>
        {screen==="true"?<span>Exit Full Screen</span>:<span>Enter Full Screen</span>}
    </div>
  )
}
