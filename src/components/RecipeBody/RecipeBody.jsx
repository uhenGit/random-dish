import IngrUl from "../Ingrul/IngrUl"
import getValAsArr from "../Main/getVals"

export function RecipeBody({data}) {
    const dataIngr = getValAsArr(data, 'strIngredient')
    const dataQuant = getValAsArr(data, 'strMeasure')
    return (
        <div className="recipe-body-wrap flex">
            <img src={data.strMealThumb} alt={data.strMeal} />
            <section className="recipe-ingr">
                <div className="ingrs-wrap flex">
                    <IngrUl data={dataIngr} ulName={'Ingredient'}/>
                    <IngrUl data={dataQuant} ulName={'Quantity'}/>
                </div>
            </section>
        </div>
    )
}