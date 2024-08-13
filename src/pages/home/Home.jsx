import { Link } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayouts/DefaultLayout";
import cloth from '/assets/first_men_wear.jpg';
import Support from "../../components/support/Support";
import Few_Products from "../../components/few_products/Few_Products";

import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";

const HomePage = () => {
    const context = useContext(ThemeContext);

    return ( 
        <>
        <DefaultLayout>
            <main className={`${ context.theme === 'light' ? 'bg-gray-50 text-black':'bg-black text-white' }`}>
                {/* first section */}
                <div
                className="h-dvh flex items-center justify-center"
                style={{
                    background:"linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0, 0.4)), url('/assets/cloths.jpg')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed"
                }}
                >
                    <div className="-rotate-6">
                        <h2 className="text-7xl font-bold text-center text-white">Fashion <span className="text-slate-500">for</span> Every <br /> Moment.</h2>
                        <div className="flex justify-center my-6">
                            <Link to={'/products'} className="btn me-5 border border-white bg-orange-800 hover:border-white hover:bg-transparent">Shop Now</Link>
                            <Link to={'/about'} className="btn bg-transparent border border-white hover:bg-orange-800">Learn More</Link>
                        </div>
                    </div>
                </div>

                {/* <Products /> */}

                {/* second section */}

                <div className="flex justify-center text-black py-20">
                    <div className="w-2/5 h-96">
                        <img src={cloth} alt="cloth pic" className="h-full"/>
                    </div>

                    <div className="w-2/5 self-center">
                        <h2 className="text-6xl font-extrabold leading-[75px]">Finding Your <br />Perfect Product</h2>
                        <p className="my-6 w-4/5 leading-6 text-lg font-medium">
                            Explore a curated selection of products that perfectly complements your style. Find the ideal pieces to elevate your look for any occasion.
                        </p>

                        <Link to={'/'} className="btn border-0 bg-orange-800 hover:bg-orange-900 text-white">Shop Now</Link>
                    </div>
                </div>

                {/* third section */}
                <Support />

                {/* firth section */}
                <div className="py-10">
                    <Few_Products />
                </div>



                {/* fifth section */}

            </main>
        </DefaultLayout>
        </>
     );
}
 
export default HomePage;