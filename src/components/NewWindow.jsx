import React from 'react';
import Draggable from "react-draggable";
import CheckApp from './CheckApp';

export default function NewWindow(props) {
    function closeApp(appname){
        var s = localStorage.getItem("Openapp");
        var app = JSON.parse(s);
        var newapp = [];
        for(let i=0;i<app.length;i++){
            if(app[i]===appname){
                continue;
            }else{
                newapp.push(app[i]);
            }
        }
        localStorage.setItem("Openapp",JSON.stringify(newapp));
        const h1 = document.getElementById(appname);
        h1.remove();
        document.getElementsByClassName(appname+"ha")[0].style.backgroundColor = "rgba(255,255,255,0)";
        document.getElementsByClassName(appname+"to")[0].style.display = "none";
        document.getElementsByClassName(appname+"aca")[0].style.display = "none";
    }
    return (
        <Draggable>
            <div className='openwindow' id={props.appname}>
                <div className="windowheader">
                    {props.appname}
                    <div className="navigate">
                        <div className="minimize">
                            <img src="/images/minimize.svg" alt="" />
                        </div>
                        <div className="maximize">
                            <img src="/images/maximize.svg" alt="" />
                        </div>
                        <div className="close" onClick={()=>closeApp(props.appname)}>
                            <img src="/images/close.svg" alt="" />
                        </div>
                    </div>
                </div>
                <CheckApp appname={props.appname}/>
            </div>
        </Draggable>
    )
}
