import Darkmode from "../../components/darkmode/Darkmode";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useContext } from 'react';
import { ThemeContext } from "../../contexts/ThemeProvider";

const DefaultLayout = ({children}) => {
    const context = useContext(ThemeContext);

    return ( 
        <>
            <Navbar />
            <div style={{backgroundColor: context.theme === 'light'? null: '#000000'}}>
                {children}
            </div>
            <Darkmode />
            <Footer />
        </>
     );
}
 
export default DefaultLayout;