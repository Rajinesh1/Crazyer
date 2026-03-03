import { createContext, useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const[search,setSearch] =useState("")

     const getTotalAboutCount = () => {
  let totalCount = 0;
  for (const item in foodItems) {
    if (foodItems[item] > 0) {
      totalCount += foodItems[item];
    }
  }
  return totalCount;
};

    const [foodItems,setFoodItems] =useState([])

      const addToAbout = (itemId) =>{
        if(!foodItems[itemId]){
            setFoodItems((prev) => ({...prev,[itemId]:1}))
        } else{
            setFoodItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        }
    }
     const removeFromAbout = (itemId) => {
        setFoodItems((prev) =>({...prev,[itemId] :prev[itemId]-1 }))
    }

    const getTotalCartCount = () => {
  let totalCount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      totalCount += cartItems[item];
    }
  }
  return totalCount;
};

    const [cartItems,setCartItems] = useState({});

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev) => ({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) =>({...prev,[itemId] :prev[itemId]-1 }))
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price*cartItems[item];
            }
            
        }
        return totalAmount
    }
    const contextValue = {
        food_list,
        cartItems,
        foodItems,
        search,
        setSearch,
        setCartItems,
        addToCart,
        addToAbout,
        removeFromAbout,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartCount,
        getTotalAboutCount

    }
    
    return (
        <StoreContext.Provider value={contextValue}>
        {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider