import { Link } from "react-router-dom";
import './Signup.css';

const SignupPage = () => {
    return ( 

            <div className="signup-container">
                    <form action="" className="signup-form">
                        <h3>Register new account</h3>
                        <p className="access">
                            access to buy products and view your cart
                        </p>
                        <input type="text" name="Fullname" id="name"  placeholder="Full Name" />

                        <input type="email" name="email" id="email" placeholder="E-mail Address" />

                        <input type="password" name="password" id="password" placeholder="Password" />

                        <button type="submit">Register</button>

                        <p className="already">
                            Already have an Account? <Link to={'/login'}>Login to Account</Link>
                        </p>
                    </form>
            </div>

     );
}
 
export default SignupPage;