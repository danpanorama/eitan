import {MSG , CLEAR} from '../constants/errConstant'


export const messageAction = (data) => async (dispatch)=>{
    try{

        dispatch({type:CLEAR, data:data});
       function clearmessage(){
            dispatch({type:CLEAR, data:data});
    
         }

        clearTimeout(clearmessage);
        dispatch({type:MSG, data:data});
        setTimeout(clearmessage,3000);

    

    }catch(e){
        dispatch({
            type:MSG,
            data:{type:'bad',msg:e.response && e.response.data.message ?e.response.data.message 
            : e.message},
        })
    }
}


export const clearErrState = (data) => async (dispatch)=>{
    try{


        dispatch({type:CLEAR, data:data});
     

    }catch(e){
        dispatch({
            type:MSG,
            data:{msg:e.response && e.response.data.message ?e.response.data.message 
            : e.message,type:'bad'}
        })
    }
}

