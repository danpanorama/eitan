import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import { useDispatch, useSelector } from "react-redux";

import './App.css';
import { useEffect, useState } from 'react';
import { ADD_TO_CART } from './Redux/contents/cartContent';

function App() {
  const [arrayState,setArrayState]= useState([]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  function addToCart(e){
    console.log(cart)
    dispatch({type:ADD_TO_CART,data:e})
   

  }

  let array = []

  useEffect(()=>{
    let array = []
    for(let i = 1; i < 30; i++){
      array.push({img:img2,id:i,name:'food name',quantity:1})
    }
    setArrayState(array)

  },[])

  return (
    <div className="App flexCol center ">
      <h1>food store</h1>

      <div className="grid w70">
        {arrayState.map((e)=>{
          return(
            <div key={e.id} className="oneFood flexCol center">
              <p className="image">
                <img src={e.img} className='img' alt="" />
      
              </p>
              <p className="name">
                {e.name}
              </p>
              <div className="buttons  flexRow bet">
              <button className='btn red'>-</button>
            {cart.cart_List.map((cartProduct)=>{
              if(cartProduct.id == e.id ){
                return(
                  <div className="">
                    {cartProduct.quantity}
                  </div>
                )
              }
            })}
                <button className='btn green' onClick={()=>{
                  addToCart(e)
                }}>+</button>
              </div>

              
            </div>
          )
        })}

      </div>

     
    </div>
  );
}

export default App;
