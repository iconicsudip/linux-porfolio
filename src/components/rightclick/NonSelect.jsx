import React from 'react'
import Newfolder from './Newfolder';
import Paste from './Paste';
import ShowD from './ShowD';
import Terminal from './Terminal';
import ChangeB from './ChangeB';
import Display from './Display';
import Settings from './Settings';
import FullS from './FullS';

export default function NonSelect(props) {
    var name = props.name;
    var num = props.num;
    if(name === "folder"){
        return (
            <div className='unselect'>
                <Newfolder num={num}/>
            </div>
        );
    }else if(name === "paste"){
        return (
            <div className='unselect'>
                <Paste num={num}/>
            </div>
        );
    }else if(name === "showd"){
        return (
            <div className='unselect'>
                <ShowD num={num}/>
            </div>
        );
    }else if(name === "terminal"){
        return (
            <div className='unselect'>
                <Terminal num={num}/>
            </div>
        );
    }else if(name === "changeb"){
        return (
            <div className='unselect'>
                <ChangeB num={num}/>
            </div>
        );
    }else if(name === "display"){
        return (
            <div className='unselect'>
                <Display num={num}/>
            </div>
        );
    }else if(name==="setting"){
        return (
            <div className='unselect'>
                <Settings num={num}/>
            </div>
        );
    }else{
        return (
            <div className='unselect'>
                <FullS num={num}/>
            </div>
        );
    }
}
