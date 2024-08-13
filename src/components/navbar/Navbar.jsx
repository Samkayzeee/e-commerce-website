import { Link, NavLink } from 'react-router-dom';
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

{/* <nav className={`navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm ${context.theme === 'light' ? null : 'navbar-darkmode'}`}>
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
</nav> */}

<div className={`navbar sticky top-0 ${context.theme === 'light' ? 'bg-gray-500/30 text-black' : 'bg-black/30 text-white'} backdrop-blur-xl z-10`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <NavLink exact='true' className="text-base font-bold" aria-current="page" to={'/'} style={({isActive}) => ({transform: isActive ? 'translateY(-5px)' : null, color: context.theme === 'light' ? 'black' : 'white'})} >Home</NavLink>
        </li>

        <li> 
          <NavLink to={'/products'} className="text-base font-bold" style={({isActive}) => ({transform: isActive ? 'translateY(-5px)' : null, color: context.theme === 'light' ? 'black' : 'white'})} >Products</NavLink> 
        </li>

        <li>
          <NavLink to={'/about'} className="text-base font-bold" style={({isActive}) => ({transform: isActive ? 'translateY(-5px)' : null, color: context.theme === 'light' ? 'black' : 'white'})} >About</NavLink>
        </li>

        <li>
          <NavLink to={'/contact'} className="text-base font-bold" style={({isActive}) => ({transform: isActive ? 'translateY(-5px)' : null, color: context.theme === 'light' ? 'black' : 'white'})} >Contacts</NavLink>
        </li>

      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost text-xl text-orange-800">SAMKAYZEE.</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <NavLink exact='true' className={`text-base font-bold ${context.theme === 'light' ? 'text-black' : 'text-white'}`} aria-current="page" to={'/'} style={({isActive}) => ({transform: isActive ? 'translateY(-5px)' : null})} >Home</NavLink>
      </li>

      <li> 
        <NavLink to={'/products'} className={`text-base font-bold ${context.theme === 'light' ? 'text-black' : 'text-white'}`} style={({isActive}) => ({transform: isActive ? 'translateY(-5px)' : null})} >Products</NavLink> 
      </li>

      <li>
        <NavLink to={'/about'}className={`text-base font-bold ${context.theme === 'light' ? 'text-black' : 'text-white'}`} style={({isActive}) => ({transform: isActive ? 'translateY(-5px)' : null})} >About</NavLink>
      </li>

      <li>
        <NavLink to={'/contact'} className={`text-base font-bold ${context.theme === 'light' ? 'text-black' : 'text-white'}`} style={({isActive}) => ({transform: isActive ? 'translateY(-5px)' : null})} >Contacts</NavLink>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    {/* cart implementation */}
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
              {
                cartLength.length === 0 ? null : <span className="badge badge-sm indicator-item">{cartLength.length}</span>
              }
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          {
            cartLength.length === 0 ? <span className="text-sm font-semibold text-white"> No Items Available. </span> : <span className="text-lg font-bold">{cartLength.length} Items</span>
          }
          {/* <span className="text-info">Subtotal: $999</span> */}
          <div className="card-actions">
            <Link className="btn btn-primary btn-block" to={'/cart'}>View cart</Link>
          </div>
        </div>
      </div>
    </div>
    {
      token? <button onClick={Logout} className={`btn ${context.theme === 'light' ? 'btn-outline-dark' : 'btn-outline-light'}`}>Log Out</button> : <Link to={'/login'} className={`btn ${context.theme === 'light' ? 'btn-outline-dark' : 'btn-outline-light'}`}>Login <i className="fa-solid fa-right-to-bracket"></i></Link>
    }
  </div>
</div>
        </>
     );
}
 
export default Navbar;