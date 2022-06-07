import './App.css';
import React,{useState} from 'react';
import Datepicker from './Datepicker';
import Title from './Title';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';



function App() {
  const [switches,setSwitchs]=useState(false);
  const [resdate,setDate]=useState(0);
  
  const dateCal=()=>{
    let sel=document.getElementById('selectedDate').value;
    let today=(new Date()).toLocaleDateString("en-US");
    const date1=new Date(sel);
    const date2=new Date(today);
    const diffDate=date1.getTime()-date2.getTime();
    const resultDiff=Math.abs(diffDate/(1000*3600*24)+1);
setDate(resultDiff);
setSwitchs(true);
  }

let content=<h1>궁금해요?</h1>;

if(switches===true){
content=<h1>우와! 벌써 {resdate}일째군요!😎</h1>
}
  


  return (
    <Container fixed className='contain'>
      <div className='App'>
        <Title class='titlestyle'/>
        <Datepicker/>
        <p>부터 오늘까지 얼마나 지났는지 확인</p>
        <Button variant="contained" onClick={dateCal} >확인 들어갑니다</Button>
        {content}
      </div>
    
    </Container>
  );
}

export default App;
