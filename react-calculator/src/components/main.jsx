import React, { useReducer } from "react";
import { useState } from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";



 export const ACTIONS={

  CLEAR:'clear',
  ADD_DIGIT:'add-digit',
  CHOOSE_OPERATION:'choose-operation',
  CHOOSE_SIGN: 'choose_sign',
  EQUAL: 'equal',
  PERCENTAGE:'%'




 }



 function reducer(state, {type, payload}){

  switch(type){
    case ACTIONS.ADD_DIGIT:

      if (payload.digit==='0'&& state.currentOperand ==='0') return {...state, result:state.currentOperand}
      if (payload.digit==='.'&& state.currentOperand.includes('.')) return {...state, result:state.currentOperand}
      return{
      ...state,
      currentOperand: `${state.currentOperand|| ''}${payload.digit}`,
      result:`${state.currentOperand|| ''}${payload.digit}`
     
   }
   

     

   case ACTIONS.CLEAR:
     return {
      ...state,
      currentOperand:'',
      previousOperand:'',
      operation:'',
      result:'0'
     }

   case ACTIONS.CHOOSE_OPERATION:
    
    
    if(state.previousOperand==null)
    return{
      ...state,
      operation:payload.operation,
      previousOperand:state.currentOperand,
      currentOperand:null,
      result:state.currentOperand
    }

    

    if (state.currentOperand==null)
    return{
      ...state,
      operation:payload.operation


    }

    return{
      ...state,

      previousOperand:evaluate(state),
      operation:payload.operation,
      currentOperand:null,
      result:evaluate(state),

    }

    case ACTIONS.EQUAL:
   


        if(state.operation==null
          || state.currentOperand==null||
           state.previousOperand==null){
              return state
        }

      return{
        ...state,
         previousOperand:null,
         currentOperand: evaluate(state),
         operation:null,
         result:evaluate(state),
      }

      case ACTIONS.CHOOSE_SIGN:

      
       return{
        ...state,
         previousOperand:null,
         currentOperand: changeSign(state),
         operation:null,
         result:changeSign(state)
       }

    case ACTIONS.PERCENTAGE:
      return{
        ...state,
         previousOperand:null,
         currentOperand: Percentage(state),
         operation:null,
         result:Percentage(state)
       }

}

 }

 function Percentage({result}){
    return result/100
 }

 function changeSign({result})
 {
    return result*-1
 }


 function evaluate({currentOperand, previousOperand, operation}){
     
  const prev= parseFloat(previousOperand)
  const current= parseFloat(currentOperand)
  if(isNaN(prev)|| isNaN(current)) return ""

  let  comp=""

  switch(operation){

    case '+':
      comp= prev + current
      break

    case '-':
        comp= prev - current
        break

   case '*':
          comp= prev * current
          break


  case '/':
            comp= prev / current
            break

  

       
      





  }

      return comp.toString()

 }


function main(props){
   
  const [state, dispatch]=useReducer(reducer,{currentOperand:null, previousOperand: null, operation: null, result:0})

 

  return(
   <main className={props.darkmode?'main-dark':''}>
     <div className="calc-container">
      <div> 
         <div className="cview">
           <p className="result">{state.result}</p>
          </div>
         
         <p className="button-tooltip"> Cview</p>

      </div>

      <div className="buttons">
       <div className="button-container">
         <button className="button-name" 
         onClick={()=>dispatch({type:ACTIONS.CLEAR})}> Ac</button>
         <p className="button-tooltip"> Ac</p>
       </div>

       <div className="button-container">
         <button className="button-name"
         onClick={()=>dispatch({type:ACTIONS.CHOOSE_SIGN})}> +/-</button>
         <p className="button-tooltip"> +/-</p>
       </div>

       <div className="button-container">
         <button className="button-name"
         onClick={()=>dispatch({type:ACTIONS.PERCENTAGE})}>% </button>
         <p className="button-tooltip"> %</p>
       </div>

       <div className="button-container">
       <OperationButton operation='/' dispatch={dispatch}/>
         <p className="button-tooltip"> /</p>
       </div>


       <div className="button-container">
         <DigitButton digit='7' dispatch={dispatch}/>
         <p className="button-tooltip"> 7</p>
       </div>


       <div className="button-container">
       <DigitButton digit='8' dispatch={dispatch}/>
         <p className="button-tooltip"> 8</p>
       </div>

       <div className="button-container">
       <DigitButton digit='9' dispatch={dispatch}/>
         <p className="button-tooltip"> 9</p>
       </div>

       <div className="button-container">
       <OperationButton operation='*' dispatch={dispatch}/>
         <p className="button-tooltip"> *</p>
       </div>

       <div className="button-container">
       <DigitButton digit='4' dispatch={dispatch}/>
         <p className="button-tooltip"> 4</p>
       </div>


       <div className="button-container">
       <DigitButton digit='5' dispatch={dispatch}/>
         <p className="button-tooltip"> 5</p>
       </div>

       <div className="button-container">
       <DigitButton digit='6' dispatch={dispatch}/>
         <p className="button-tooltip"> 6</p>
       </div>

       <div className="button-container">
       <OperationButton operation='-' dispatch={dispatch}/>
         <p className="button-tooltip"> -</p>
       </div>

       <div className="button-container">
       <DigitButton digit='1' dispatch={dispatch}/>
         <p className="button-tooltip"> 1</p>
       </div>

       <div className="button-container">
       <DigitButton digit='2' dispatch={dispatch}/>
         <p className="button-tooltip"> 2</p>
       </div>

       <div className="button-container">
       <DigitButton digit='3' dispatch={dispatch}/>
         <p className="button-tooltip"> 3</p>
       </div>

       <div className="button-container">
       <OperationButton operation='+' dispatch={dispatch}/>
         <p className="button-tooltip"> +</p>
       </div>

       <div className="last-row">

       <div className="button-container">
       <DigitButton digit='0' dispatch={dispatch}/>
         <p className="button-tooltip"> 0</p>
       </div>

       <div className="button-container">
       <DigitButton digit='.' dispatch={dispatch}/>
         <p className="button-tooltip"> .</p>
       </div>

       <div className="button-container">
         <button className="button-name"
           onClick={()=>dispatch({type:ACTIONS.EQUAL})}>=</button>
         <p className="button-tooltip"> =</p>
       </div>
       </div>






      </div>
    </div>


   </main>

  )
}


export default main;