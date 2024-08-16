import Product from "../../components/products/Product";
import DefaultLayout from "../../layouts/DefaultLayouts/DefaultLayout";

import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";

const ProductsPage = () => {

    const context = useContext(ThemeContext);

    return ( 
        <DefaultLayout >

            <main className={`${context.theme === 'light' ? 'bg-gray-50 text-black' : 'bg-black text-white'}`}>
                {/* section 1 */}
                <div className="h-96 flex items-end py-14" 
                    style={{
                        background:"linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0, 0.4)), url('/assets/Phone_Hold.jpg')",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundAttachment: "fixed"
                    }}
                    >
                        <div className="mx-auto text-center">
                           <p className="text-neutral-400 text-base font-semibold"> HOME <i className='bx bx-chevron-right text-3xl translate-y-1.5'></i> PRODUCTS <i className='bx bx-chevron-right text-3xl translate-y-1.5'></i></p>
                           <h1 className="text-white font-extrabold" style={{fontSize: "60px"}}> Products </h1>
                        </div>
                    </div>

                    {/* section 2 */}
                    <div>
                        <Product />
                    </div>

            </main>
        </DefaultLayout>
     );
}
 
export default ProductsPage;