import { useState, createContext } from "react";

const ThemeContext = createContext(null);
export {ThemeContext};

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light');
    return ( 
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeProvider;