import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeProvider';


const Navbar = () => {

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const cartLength = useSelector(state => state.cart.value);
  const context = useContext(ThemeContext);

  const Logout = () => {
    localStorage.removeItem("token");
    navigate('/');
  }
    return ( 
        <>

<nav className={`navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm ${context.theme === 'light' ? null : 'navbar-darkmode'}`}>
  <div className="container-fluid">
    <Link to={'/'} className="navbar-brand">SAMKAYZEE.</Link>
    <button className={`navbar-toggler ${context.theme === 'light' ? null : 'bg-light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span> 
              {
                cartLength.length === 0 ? null : <span className='show-cart'>{cartLength.length}</span>
              }
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact='true' className="nav-link" aria-current="page" to={'/'} style={({isActive}) => ({transform: isActive ? 'translateY(-5px)' : null, color: context.theme === 'light' ? 'black' : 'white'})} >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/products'} className="nav-link" style={({isActive}) => ({transform: isActive ? 'translateY(-5px)' : null, color: context.theme === 'light' ? 'black' : 'white'})} >Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/about'} className="nav-link" style={({isActive}) => ({transform: isActive ? 'translateY(-5px)' : null, color: context.theme === 'light' ? 'black' : 'white'})} >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/contact'} className="nav-link" style={({isActive}) => ({transform: isActive ? 'translateY(-5px)' : null, color: context.theme === 'light' ? 'black' : 'white'})} >Contacts</NavLink>
        </li>
      </ul>

      <div className="buttons">
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
            {
              token? <button onClick={Logout} className={`btn ${context.theme === 'light' ? 'btn-outline-dark' : 'btn-outline-light'}`}>Log Out</button> : <Link to={'/login'} className={`btn ${context.theme === 'light' ? 'btn-outline-dark' : 'btn-outline-light'}`}>Login <i className="fa-solid fa-right-to-bracket"></i></Link>
            }
          </li>

          {/* <li className='nav-item'>
            {
              token? null : <Link to={'/signup'} className={`btn ${context.theme === 'light' ? 'btn-outline-dark' : 'btn-outline-light'}`}>Register <i className="fa-solid fa-user-plus"></i></Link>
            }
          </li> */}

          <li className='nav-item'>
            <Link to={'/cart'} className={`btn btn-outline-dark cart-li`}><i className="fa-solid fa-cart-shopping"></i>
              {
                cartLength.length === 0 ? null : <span>{cartLength.length}</span>
              }
             </Link>
          </li>
        </ul>
          
      </div>

    </div>
  </div>
</nav>
        </>
     );
}
 
export default Navbar;