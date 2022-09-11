import React, { useState,useEffect } from 'react'

export default function Options() {
    const imgs = ["images/network-wireless-signal.svg","images/audio-volume-medium-symbolic.svg"];
    
    
    const [currlevel,SetLevel] = useState(0);
    function setLevel(){
        try {
            window.navigator.getBattery().then((battery) => {
                SetLevel(battery.level * 100);
            });
        } catch (error) {
            console.log("eroor")
            SetLevel(100);
        }
        
    }
    useEffect(() => {
        const level = setInterval(() => {
            SetLevel(setLevel());
        }, 1000);
        return () => {
            clearInterval(level);
        };
    },[]);
    return (
        <div className='comm' tabIndex={0}>
            <div className='option active' >
                {imgs.map((img,index) =>
                    <span key={index+"img"}>
                        <img src={img} alt="" />
                    </span>
                )}
                <span>
                    <div className="battery">
                        <div className="level" style={{"height":`${currlevel}%`}}></div>
                    </div>
                </span>
                <span>
                    <div className="arrow"></div>
                </span>
            </div>
        </div>
    )
}
