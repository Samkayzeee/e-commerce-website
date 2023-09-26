import './Darkmode.css';
import { ThemeContext } from '../../contexts/ThemeProvider';
import { useContext } from 'react';

const Darkmode = () => {

    const context = useContext(ThemeContext);
    return ( 
        <>
            <div className="mode">
                <button onClick={() => context.setTheme(context.theme === "light" ? "dark" : "light")}> 
                    <i className={context.theme === 'light' ? 'bx bxs-moon' : 'bx bxs-sun'}></i>
                </button>
            </div>
        </>
     );
}
 
export default Darkmode;