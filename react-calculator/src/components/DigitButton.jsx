import { ACTIONS } from "./main"
export default function DigitButton({dispatch, digit}){
   
    return <button  className="button-name"
    onClick={()=>dispatch({type:ACTIONS.ADD_DIGIT, payload:{digit}})}>
        {digit}</button>

}