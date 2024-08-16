import { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import './Login.css';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [wrong, setWrong] = useState("");
    const navigate = useNavigate();
    const wrongloginRef = useRef(null);

    const RawUserdata = localStorage.getItem("Userdata");
    const Userdata = JSON.parse(RawUserdata);

    const Login  = (e) => {
            e.preventDefault();
            const wrongLogin = wrongloginRef.current;
        let LoginData = {
            email:email,
            password:password
        }    

        if (!Userdata) {
            wrongLogin.style.color = 'red';
            setWrong("User Not Register Try Signing Up");
        }
        else{
            if (LoginData.email === Userdata.email && LoginData.password === Userdata.password) {
                let token = true;
                localStorage.setItem("token", JSON.stringify(token));
                wrongLogin.style.color = "green";
                setWrong("Login Successful");

                setTimeout(() => {
                    navigate('/products');
                }, 2000);
                e.target.reset();
            }
            else{
                wrongLogin.style.color = 'red';
                setWrong("Login Not Successful");
            }
        }
    }
    return ( 
        <div className="login-container text-black">
                    <form action="" className="login-form" onSubmit={Login}>
                        <h3>Login to account</h3>
                        <p className="access">
                            access to buy products and view your cart
                        </p>

                        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="E-mail Address" required/>

                        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Password" required/>

                        <button type="submit">Login</button>

                        <p ref={wrongloginRef} className="wrong">
                            {wrong}
                        </p>

                        <p className="already">
                            Yet to Register? <Link to={'/signup'}>Register your account</Link>
                        </p>
                    </form>
            </div>
     );
}
 
export default LoginPage;