import { Link } from "react-router-dom";
import './Login.css';

const LoginPage = () => {
    return ( 
        <div className="login-container">
                    <form action="" className="login-form">
                        <h3>Login to account</h3>
                        <p className="access">
                            access to buy products and view your cart
                        </p>

                        <input type="email" name="email" id="email" placeholder="E-mail Address" />

                        <input type="password" name="password" id="password" placeholder="Password" />

                        <button type="submit">Login</button>

                        <p className="already">
                            Yet to Register? <Link to={'/signup'}>Register your account</Link>
                        </p>
                    </form>
            </div>
     );
}
 
export default LoginPage;