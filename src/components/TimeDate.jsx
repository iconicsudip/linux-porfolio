import React,{useState,useEffect} from 'react';

export default function TimeDate() {
    const [upDate,SetTime] = useState(Time());
    useEffect(() => {
        const timer = setInterval(() => {
            SetTime(Time());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    },[]);
    function Time(){
        var curr = new Date();
        var hours = curr.getHours();
        var ampm = hours>=12?'PM':'AM';
        hours = hours%12;
        hours = hours ? hours : 12;
        var minutes = curr.getMinutes();
        minutes = minutes>=0 && minutes<=9 ? '0'+minutes : minutes;
        
        var day = curr.getDay();
        var month = curr.getMonth();
        var date = curr.getDate();

        var time = Extract(day,month)[0]+' '+Extract(day,month)[1]+' '+date+' '+hours +':'+ minutes + ' '+ampm;
        return time;
    }
    function Extract(day,month){
        const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        return [weekday[day],months[month]]
    }
  return (
    <div className='comm' tabIndex={0}>
        <div className='text active' >
            <span>
                {upDate}
            </span>
        </div>
    </div>
  )
}
