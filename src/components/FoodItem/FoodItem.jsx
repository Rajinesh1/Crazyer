import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../context/StoreContext'
import { Link, Navigate } from 'react-router-dom'

const FoodItem = ({id,name,price,rating,description,image}) => {
  const {addToAbout,foodItems,cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className='food-item'>
    <div className='food-item-img-container'>
      {!foodItems[image]?<Link to='/about'><img className='food-item-image' onClick={()=>addToAbout(id)} src={image} alt='' /></Link>
      :("")}
      {
        !cartItems[id]
        ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
        :<div className='food-item-counter'>
        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt='icon_red'/>
        <p>{cartItems[id ]}</p>
        <img onClick={()=>addToCart(id)}src={assets.add_icon_green} alt='icon_green'/>
        </div>
      }
    </div>
    <div className='food-item-info'>
    <div className='food-item-name-rating'>
    <p>{name}</p>
    <div className='food-rating'>
    <p>{rating}</p>
    <img src={assets.rating_starts} alt=''/>
    </div>
    </div>
    <p className='food-item-description'>{description}</p>
    <p className='food-item-price'>₹{price}</p>
    </div>
    </div>
  )
}

export default FoodItem
