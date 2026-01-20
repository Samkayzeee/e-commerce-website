import Darkmode from "../../components/darkmode/Darkmode";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useContext } from 'react';
import { ThemeContext } from "../../contexts/ThemeProvider";
import { ToastContainer } from "react-toastify";

const DefaultLayout = ({children}) => {
    const context = useContext(ThemeContext);

    return ( 
        <>
            <Navbar />
            <div style={{backgroundColor: context.theme === 'light'? null: '#000000'}}>
                {children}
            </div>

            <div className="text-sm font-bold">
                <ToastContainer />
            </div>
            <Darkmode />
            <Footer />
        </>
     );
}
 
export default DefaultLayout;