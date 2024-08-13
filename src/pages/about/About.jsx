import DefaultLayout from "../../layouts/DefaultLayouts/DefaultLayout";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";

import cyber_shopping from "/assets/cyber-shopping-sales.jpg";
import Support from "../../components/support/Support";
import Few_Products from "../../components/few_products/Few_Products";




const AboutPage = () => {
     const context = useContext(ThemeContext);
    return ( 
            <DefaultLayout>
               <main className={`${ context.theme === 'light' ? 'bg-gray-50 text-black':'bg-black text-white' } pb-14`} >

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
                           <p className="text-neutral-400 text-base font-semibold"> HOME <i className='bx bx-chevron-right text-3xl translate-y-1.5'></i> ABOUT US <i className='bx bx-chevron-right text-3xl translate-y-1.5'></i></p>
                           <h1 className="text-white font-extrabold" style={{fontSize: "60px"}}> About Us </h1>
                        </div>
                    </div>


                    {/* section 2 */}
                    
                    <Support />
                    {/* section 3 */}

                    <div className="md:flex w-4/5 mx-auto py-14 items-center">
                         <div className="md:w-1/2">
                              <img src={cyber_shopping} alt="Cyber Shopping Image" />
                         </div>

                         <div className="p-10 md:w-1/2">
                              <h6 className="text-orange-700 text-sm">Since 2023</h6>

                              <h2 className="my-4 font-bold">About.</h2>

                              <p className="leading-8 my-4 text-gray-500">
                                   Welcome to Samkayzee E-commerce Website, a project-driven online store created in 2023 with a passion for learning and innovation.
                                   This website was developed as part of a hands-on project to explore the dynamic world of e-commerce, web design, and digital customer experiences.
                              </p>

                              <p className="leading-8 my-4 text-gray-500">
                                   While our products and services are designed to offer a real-world feel, this platform primarily serves as a learning tool, reflecting the skills and creativity gained over the past year. 
                                   Thank you for visiting and supporting this journey of continuous growth and discovery.
                              </p>
                         </div>
                    </div>

                    {/* section 4 */}   
                    <Few_Products />        

               </main>
            </DefaultLayout>
     );
}
 
export default AboutPage;