import * as actionTypes from "../contents/errContent";

const initialState = {
  msg: "",
  active_message: false,
  type: '',
 

};

const err = (state = initialState, action) => {
  switch (action.type) {


    case actionTypes.MSG:
      const msg = {
        ...state,
      };
     if(action.data){
      msg.msg = action.data.msg 
      msg.active_message = true
      msg.type = action.data.type
     }else{
      msg.msg = ''
      msg.active_message = false
      msg.type = ''
     }

      return msg;

  


    case actionTypes.CLEAR:
      const clear = {
        ...state,
      };
        clear.msg = ""
        clear.active_message = false;
        clear.type = ''
      return clear;








    default:
      return state

  }
}

export default err