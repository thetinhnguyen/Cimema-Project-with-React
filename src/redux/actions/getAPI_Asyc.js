import Axios from 'axios'
export const getAPI_asyc=(method,action)=>dispatch=>{
    return Axios(
        method
    ).then(
        Respond=>{
         dispatch(action(Respond.data))
        }
      ).catch(erro => console.log(erro))
}