import { Link, useLocation } from "react-router-dom"
import { RecipeBody } from "../RecipeBody/RecipeBody"
import AddRemoveBtn from "../AddRemoveButton/AddRemoveBtn"

const Detales = () => {
    const history = useLocation()
    const data = history.state
    return (
        <div className="detales-wrap main">
            <div className="btn-block">
                <button>
                    <Link to='/'>Back</Link>
                </button>
                <AddRemoveBtn meal={data} />
            </div>
            <div className="recipe-wrap flex f-column f-center">
                <h2>{data.strMeal}</h2>
                <RecipeBody data={data}/>
                <section className="recipe-instruction">{data.strInstructions}</section>
            </div>
        </div>
    )
}
export default Detales