import React, { useState, useContext } from "react";
import { FaCaretDown, FaLocationArrow } from "react-icons/fa"
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link,useNavigate } from 'react-router-dom';
import { StoreContext } from "../context/StoreContext";
const Navbar = ({setShowLogin}) => {

  const {food_list, search, setSearch,addToAbout} = useContext(StoreContext)

   const Navigate = useNavigate();

  // Filter items
  const filteredItems = food_list.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const [location, setLocation] = useState("Vizag");9
  const [loadingLocation, setLoadingLocation] = useState(false);

const detectLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser");
    return;
  }

  setLoadingLocation(true);

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      try {
        const { latitude, longitude } = position.coords;

        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
          {
            headers: {
              "User-Agent": "your-app-name"
            }
          }
        );

        const data = await response.json();

        const city =
          data.address.city ||
          data.address.town ||
          data.address.village ||
          data.address.state ||
          "Current Location";

        setLocation(city);
      } catch (error) {
        alert("Failed to fetch location name");
      } finally {
        setLoadingLocation(false);
      }
    },
    (error) => {
      setLoadingLocation(false);

      if (error.code === error.PERMISSION_DENIED) {
        alert("Please allow location access");
      } else {
        alert("Unable to retrieve location");
      }
    }
  );
};
    const {getTotalCartCount} = useContext(StoreContext)
    const totalItems = getTotalCartCount();
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
            <span className="location-text">{loadingLocation?"Detecting...":location}
            <img src={assets.caret_down} className="caret" onClick={detectLocation}/>
            </span>
            </div>
        <div className="divider">
        </div>
        <div className="input-text">
            <input className="input-search"
            type="text"
            placeholder="Search for restaurant or dish"
            value={search}
            onChange={(e) => setSearch(e.target.value)}>
            </input>
            <Link to='/about'>{search && filteredItems.length >0 &&(
              <div className="search-results">
                {filteredItems.map(item =>(
                  <p key={item.id}
                  onClick={()=>{
                    addToAbout(item._id)
                    setSearch("");
                  }}>
                  <img src={item.image}/>
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                  </p>
                ))}
              </div>
            )}</Link>
        </div>
        <div className="search-button">
        <img src={assets.search_icon}/>
        </div>

        </div>
        <div className="navbar-right">
        <div className="navbar-basket-icon">
        <Link to='/cart'>
        <img src={assets.basket_icon} alt="basket-icon"/>
        </Link>

        {totalItems > 0 && (
        <span className="cart-badge">
        {totalItems}
        </span>
        )}
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
        </div>
        </div>
        </div>
    )
}

export default Navbar