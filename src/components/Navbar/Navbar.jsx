import React, { useContext } from "react";
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from "../context/StoreContext";
const Navbar = ({setShowLogin}) => {

    const {getTotalCartAmount} = useContext(StoreContext)
    let lastScrollTop = 0;
    const navbar= document.getElementById("navbar")
    const scrollLimit = 500;

    window.addEventListener("scroll", function(){
        let scrollTop = window.scrollY ||
        document.documentElement.scrollTop;

        const windowHeight = this.window.innerHeight;
        const fullHeight = this.document.documentElement.scrollHeight;

        if(windowHeight + scrollTop >= fullHeight -5){
            navbar.classList.remove("hide")
            return;
        }

        if(Math.abs(scrollTop + lastScrollTop)<15){
            return;
        }
        if(scrollTop>lastScrollTop && scrollTop>scrollLimit) {
            navbar.classList.add("hide");
        } else {
            navbar.classList.remove("hide");
        }

        lastScrollTop = scrollTop <=0?0:scrollTop;
    });
    
    return (
        <div className="nav" id="navbar">
        <div className="navbar">
        <Link to='/'><img src={assets.logo} alt="" className="logo"/></Link>
        <div className="search-bar">
            <div className="location">
                <img src={assets.location} alt="location"/>
            <span>Anakapalli</span>
            <i className="fa-caret-down">
            </i>
            </div>
        <div className="divider">
        </div>
        <div className="input-text"> 
            <input className="input-search"
            type="text"
            placeholder="Search for restaurant or dish"></input>
        </div>
        <div className="search-button">
        <img src={assets.search_icon}/>
        </div>

        </div>
        <div className="navbar-right">
        <div className="navbar-basket-icon">
        <Link to='/cart'><img src={assets.basket_icon} alt="basket-icon"/></Link>
        <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
        </div>
        </div>
        </div>
    )
}

export default Navbar