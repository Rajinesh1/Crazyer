import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu'>
    <div className='explore-menu-content' id='explore-menu'>
    <h1>Explore Our Menu</h1>
    <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission to satisfy your cravings and elevate your during experience.One delicious meal of a time.</p>
    </div>
    <div className='explore-scroll'>
    <div className='explore-menu-list'>
    {menu_list.map((item,index) => {
        return (
           <a href='#food-display'><div onClick={() => setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
            <p>{item.menu_name}</p>
            </div>
            </a>
        )
    })}
    </div>
    </div>
    </div>
  )
}

export default ExploreMenu