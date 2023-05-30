import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //single state variable to hold state of the application
  const [input,setInput]=useState({
    operandLeft:0,
    operandRight:0,
    result:0,
    operator:'+'
  })

//operator handler
  const operatorHandler =(event)=>{
    switch(event.target.value){
      case "+":
        setInput({...input,operator:"+"});
        break;
      case "-":
        setInput({...input,operator:"-"});
        break;
      case "*":
        setInput({...input,operator:"*"});
        break;
      case "/":
        setInput({...input,operator:"/"});
        break;
      default:
        break;
    }
    
  }

//calculate handler
  const calculateHandler=({operandLeft,operandRight,operator}) => {
    console.log(operandLeft+" "+operandRight);
    let result;
    switch(operator){
      case "+":
        result=operandLeft+operandRight;
        break;
      case "-":
        result=operandLeft-operandRight;
        break;
      case "*":
        result=operandLeft*operandRight;
        break;
      case "/":
        result=operandLeft/operandRight;
        break;
      default:
        break;
    }
    
    setInput({
      ...input,
        result:result
      })
    
  }

  

//use effect to automatically calculate result on input change
  useEffect(()=>{
    calculateHandler(input);
  },[input.operandLeft, input.operandRight,input.operator])  

  return (
    <>
      <div className="calculator-wrap">
       <div className="operand-section">
       <input type="number" id="operand-left" placeholder={input.operandLeft} onClick={(e)=>setInput({...input,
      operandLeft:parseInt(e.target.value)})}/>
       <span className="operator">{input.operator}</span>
       <input type="number" id="operand-right" placeholder ={input.operandRight} onClick={(e)=>setInput({...input,
      operandRight:parseInt(e.target.value)})}/>
       <span id="equal sign">=</span>
       <input type="number" id="operand-right" readOnly value={input.result}/>

       </div>
       <div className="operator-section">
        <button className="operator" onClick={(e)=>operatorHandler(e)}value="+">+</button>
        <button className="operator" onClick={(e)=>operatorHandler(e)}value="-">-</button>
        <button className="operator" onClick={(e)=>operatorHandler(e)}value="*"> *</button>
        <button className="operator" onClick={(e)=>operatorHandler(e)}value="/">/</button>
       </div>
       <button className="submit" onClick={(e)=>calculateHandler(input)}>calculate</button>
      </div>
    </>
  )
}

export default App
