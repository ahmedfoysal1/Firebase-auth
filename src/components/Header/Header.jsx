import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="space-x-2">
            <button className="btn btn-primary rounded-xl"><NavLink to={'/'}>Home</NavLink></button>
            <button className="btn btn-primary rounded-xl"><NavLink to={'/login'}>Login</NavLink></button>
        </div>
    );
};

export default Header;