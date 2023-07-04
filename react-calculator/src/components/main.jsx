import React from "react";
import { useState } from "react";

export default function main(){
  const [currentValue,  setCurrentValue]=useState('0')



  return(
   <main>
     <div className="calc-container">
      <div> 
         <div className="cview">{currentValue}</div>
         <p className="button-tooltip"> Cview</p>

      </div>

      <div className="buttons">
       <div className="button-container">
         <button className="button-name"> Ac</button>
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
         <button className="button-name"> 7</button>
         <p className="button-tooltip"> 7</p>
       </div>


       <div className="button-container">
         <button className="button-name"> 8</button>
         <p className="button-tooltip"> 8</p>
       </div>

       <div className="button-container">
         <button className="button-name"> 9</button>
         <p className="button-tooltip"> 9</p>
       </div>

       <div className="button-container">
         <button className="button-name"> *</button>
         <p className="button-tooltip"> *</p>
       </div>

       <div className="button-container">
         <button className="button-name"> 4</button>
         <p className="button-tooltip"> 4</p>
       </div>


       <div className="button-container">
         <button className="button-name"> 5</button>
         <p className="button-tooltip"> 5</p>
       </div>

       <div className="button-container">
         <button className="button-name"> 6</button>
         <p className="button-tooltip"> 6</p>
       </div>

       <div className="button-container">
         <button className="button-name"> -</button>
         <p className="button-tooltip"> -</p>
       </div>

       <div className="button-container">
         <button className="button-name"> 1</button>
         <p className="button-tooltip"> 1</p>
       </div>

       <div className="button-container">
         <button className="button-name"> 2</button>
         <p className="button-tooltip"> 2</p>
       </div>

       <div className="button-container">
         <button className="button-name"> 3</button>
         <p className="button-tooltip"> 3</p>
       </div>

       <div className="button-container">
         <button className="button-name"> +</button>
         <p className="button-tooltip"> +</p>
       </div>

       <div className="last-row">

       <div className="button-container">
         <button className="button-name"> 0</button>
         <p className="button-tooltip"> 0</p>
       </div>

       <div className="button-container">
         <button className="button-name"> .</button>
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