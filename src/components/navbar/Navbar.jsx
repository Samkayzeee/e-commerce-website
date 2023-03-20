import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return ( 
        <>

<nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
  <div className="container-fluid">
    <Link to={'/'} className="navbar-brand">SAMKAYZEE.</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'/products'} className="nav-link">Products</Link>
        </li>
        <li className="nav-item">
          <Link to={'/about'} className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to={'/contact'} className="nav-link">Contacts</Link>
        </li>
      </ul>

      <div className="buttons">
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
            <Link to={'/login'} className="btn btn-outline-dark">Login <i className="fa-solid fa-right-to-bracket"></i></Link>
          </li>

          <li className='nav-item'>
            <Link to={'/signup'} className="btn btn-outline-dark">Register <i className="fa-solid fa-user-plus"></i></Link>
          </li>

          <li className='nav-item'>
            <Link to={'/cart'} className="btn btn-outline-dark cart-li"><i className="fa-solid fa-cart-shopping"></i>
             <span>{2}</span>
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