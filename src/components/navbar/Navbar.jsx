import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const cartLength = useSelector(state => state.cart.value);

  const Logout = () => {
    localStorage.removeItem("token");
    navigate('/');
  }
    return ( 
        <>

<nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
  <div className="container-fluid">
    <Link to={'/'} className="navbar-brand">SAMKAYZEE.</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span> 
              {
                cartLength.length === 0 ? null : <span className='show-cart'>{cartLength.length}</span>
              }
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact='true' className="nav-link" aria-current="page" to={'/'} style={({isActive}) => ({transform: isActive ? 'translateY(-5px)' : ''})} >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/products'} className="nav-link" style={({isActive}) => ({transform: isActive ? 'translateY(-5px)' : ''})} >Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/about'} className="nav-link" style={({isActive}) => ({transform: isActive ? 'translateY(-5px)' : ''})} >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/contact'} className="nav-link" style={({isActive}) => ({transform: isActive ? 'translateY(-5px)' : ''})} >Contacts</NavLink>
        </li>
      </ul>

      <div className="buttons">
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
            {
              token? <button onClick={Logout} className='btn btn-outline-dark'>Log Out</button> : <Link to={'/login'} className="btn btn-outline-dark">Login <i className="fa-solid fa-right-to-bracket"></i></Link>
            }
          </li>

          <li className='nav-item'>
            {
              token? null : <Link to={'/signup'} className="btn btn-outline-dark">Register <i className="fa-solid fa-user-plus"></i></Link>
            }
          </li>

          <li className='nav-item'>
            <Link to={'/cart'} className="btn btn-outline-dark cart-li"><i className="fa-solid fa-cart-shopping"></i>
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