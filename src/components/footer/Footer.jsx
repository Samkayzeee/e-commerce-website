import './Footer.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeProvider';

const Footer = () => {

    const context = useContext(ThemeContext);
    return ( 
        <>
            <footer className={context.theme === 'light' ? "footer" : "footer footer-darkmode"}>
                <div className="first">
                    SAMKAYZEE E-COMMERCE-WEBSITE All right reserved - Developed by Lasisi Abdulsamad
                </div>

                <div className="icons">
                        <li> <Link to={'https://github.com/Samkayzeee'} target='_blank'><i className="fa-brands fa-github"></i></Link> </li>
                        <li> <Link to={'https://twitter.com/Samkayzee1'} target='_blank'><i className="fa-brands fa-twitter"></i></Link> </li>
                        <li> <Link to={'https://www.linkedin.com/in/lasisi-abdulsamad/'} target='_blank'><i className="fa-brands fa-linkedin"></i></Link> </li>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;