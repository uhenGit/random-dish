import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Header from "./Header/Header"
import Main from "./Main/Main"
import Detales from "./Detales/Detales"
import Fav from "./Favourites/Favourites"
import { fetchRandDish } from "../actions/dishActions"

const App = () => {
  const dispatch = useDispatch();
  const mealObj = useSelector((state) => state.dishReducer)
  useEffect(() => { 
    dispatch(fetchRandDish())
   }, [])
  return (
      <div className='flex f-center f-column'>
        <Header />
        <Routes>
          <Route path='/' element={<Main meal={mealObj}/>}/>
          <Route path='/detales' element={<Detales />}/>
          <Route path='/favourites' element={<Fav />}/>
        </Routes>
      </div>
  );
}

export default App
