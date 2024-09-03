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
     console.log("texting");
    },[]);

    const EmptyCart = () => {
         return(
            <>
            <div className="empty-cart-div">
               <div className={ `empty-cart` }>
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
            <div className={`py-10`}>
               {
                  cart.map((item) => {
                     return(
                        <div className={`flex justify-between md:w-3/4 mx-auto bg-white rounded-lg p-4 text-black items-center my-6 border border-gray-300`} key={item.id}>
                           <div className="img-details items-center">

                           <div className="md:w-48 md:h-44 w-20 h-20 border border-gray-300 rounded-lg">
                              <img src={item.image} alt={`${item.title.substring(0, 15)}...`} className="w-full h-full rounded-lg" />
                           </div>
                           
                           </div>

                           <div className="p-2">
                           <h2 className="md:text-xl text-sm font-bold">{item.title.substring(0, 18).toUpperCase()}...</h2>
                           {/* <p>Unit Price: ${item.price}</p> */}

                           <p className="md:text-sm text-xs font-medium text-gray-600 my-2">
                              { item.description.substring(0, 80) }...
                           </p>

                           <div className="w-max flex items-center">
                              <span onClick={() => dispatch(handleCart.removeCart(item.id))} className="flex justify-center items-center bg-black md:w-8 md:h-8 w-6 h-6 rounded-full text-white cursor-pointer"><i className="fa-solid fa-minus md:text-lg text-sm"></i></span>
                              <span className="mx-2 font-semibold text-sm md:text-lg">{item.qty}</span>
                              <span onClick={() => dispatch(handleCart.addCart(item))} className={`flex justify-center items-center bg-black md:w-8 md:h-8 w-6 h-6 rounded-full text-white cursor-pointer ${item.qty === 10 ? "pointer-events-none cursor-not-allowed" : "pointer-events-auto"}`}><i className="fa-solid fa-plus"></i></span> 
                              
                           </div>
                           </div>

                           <div className="md:h-44 h-32 flex flex-col justify-between items-center md:w-[6%] w-[3%] ">
                              <h3 className="md:text-xl text-sm font-bold">${Math.round(item.totalPrice)}</h3>
                              <div className="cursor-pointer">
                                 <i onClick={() => dispatch(handleCart.removeOneTime(item.id))} className='bx bx-trash text-red-500 md:text-3xl text-2xl'></i>
                              </div>
                           </div>
                        </div>
                     )
                  })
               }
               <div className="flex md:flex-row flex-col-reverse justify-between py-10">
                  <div>
                     <button 
                     // disabled
                     className={`btn text-white md:mt-0 w-full md:w-fit mt-4`}
                     onClick={() => {
                        context.setAmount(total);
                        navigate('/checkout');
                        // dispatch(handleCart.clearItem());
                     }}>Proceed to Checkout</button>
                  </div>

                  <div className="details">
                     <p>Products in Cart:  <span>{cart.length} items</span></p>
                     <p>Total: <span className="font-semibold ms-1.5"> ${Math.round(total)} </span></p>
                  </div>
               </div>
            </div>
      )
    }

    return ( 
        <DefaultLayout>
            <div className="md:h-96 h-[450px] flex items-end py-14"
                  style={{
                        background:"linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0, 0.4)), url('/assets/Phone_Hold.jpg')",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundAttachment: "fixed"
                  }}
                  >
                        <div className="text-center w-full">
                           <p className="text-neutral-400 text-base font-semibold"> HOME <i className='bx bx-chevron-right text-3xl translate-y-1.5'></i> CART <i className='bx bx-chevron-right text-3xl translate-y-1.5'></i></p>
                           <h1 className="text-white font-extrabold" style={{fontSize: "60px"}}> Carts </h1>
                        </div>
            </div>



               <div className={` p-5 ${ darkmodeContext.theme === 'light' ? 'bg-gray-50 text-black' : 'bg-black text-white' }`}>
                  {
                     cart.length === 0 ? <EmptyCart /> : <CartItems />
                  }
               </div>
        </DefaultLayout>
     );
}
 
export default Cart;