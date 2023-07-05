import React from "react";
import icon from  '../assets/icon.svg'



 export default  function header(props){
    return(
        <nav className={props.darkmode?'nav-dark':''}>
            <div className="header-container">
                <div className="icon-container">
               <img src={icon} className="calc-icon"/>
               <h3 className="calc-title">Reactive calculator</h3>
               </div>
               <div className="toggle-Container" >
          <div  className="toggle-slider"  onClick={props.handleClick}>
           <div className="toggle-circle"></div>
           </div>
            </div>

            </div>
        

        </nav>
    )
 }