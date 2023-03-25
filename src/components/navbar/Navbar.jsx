import { NavLink, Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/about'>
                About
            </NavLink>
            <Link to="https://kun.uz/" target="_blank">
                Kun.uz
            </Link>
        </div>
    )
}

export default Navbar