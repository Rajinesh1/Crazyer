import React,{useContext, useEffect} from 'react'
import './About.css'
import { StoreContext } from '../../components/context/StoreContext'
import { assets } from '../../assets/assets'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
const About = () => {
   const Navigate = useNavigate()
   const {foodItems,food_list,addToCart,removeFromAbout} = useContext(StoreContext)
   useEffect(() => {
      window.scrollTo(0,0)
   },[])
   return(
      <div className='about'>
      <hr/>
         <div className='about-food'>
            {food_list.map((item,index) =>{
               if(foodItems[item._id]>0)
               {
                  return(
                     <>
                     <div className='about-cancel'>
                     <h2>Description:</h2>
                        <FaTimes className='about-cancel-icon' onClick={() =>{
                        Navigate(-1)
                        removeFromAbout(item._id)}}/>
                     </div>
                     <hr/>
                        <div className='about-food-desc'>
                        <img src={item.image}></img>
                           <div className='about-food-text'>
                           <h2>{item.name}</h2>
                           <p>{item.description}</p>
                           <div className='about-food-cart'>
                           <h3>₹{item.price}</h3>
                           <button  onClick={() => addToCart(item._id)}>Add to cart</button>
                           </div>
                           </div>
                        </div>
                        <hr/>
                        </>
                  )
               }
            })}
             </div>
            <hr/>
      </div>
   )
}

export default About
