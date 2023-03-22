import DefaultLayout from "../../layouts/DefaultLayouts/DefaultLayout";
import './Carts.css';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";


const Cart = () => {
   const navigate = useNavigate();
    let token = localStorage.getItem("token");
    const cart = useSelector(state => state.cart.value);

    useEffect(() => {
      if (!token) {
         navigate('/login');
     }
    },[])

    const EmptyCart = () => {
         return(
            <>
               <div className="empty-cart">
                  <h1> Your Cart is empty.. </h1>
                  <h1> Go back to products page to shop some items..</h1>
                  <Link className="btn btn-outline-dark" to={'/products'}> Go to Products Page </Link>
               </div>
            </>
         )
    }

    const CartItems = () => {
      return(
         <>
            Carts are available
         </>
      )
    }

    return ( 
        <DefaultLayout>
               <div className="cart">
                  {
                     cart.length === 0 ? <EmptyCart /> : <CartItems />
                  }
               </div>
        </DefaultLayout>
     );
}
 
export default Cart;