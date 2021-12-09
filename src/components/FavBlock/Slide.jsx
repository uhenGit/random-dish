import { Link } from "react-router-dom"
import AddRemoveBtn from "../AddRemoveButton/AddRemoveBtn"

export default function Slide({data}) {
    const {strMeal, strMealThumb} = data
    return (
        <div className="slide flex f-column f-center">
            <div className="slide-inner">
                <h2>{strMeal}</h2>
                <img src={strMealThumb} alt={strMeal} />
                <div className="btn-block flex">
                    <button>
                        <Link to='/detales' state={data}>Detales...</Link>
                    </button> <AddRemoveBtn meal={data}/>
                </div>                    
            </div>
        </div>
    )
}