import React,{useState,useEffect} from 'react'
import Header from './Header'
import '../styles/body.css'
import Functions from './Functions';
import SideBar1 from './SideBar1';
import NewWindow from './NewWindow';

export default function RootWindow() {
    const func = [[1,"folder"],[0,"paste"],[0,"showd"],[1,"terminal"],[1,"changeb"],[0,"display"],[1,"setting"],[1,"full"]];
    document.onclick = hideMenu;
    document.oncontextmenu = rightClick;
    function hideMenu() {
        document.getElementById("contextMenu").style.display = "none"
    }
    function rightClick(e) {
        e.preventDefault();
        var menu = document.getElementById("contextMenu");
        if((e.pageX>48 && e.pageX<(window.innerWidth*(100-23.38))/100) && (e.pageY>60 && e.pageY<(window.innerHeight*(100-37.81))/100)){
            menu.style.display = 'block';
            menu.style.left = e.pageX + "px";
            menu.style.top = e.pageY + "px";
            menu.style.position = "absolute";
            
        }else{
            if(e.pageX>60){
                menu.style.display = 'block';
                if(e.pageX>=264){
                    menu.style.left = e.pageX-210 + "px";
                }else{
                    menu.style.left = e.pageX+ "px";
                }
                if(e.pageY >= (window.innerHeight*36.28)/100){
                    menu.style.top = e.pageY-270 + "px";
                }else{
                    menu.style.top = e.pageY + "px";
                }
                menu.style.position = "absolute";
                console.log(e.pageX,e.pageY)
            }
        }
    }
    const [currwindow,Setwindow] = useState([]);
    const [allapplist,Setallapp] = useState("");
    const handleChange = React.useCallback((newValue) => {
        Setwindow(currwindow.concat(newValue));
    }, [currwindow]);

    const allappChange = React.useCallback((addapplist)=>{
        Setallapp(addapplist);
    },[allapplist]);
    useEffect(()=>{
        var s = localStorage.getItem("Openapp");
        if(s!=null){
            var app = JSON.parse(s);
            var open = []
            for(let i=0;i<app.length;i++){
                if(currwindow.length===app.length){
                    break;
                }
                open.push(<NewWindow appname={`${app[i]}`}/>)
            }
            Setwindow(open)
        }
    },[])
    return (
        <>
        <div className='body'>
            <Header />
            <SideBar1 onChange={handleChange} addApp={allappChange} checkaddApp={allapplist}/>
            <div className="windows">
                {currwindow}
            </div>
            {allapplist}
        </div>
        <div id="contextMenu" className="context-menu">
            {func.map((f,index)=>
                <Functions key={index} func={f}/>
            )}
        </div>
        </>
    )
}
