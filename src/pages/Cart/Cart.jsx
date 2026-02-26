import React,{useContext} from "react";
import './Cart.css'
import { StoreContext} from '../../components/context/StoreContext'
import { Link, Navigate } from "react-router-dom";

const Cart = () => {
  const {cartItems,food_list,removeFromCart, getTotalCartAmount} = useContext(StoreContext);
  return(
    <div className="cart">
      <div className="cart-items">
      <div className="cart-items-title">
      <p>Items</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>

      </div>
      <br/>
      <hr/>
      {food_list.map((item,index) =>{
        if(cartItems[item._id]>0)
        {
          return(
            <div>
            <div className="cart-items-title cart-items-item">
            <img src={item.image} alt=""/>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>{cartItems[item._id]}</p>
            <p>${item.price*cartItems[item._id]}</p>
            <p onClick={() =>removeFromCart(item._id)} className="cross">x</p>
            </div>
            <hr/>
            </div>
          )
        }
      })}
      </div>
      <div className="cart2">
      <div className="cart2-totals">
       <h1>Cart Totals</h1>
      <div className="cart2-details">
      <div className="cart2-total-details">
      <p>Subtotal</p>
      <p>${getTotalCartAmount()}</p>
      </div>
      <hr/>
        <div className="cart2-total-details">
        <p>Delivery Fee</p>
        <p>${1}</p>
        </div>
        <hr/>
          <div className="cart2-total-details">
          <b>Total</b>
          <b>${getTotalCartAmount() +1}</b>
        </div>
      </div>
      <Link to='/order' ><button>PROCEED TO CHECKOUT</button></Link>
      </div>
        <div className="cart2-promocode">
        <p>If you have a promocode, Enter it here.</p>
        <div className="cart2-promocode-input">
          <input type="text" placeholder="promo code"/>
          <button>Submit</button>
        </div>
        </div>
      </div>
      </div>

  )
}

export default Cart;
