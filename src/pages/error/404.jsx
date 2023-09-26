import { Link } from 'react-router-dom';
import './404.css';


const Error404Page = () => {
    return ( 
        <>
        <div className="wrap-error">
        <div className="error_404">
                <h1>Oops!</h1>
                <h3>404 - PAGE NOT FOUND</h3>
                <p>
                    The page you are looking for might have been removed 
                    had it's name changed or is temporarily unavailable.
                </p>
                <Link to={'/'}>GO TO HOMEPAGE</Link>
            </div>
        </div>
        </>
     );
}
 
export default Error404Page;