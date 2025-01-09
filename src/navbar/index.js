import { NavLink } from "react-router-dom";

const NavLinks = () => {
    return (
        <>
            <nav>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/profile'>My Profile</NavLink>
            </nav>
        </>
    )
}
export default NavLinks;