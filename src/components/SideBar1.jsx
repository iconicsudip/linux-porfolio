import React from 'react'
import '../styles/sidebar.css';
import AllApps from './AllApps';
import App from './App';
export default function SideBar1(props) {
    // console.log(props.checkaddApp.length);
    const details = [["chrome","/images/chrome.png","Google Chrome","3.3rem"],["calc","/images/calc.png","Calculator","6.5rem"],
        ["about","/images/user-home.png","About Sudip","9.7rem"],["vscode","/images/vscode.png","Visual Studio Code","13rem"],
        ["terminal","/images/bash.png","Terminal","16.2rem"],["soptify","/images/spotify.png","Spotify","19.5rem"],
        ["settings","/images/setting.png","Settings","22.8rem"]]
    function Appfunc(appname){
        document.getElementsByClassName(appname+"ha")[0].style.backgroundColor = "rgba(255,255,255,0.1)";
        document.getElementsByClassName(appname+"to")[0].style.display = "initial";
    }
    function FuncOut(appname){
        document.getElementsByClassName(appname+"ha")[0].style.backgroundColor = "rgba(255,255,255,0)";
        document.getElementsByClassName(appname+"to")[0].style.display = "none";
    }
    function AddAppList(){
        if(props.checkaddApp.length===0){
            props.addApp(<AllApps />);
        }else{
            props.addApp("");
        }
    }
    return (
        <>
            <div className="all">
                {
                    details.map((detail,index)=>
                        <App onChange={props.onChange} key={index} detail={detail} />
                    )
                }
            </div>
            <div className="application">
                <div className="gridha hover-active" onMouseEnter={()=>Appfunc(("grid"))} onMouseLeave={()=>FuncOut(("grid"))} onClick={()=>AddAppList()}>
                    <div className="inside-grid">
                        <img src="/images/grid.svg" alt="" />
                        <div className="gridto tooltip">
                            Show Applications
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
