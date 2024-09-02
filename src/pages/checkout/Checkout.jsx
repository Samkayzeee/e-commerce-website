import paystackPop from '@paystack/inline-js';
import { useEffect, useState, useRef, useContext} from 'react';
import { PaymentAmountContext } from "../../contexts/AmountPay";
import { useNavigate } from 'react-router-dom';
import './Checkout.css';


import { useDispatch } from 'react-redux';
import { handleCart } from '../../redux/handleCart';
import { ThemeContext } from '../../contexts/ThemeProvider';

const Checkout = () => {
    const context = useContext(PaymentAmountContext);
    const darkmodeContext = useContext(ThemeContext);
    const navigate = useNavigate();
    const statusRef = useRef(null);

    const dispatch = useDispatch();

    // navigate when amount to be paid is 0
    useEffect(() => {
        if (context.amount === 0) {
            navigate('/cart');
        }
    },[]);

    const amount = Math.round(context.amount * 460.95); 
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [status, setStatus] = useState(null);

    const pay = (e) => {
        const status_ref = statusRef.current;
        e.preventDefault();
        const paystack = new paystackPop();
        paystack.newTransaction({
            key: "pk_test_54d1f426306c42084dc16f9f7e0ea4e61e0cf169",
            amount: amount * 100,
            email,
            lastName,
            firstName,
            onSuccess(transaction){
                let message = `Your Payment is Completed! Reference ${transaction.reference}`;
                dispatch(handleCart.clearItem());
                status_ref.style.color = "green";
                setStatus(message);

                setTimeout(() => {
                    navigate('/');
                }, 3000);
            },

            onCancel(){
                status_ref.style.color = "red";
                setStatus('Your Transaction has been cancelled');
                // alert("");

                setTimeout(() => {
                    navigate('/cart');
                }, 3000);
            }
            
        })

    }

    return ( 
        <>
            <div className={`${ darkmodeContext.theme === 'light' ? 'bg-gray-50 text-black' : 'bg-black text-white' }`}>
                <div className="md:h-96 h-[450px] flex items-end py-14"
                    style={{
                            background:"linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0, 0.4)), url('/assets/Phone_Hold.jpg')",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundAttachment: "fixed"
                    }}
                    >
                            <div className="text-center w-full">
                            <p className="text-neutral-400 text-base font-semibold"> HOME <i className='bx bx-chevron-right text-3xl translate-y-1.5'></i> CART <i className='bx bx-chevron-right text-3xl translate-y-1.5'></i> CHECKOUT </p>
                            <h1 className="text-white font-extrabold" style={{fontSize: "60px"}}> Checkout </h1>
                            </div>
                </div>

                <div className='px-6 py-14 md:w-4/5 mx-auto'>
                <form action="" onSubmit={pay} className='w-full'>
                    <h3 className={`text-2xl  font-semibold my-3`}>Billing Details.</h3>

                        <div className='md:flex justify-between my-8'>
                        {/* <input type="text" name="First_Name" id="firstname" placeholder='Your FirstName' onChange={(e) =>setFirstName(e.target.value)} required/> */}

                        <label className="form-control md:w-2/5">
                        <div className="label">
                            <span className={`label-text text-lg font-semibold ${darkmodeContext.theme === 'light' ? "text-black": "text-white"}`}>First Name.</span>
                        </div>
                        <input className='px-4 py-3.5 w-full outline-none bg-transparent border border-gray-300 transition-all duration-300 focus:border-orange-700'  
                        type="text" name="First_Name" id="firstname" placeholder='Your FirstName' onChange={(e) =>setFirstName(e.target.value)} required/>
                        </label>


                        <label className="form-control md:w-2/5">
                        <div className="label">
                            <span className={`label-text text-lg font-semibold ${darkmodeContext.theme === 'light' ? "text-black": "text-white"}`}>Last Name.</span>
                        </div>
                        <input className='px-4 py-3.5 w-full outline-none bg-transparent border border-gray-300 transition-all duration-300 focus:border-orange-700' 
                        type="text" name="Last_Name" id="lastname" placeholder='Your LastName'onChange={(e) =>setLastName(e.target.value)} required/>
                        </label>


                        {/* <input type="text" name="Last_Name" id="lastname" placeholder='Your LastName'onChange={(e) =>setLastName(e.target.value)} required/> */}
                        </div>

                        <div className='my-6'>
                        <label className="form-control w-full">
                        <div className="label">
                            <span className={`label-text text-lg font-semibold ${darkmodeContext.theme === 'light' ? "text-black": "text-white"}`}>Input Your Email.</span>
                        </div>
                        <input className='px-4 py-3.5 w-full outline-none bg-transparent border border-gray-300 transition-all duration-300 focus:border-orange-700' 
                        type="email" name="email" id="email" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} required/>
                        </label>
                            {/* <input type="email" name="email" id="email" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} required/> */}
                        </div>

                        <div className='my-10'>

                            <input className='px-4 py-3.5 w-full outline-none bg-transparent border-b border-orange-700 font-semibold' 
                            type="text" name="amount" id="amount" defaultValue={`NGN ${amount}`} required disabled/>
                            {/* <input type="text" name="amount" id="amount"  defaultValue={`NGN ${amount}`} required disabled/> */}
                        </div>


                    <p className='status my-3 text-sm' ref={statusRef}> {status} </p>
                    <button className='btn'>Make Payment</button>
                </form>
                </div>
            </div>
        </>
     );
}
 
export default Checkout;