import { ACTIONS } from "./main"
export default function OperationButton({dispatch, operation}){
   
    return <button  className="button-name"
    onClick={()=>dispatch({type:ACTIONS.CHOOSE_OPERATION, payload:{operation}})}>
        {operation}</button>

}