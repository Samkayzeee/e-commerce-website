import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return ( 
        <>
            <nav className="navbar">
                <div className="logo">
                    <Link to={'/'}>SAMKAYZEE</Link>
                </div>

                <div className="links">
                    <ul>
                        <li> <Link to={'/products'}>Products</Link> </li>
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;