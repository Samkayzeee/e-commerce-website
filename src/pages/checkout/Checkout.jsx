import paystackPop from '@paystack/inline-js';
import { useEffect, useState, useRef, useContext} from 'react';
import { PaymentAmountContext } from "../../contexts/AmountPay";
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const context = useContext(PaymentAmountContext);
    const navigate = useNavigate();
    const statusRef = useRef(null);

    // navigate when amount to be paid is 0
    useEffect(() => {
        if (context.amount === 0) {
            navigate('/');
        }
    },[]);

    const amount = Math.round(context.amount) * 460.95; 
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
                status_ref.style.color = "green";
                setStatus(message);

                setTimeout(() => {
                    navigate('/');
                }, 3000);
            },

            onCancel(){
                status_ref.style.color = "red";
                setStatus('Your have successfully cancelled your transaction');
                // alert("");
            }
            
        })

    }

    return ( 
        <>
            <div className="checkout_page">
                <form action="" onSubmit={pay}>
                    <h3>Make Your Payment</h3>
                    <input type="text" name="First_Name" id="firstname" placeholder='Your FirstName' onChange={(e) =>setFirstName(e.target.value)} required/>
                    <input type="text" name="Last_Name" id="lastname" placeholder='Your LastName'onChange={(e) =>setLastName(e.target.value)} required/>
                    <input type="email" name="email" id="email" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} required/>
                    <input type="text" name="amount" id="amount"  defaultValue={amount} required disabled/>
                    <p className='status' ref={statusRef}>{status}</p>
                    <button>Make Payment</button>
                </form>
            </div>
        </>
     );
}
 
export default Checkout;