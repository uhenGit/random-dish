import { useDispatch, useSelector } from "react-redux"
import { addToFavs, remFromFavs } from "../../actions/dishActions"

const AddRemoveBtn = ({meal}) => {
    const dispatch = useDispatch() 
    const favs = useSelector((state) => state.dishReducer.favs)
    const mealId = meal.idMeal
    let isFav = false
    if (favs.length !== 0) {
        for (let i = 0; i < favs.length; i++) {    
            if (mealId === favs[i].idMeal) {
                isFav = true
                break;
            }        
        }
    }       
    return (
        <div className="btn-wrap">
            {!isFav ? <button onClick={() => dispatch(addToFavs(meal))}>Add</button> :
            <button onClick={() => dispatch(remFromFavs(mealId))}>Remove</button>}
        </div>
    )
}
export default AddRemoveBtn