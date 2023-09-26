import Darkmode from "../../components/darkmode/Darkmode";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const DefaultLayout = ({children}) => {
    return ( 
        <>
            <Navbar />
            <div>
                {children}
            </div>
            {/* <Darkmode /> */}
            <Footer />
        </>
     );
}
 
export default DefaultLayout;