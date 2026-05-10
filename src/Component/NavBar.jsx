import { Link } from 'react-router';
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/register"}>Register</Link>
            </li>
            <li>
                <Link to={"/Login"}>Login</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar