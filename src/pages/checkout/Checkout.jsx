import paystackPop from '@paystack/inline-js';
import { useState } from 'react';
import { useContext } from "react";
import { PaymentAmountContext } from "../../contexts/AmountPay";
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const context = useContext(PaymentAmountContext);
    const amount = Math.round(context.amount);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const pay = (e) => {
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
                alert(message);

                setTimeout(() => {
                    navigate('/');
                }, 3000);
            },

            onCancel(){
                alert("Your have successfully cancelled your transaction");
            }
            
        })

    }

    return ( 
        <>
            <div className="checkout">
                <form action="" onSubmit={pay}>
                    <h3>Make Payment</h3>
                    <input type="email" name="" id="" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} required/>
                    <input type="text" name="" id="" placeholder='Your FirstName' onChange={(e) =>setFirstName(e.target.value)} required/>
                    <input type="text" name="" id="" placeholder='Your LastName'onChange={(e) =>setLastName(e.target.value)} required/>
                    <input type="tel" name="amount" id="amount"  defaultValue={amount} required/>
                    <button>Make Payment</button>
                </form>
            </div>
        </>
     );
}
 
export default Checkout;