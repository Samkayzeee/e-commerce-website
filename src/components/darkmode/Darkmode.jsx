import './Darkmode.css';
import { ThemeContext } from '../../contexts/ThemeProvider';
import { useContext, useState } from 'react';

const Darkmode = () => {


    const context = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = context.theme === 'light'? 'dark' : 'light';
        context.setTheme(newTheme);

        localStorage.setItem('theme', newTheme);

    }

    return ( 
        <>
            <div className="mode">
                <button onClick={toggleTheme}> 
                    <i className={context.theme === 'light' ? 'bx bxs-moon' : 'bx bxs-sun text-light'}></i>
                </button>
            </div>
        </>
     );
}
 
export default Darkmode;