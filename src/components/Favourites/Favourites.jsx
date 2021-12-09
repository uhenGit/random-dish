import { useState } from "react"
import FavBlock from "../FavBlock/FavBlock"
import AddForm from "../Addform/AddForm"

import "./favs.css"

const Fav = () => {
    const [isShow, setShow] = useState(false)
    const toggleModal = (e) => {
        setShow(!isShow)
    }
    return (
        <section className="fav-wrap main">
            <div className="btn-block">
                <button onClick={toggleModal}>Add Custom Dish</button>
            </div>
            <FavBlock />
            <div className={isShow ? "outer show-modal" : "outer"}>
                <div className="inner">
                    <AddForm showFunc={toggleModal}/>
                </div>
            </div>            
        </section>
    )
}
export default Fav