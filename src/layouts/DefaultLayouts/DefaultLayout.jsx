import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const DefaultLayout = ({children}) => {
    return ( 
        <>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </>
     );
}
 
export default DefaultLayout;