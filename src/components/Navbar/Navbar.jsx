import React, { useState, useContext } from "react";
import { FaCaretDown } from "react-icons/fa"
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from "../context/StoreContext";
const Navbar = ({setShowLogin}) => {
    const[location,setLocation] = useState("Vizag");
    const detectLocation = () =>{
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async(position) => {
                    const { latitude, longitude } = position.coords;
                    const response = await fetch(
                         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                    );
                    const data = await response.json();

                    const city = 
                    data.address.city ||
                    data.address.town ||
                    data.address.village ||
                    "Current Location"
                    setLocation(city);
                },
                (error) => {
                    alert("Location access denied!")
                }
            );
        }else {
            alert("geolocation not supported.")
        }

    };
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
                <img src={assets.location} alt=""/>
            <span className="location-text">{location}
            <FaCaretDown className="caret" onClick={detectLocation}/>
            </span>
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
