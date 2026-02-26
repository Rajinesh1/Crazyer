import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../components/context/StoreContext'

const PlaceOrder = () => {
    const {getTotalCartAmount} = useContext(StoreContext)
    return (
        <div className='order'>
        <form className='place-order'>
            <div className='place-order-left'>
                <p className='title'>Delivery Information</p>
                <div className='multi-fields'>
                <input type='text' placeholder='First name'/>
                <input type='text' placeholder='Last name'/>
                </div>
                <input type='email' placeholder='Email address'/>
                <input type='text' placeholder='Street'/>
                  <div className='multi-fields'>
                <input type='text' placeholder='City'/>
                <input type='text' placeholder='State'/>
                </div>
                  <div className='multi-fields'>
                <input type='text' placeholder='Zip code'/>
                <input type='text' placeholder='Country'/>
                </div>
                <input type='text' placeholder='Phone'/>
            </div>
            <div className='place-order-right'>
            <div className="cart2-totals">
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
      <button>PROCEED TO PAYMENT</button>
      </div>
        </div>
        </form>
        </div>
    )
}

export default PlaceOrder