import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Slide from "./Slide"
import "./favblock.css"

const FavBlock = () => {
    const favs = useSelector((state) => state.dishReducer.favs)
    const [slideIndex, setSlideIndex] = useState(0)
    useEffect(() => {
        if (favs[0]) setSlideIndex(0)
    }, [favs])
    if (favs.length === 0) {    
        return (
            <div className="flex f-column">
                <h2>Your list is Empty</h2>
                <Link to='/'>to Home Page</Link>
            </div>
    )}
    const setPrevSlide = () => {
        if (favs.length > 0) {
            let newIndex = slideIndex - 1
            if (newIndex < 0) newIndex = favs.length -1
            setSlideIndex(newIndex)
        }
    }
    const setNextSlide = () => {
        if (favs.length > 0) {
            let newIndex = slideIndex + 1
            if (newIndex >= favs.length) newIndex = 0
            setSlideIndex(newIndex)
        }
    }
    return (
        <div className="slider flex f-column f-center">
            <button className="arrow prev" onClick={() => setPrevSlide()}>&#8656</button>
            <button className="arrow next" onClick={() => setNextSlide()}>&#8658</button>
            <Slide data={favs[slideIndex]} />
        </div>
    )
}
export default FavBlock