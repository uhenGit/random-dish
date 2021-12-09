import { useDispatch } from "react-redux"
import Sceleton from "../Sceleton/Sceleton"
import Recipe from "../Recipe/Recipe"
import { fetchRandDish } from "../../actions/dishActions"

const Main = ({meal}) => {
    const { loading, error, dish } = meal
    const dispatch = useDispatch()
    if (loading || !('meals' in dish)) return (<Sceleton />)
    if (error) return (
        <div className="main">
            <h3>{error}</h3>
        </div>
    )
    return (
        <main className="main">
            <Recipe meal={dish.meals} />
            <div className="btn-block flex f-center">
                <button onClick={() => dispatch(fetchRandDish())}>Skip</button>
            </div>
        </main>
    )
}
export default Main