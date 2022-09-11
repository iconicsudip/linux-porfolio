import React from 'react'
import Newfolder from './rightclick/Newfolder';
import Paste from './rightclick/Paste';
import ShowD from './rightclick/ShowD';
import Terminal from './rightclick/Terminal';
import Settings from './rightclick/Settings';
import FullS from './rightclick/FullS';
import ChangeB from './rightclick/ChangeB';
import Display from './rightclick/Display';
import NonSelect from './rightclick/NonSelect';

export default function Function(props) {
  if(props.func[0]===0){
    var num = props.func[0];
    return (
      <NonSelect name = {props.func[1]} num={num}/>
    )
  }else{
    var name = props.func[1];
    num = props.func[0];
    if(name === "folder"){
      return (<Newfolder num={num}/>);
    }else if(name === "paste"){
      return (<Paste num={num}/>);
    }else if(name === "showd"){
      return (<ShowD num={num}/>);
    }else if(name === "terminal"){
      return (<Terminal num={num}/>);
    }else if(name === "changeb"){
      return (<ChangeB num={num}/>)
    }else if(name === "display"){
      return (<Display num={num}/>)
    }else if(name==="setting"){
      return (<Settings num={num}/>)
    }else{
      return (<FullS num={num}/>)
    }
  }
}
