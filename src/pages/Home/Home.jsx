import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Header2 from '../../components/Header2/Header2'

const Home = () => {

  const [category, setCategory] = useState("All")

  return (
    <div>
    <Header/>
    <ExploreMenu category={category} setCategory={setCategory}/>
    <Header2/>
    <FoodDisplay category={category}/>
    </div>
  )
}

export default Home