const IngrUl = ({data, ulName}) => {
    return (
        <ul>
            <p>{ulName}</p>
            {data.map((val, i) => {
                return (
                    <li key={i}>{val}</li>
                )
            })}
        </ul>
    )
}
export default IngrUl