import DefaultLayout from "../../layouts/DefaultLayouts/DefaultLayout";
import './Carts.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Cart = () => {
   const navigate = useNavigate();
    let token = localStorage.getItem("token");

    useEffect(() => {
      if (!token) {
         navigate('/login');
     }
    },[])

    return ( 
        <>
           <div className="cart">
                This is the cart Page
           </div>
        </>
     );
}
 
export default Cart;