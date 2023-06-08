import * as actionTypes from "../contents/cartContent";

const initialState = {
  cart_List: [],
 total_price:0,
 id:0

};

const store = (state = initialState, action) => {
  switch (action.type) {


    // case actionTypes.SET_STORE_ITEMS:
    //   const store_items = {
    //     ...state,
    //   };

    //  if(action.data){
    //   store_items.cart_List = action.data.allItems
    //   store_items.store_nav = action.data.servingWaysList
    //   store_items.salads_list = action.data.saladslist
    //  }else{
    //     store_items.cart_List = []

    //  }

    //   return store_items;

  
    case actionTypes.ADD_TO_CART:
      const add = {
        ...state,
      };
      if(action.data){
        console.log(action.data.id)
       
        let flag = false
        for(let i =0; i < add.cart_List.length; i++){
          if(add.cart_List[i].id == action.data.id){
            add.cart_List[i].quantity += 1 

          }else{
          flag = true
          }
        } 
        if(add.cart_List.length ==0){
           add.cart_List.push(action.data)
         }
        if(flag){
          add.cart_List.push(action.data)
        }
      
      }
     
      return add;



    case actionTypes.CLEAR:
      const clear = {
        ...state,
      };
        clear.cart_List = []
        clear.id = 0
      return clear;








    default:
      return state

  }
}

export default store