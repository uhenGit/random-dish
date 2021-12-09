import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {
    return (
        <header>
            <div className="wrap">
                <nav>
                    <ul className='flex'>
                        <li>
                            <Link to={ '/' }>Random Dish</Link>
                        </li>
                        <li>
                            <Link to={ '/favourites' }>Favourites</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header