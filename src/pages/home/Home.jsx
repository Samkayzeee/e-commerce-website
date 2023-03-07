import DefaultLayout from "../../layouts/DefaultLayouts/DefaultLayout";
import './Home.css';

const HomePage = () => {
    return ( 
        <>
        <DefaultLayout>
            <div className="homepage">
                <div className="section1">
                    <h1>NEW SEASONS ARRIVALS</h1>
                    <h4>CHECK OUT ALL THE TRENDS</h4>
                </div>
            </div>
        </DefaultLayout>
        </>
     );
}
 
export default HomePage;