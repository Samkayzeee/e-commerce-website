import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeProvider';

const Footer = () => {

    const context = useContext(ThemeContext);
    return ( 
        <>

            <footer className={`footer footer-center border-t-2 border-t-gray-500  p-10 ${context.theme === 'light' ? 'bg-gray-100 text-primary-content' : 'bg-black text-white' }`}>
            <aside>
                <p className="font-bold">
                SAMKAYZEE
                <br />
                E-Commerce Website.
                </p>
                <p className='font-semibold'>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link to={'https://github.com/Samkayzeee'} target='_blank' className={`${context.theme === 'light' ? 'text-black' : 'text-white'} text-2xl`}><i className="fa-brands fa-github"></i></Link>
                    <Link to={'https://twitter.com/Samkayzee1'} target='_blank' className={`${context.theme === 'light' ? 'text-black' : 'text-white'} text-2xl`}><i className="fa-brands fa-twitter"></i></Link>
                    <Link to={'https://www.linkedin.com/in/lasisi-abdulsamad/'} target='_blank' className={`${context.theme === 'light' ? 'text-black' : 'text-white'} text-2xl`}><i className="fa-brands fa-linkedin"></i></Link>
                </div>
            </nav>
            </footer>
        </>
     );
}
 
export default Footer;