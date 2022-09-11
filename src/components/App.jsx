import React,{useEffect} from 'react'
import NewWindow from './NewWindow';

export default function App(props) {
    
    useEffect(()=>{
        var s = localStorage.getItem("Openapp");
        if(s!=null){
            var app = JSON.parse(s);
            for(let i=0;i<app.length;i++){
                document.getElementsByClassName(app[i]+"ha")[0].style.backgroundColor = "rgba(255,255,255,0.1)";
                document.getElementsByClassName(app[i]+"aca")[0].style.display="block";
            }
        }
    },[])
    function Appfunc(appname){
        document.getElementsByClassName(appname+"ha")[0].style.backgroundColor = "rgba(255,255,255,0.1)";
        document.getElementsByClassName(appname+"to")[0].style.display = "initial";
        
        
    }
    function FuncOut(appname){
        if(localStorage.getItem("Openapp")===null){
            document.getElementsByClassName(appname+"ha")[0].style.backgroundColor = "rgba(255,255,255,0)";
            document.getElementsByClassName(appname+"to")[0].style.display = "none";
        }else{
            document.getElementsByClassName(appname+"ha")[0].style.backgroundColor = "rgba(255,255,255,0)";
            document.getElementsByClassName(appname+"to")[0].style.display = "none";
            var s = localStorage.getItem("Openapp");
            var app = JSON.parse(s);
            for(let i=0;i<app.length;i++){
                if(app[i]===appname){
                    document.getElementsByClassName(appname+"ha")[0].style.backgroundColor = "rgba(255,255,255,0.1)";
                }
            }
        }
    }
    function RunApp(appname){
        if(localStorage.getItem("Openapp")===null){
            var s = []
            s.push(appname);
            localStorage.setItem("Openapp",JSON.stringify(s));
            document.getElementsByClassName(appname+"aca")[0].style.display="block";
            props.onChange(<NewWindow appname={appname} />);
        }else{
            s = localStorage.getItem("Openapp");
            var app = JSON.parse(s);
            if(app.indexOf(appname)<0){
                app.push(appname);
                localStorage.setItem("Openapp",JSON.stringify(app));
                document.getElementsByClassName(appname+"aca")[0].style.display="block";
                props.onChange(<NewWindow appname={appname} />);
            }
        }
    }
    return (
        <>
            <div className={`${props.detail[0]}ha hover-active`} onMouseEnter={()=>Appfunc((props.detail[0]))} onMouseLeave={()=>FuncOut((props.detail[0]))} onClick={()=>RunApp(props.detail[0])}>
                <div className="inside">
                    <img src={props.detail[1]} alt="" />
                    <div className={`${props.detail[0]}to tooltip`} style={{"left":"2rem"}}>
                        {props.detail[2]}
                    </div>
                    <div style={{"left":"0.8rem"}} className={`${props.detail[0]}aca activeapp`}></div>
                </div>
            </div>
        </>
    )
}
