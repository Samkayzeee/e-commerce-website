import { useState } from "react";
import { Link } from "react-router-dom";
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    
   const register = (e) => {
    e.preventDefault();

    let signupData = {
       email:email,
       fullname:fullname,
       password:password,
    }
    let token = true;
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("Userdata", JSON.stringify(signupData));

    setSuccess("Sign In Successful");

    setTimeout(() => {
        e.target.reset();
        navigate('/products');
    }, 2000);
    
 }
    return ( 

            <div className="signup-container text-black">
                    <form action="" className="signup-form" onSubmit={register}>
                        <h3>Register new account</h3>
                        <p className="access">
                            access to buy products and view your cart
                        </p>
                        <input onChange={(e) => setFullname(e.target.value)} type="text" name="Fullname" id="name"  placeholder="Full Name" required/>

                        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="E-mail Address" required/>

                        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Password" required minLength={8} />

                        <button type="submit">Register</button>

                        <p className="success">
                            {success}
                        </p>

                        <p className="already">
                            Already have an Account? <Link to={'/login'}>Login to Account</Link>
                        </p>
                    </form>
            </div>

     );
}
 
export default SignupPage;