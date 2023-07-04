import React, { useReducer } from "react";
import { useState } from "react";
import DigitButton from "./DigitButton";


 export const ACTIONS={

  CLEAR:'clear',
  ADD_DIGIT:'add-digit',
  CHOOSE_OPERATION:'choose-operation',
  CHOOSE_SIGN: 'choose_sign',
  EQUAL: 'equal'




 }



 function reducer(state, {type, payload}){

  switch(type){
    case ACTIONS.ADD_DIGIT:
      
      if (payload.digit==='0'&& state.currentOperand ==='0') return state
      if (payload.digit==='.'&& state.currentOperand.includes('.')) return state
      return{
      ...state,
      currentOperand: `${state.currentOperand|| ''}${payload.digit}`
   }

   case ACTIONS.CLEAR:
     return {
      ...state,
      currentOperand:''
    }


     


  }

 }


export default function main(){
   
  const [state, dispatch]=useReducer(reducer,{currentOperand:'', previousOperand:'', operation:''})

  

  return(
   <main>
     <div className="calc-container">
      <div> 
         <div className="cview">
          <p>{state.previousOperand}</p>
          <p>{state.currentOperand}</p>
          </div>
         
         <p className="button-tooltip"> Cview</p>

      </div>

      <div className="buttons">
       <div className="button-container">
         <button className="button-name" onClick={()=> dispatch({type:ACTIONS.CLEAR})}> Ac</button>
         <p className="button-tooltip"> Ac</p>
       </div>

       <div className="button-container">
         <button className="button-name"> +/-</button>
         <p className="button-tooltip"> +/-</p>
       </div>

       <div className="button-container">
         <button className="button-name"> %</button>
         <p className="button-tooltip"> %</p>
       </div>

       <div className="button-container">
         <button className="button-name"> /</button>
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
         <button className="button-name"> *</button>
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
         <button className="button-name"> -</button>
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
         <button className="button-name"> +</button>
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
         <button className="button-name">=</button>
         <p className="button-tooltip"> =</p>
       </div>
       </div>






      </div>
    </div>


   </main>

  )
}