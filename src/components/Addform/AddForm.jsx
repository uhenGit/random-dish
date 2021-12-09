import { useState } from "react"
import { useDispatch } from "react-redux"
import { addNewDish } from "../../actions/dishActions"
import "./addform.css"

const AddForm = (props) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const handleInput = (e) => {
        setTitle(e.target.value)
    }
    const handleText = (e) => {
        setBody(e.target.value)
    }
    const handleForm = (e) => {
        e.preventDefault()
        const dish = {title, body}
        dispatch(addNewDish(dish))
        setTitle('')
        setBody('')
        props.showFunc()
    }
    return (
        <form className="flex f-center f-column" onSubmit={handleForm}>
            <h3>Add custom dish</h3>
            <div className="btn-block">
                <button type="button" onClick={()=>props.showFunc()}>close</button>
            </div>
            <label>
                <input type="text" name="dishTitle" onChange={handleInput} value={title} />
            </label>
            <label>
                <textarea name="dishBody" cols="30" rows="10" onChange={handleText} value={body}></textarea>
            </label>
            <div className="btn-wrap">
                <button type="submit">Add custom dish</button>
            </div>
        </form>
           
    )
}
export default AddForm