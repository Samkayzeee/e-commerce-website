import DefaultLayout from "../../layouts/DefaultLayouts/DefaultLayout";
import './Carts.css';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleCart } from "../../redux/handleCart";
import { useContext } from "react";
import { PaymentAmountContext } from "../../contexts/AmountPay";
import { ThemeContext } from "../../contexts/ThemeProvider";


const Cart = () => {
   const navigate = useNavigate();
    let token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.value);
    const context = useContext(PaymentAmountContext);
    const darkmodeContext = useContext(ThemeContext);


   //  total
    let total = 0;
    cart.forEach((item) => {
      total += item.totalPrice
    });


    useEffect(() => {
      if (!token) {
         navigate('/login');
     }
    },[]);

    const EmptyCart = () => {
         return(
            <>
            <div className="empty-cart-div">
               <div className={darkmodeContext.theme === 'light' ? "empty-cart" : "empty-cart cart-darkmode"}>
                     <h1> Your Cart is empty.. </h1>
                     <h1> Go back to products page to shop some items..</h1>
                     <Link className={`btn ${darkmodeContext.theme === 'light' ? 'btn-outline-dark' : 'btn-outline-light'}`} to={'/products'}> Go to Products Page </Link>
                  </div>
            </div> 
            </>
         )
    }

    const CartItems = () => {
      return(
            <div className={darkmodeContext.theme === 'light'? "cart-items": "cart-items cart-darkmode"}>
               {
                  cart.map((item) => {
                     return(
                        <div className={`item`} key={item.id}>
                           <div className="img-details">

                           <div className="item-img">
                              <img src={item.image} alt={item.title} />
                              <div className="remove">
                                 <i onClick={() => dispatch(handleCart.removeOneTime(item.id))} className="fa-solid fa-xmark fa-beat text-dark"></i>
                              </div>
                           </div>
                           
                           <div className="details">
                           <h2>{item.title}</h2>
                           <p>Unit Price: ${item.price}</p>

                           <div className="qty">
                              <span onClick={() => dispatch(handleCart.addCart(item))}><i className="fa-solid fa-plus"></i></span> 
                              <span>{item.qty}</span> 
                              <span onClick={() => dispatch(handleCart.removeCart(item.id))}><i className="fa-solid fa-minus"></i></span>
                           </div>
                           </div>
                           </div>

                           <div className="total-price">
                              <p>${Math.round(item.totalPrice)}</p>
                           </div>
                        </div>
                     )
                  })
               }
               <div className="checkout">
                  <div className="btn">
                     <button onClick={() => {
                        context.setAmount(total);
                        navigate('/checkout');
                        dispatch(handleCart.clearItem());
                     }}>Proceed to Checkout</button>
                  </div>

                  <div className="details">
                     <p>Products in Cart:  <span>{cart.length} items</span></p>
                     <p>Total: <span>${Math.round(total)}</span></p>
                  </div>
               </div>
            </div>
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