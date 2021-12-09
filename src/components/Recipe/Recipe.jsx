import { Link } from "react-router-dom"
import { RecipeBody } from "../RecipeBody/RecipeBody"
import AddRemoveBtn from "../AddRemoveButton/AddRemoveBtn"
import "./recipe.css"

const Recipe = ({meal}) => {
    const data = meal[0]
    return (
        <div className="recipe-wrap flex f-column f-center">
            <h2>{data.strMeal}</h2>
            <RecipeBody data={data}/>
            <div className="btn-block flex">
                <button>
                    <Link to='/detales' state={data}>Detales...</Link>
                </button>
                <AddRemoveBtn meal={data} />
            </div>
        </div>
    )
}
export default Recipe