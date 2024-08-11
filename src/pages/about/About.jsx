import DefaultLayout from "../../layouts/DefaultLayouts/DefaultLayout";
import './About.css';
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";

import cyber_shopping from "/assets/cyber-shopping-sales.jpg";


const support = [
     {
          title:"ONLINE SUPPORT 24/7",
          content:"Get help anytime, anywhere with our 24/7 online support, always here to assist you."
     },
     {
          title:"MONEY BACK GUARANTEE",
          content:"Shop with confidence—our 100% Money Back Guarantee ensures your satisfaction or your money back, no questions asked."
     },
     {
          title:"FREE SHIPPING AND RETURN",
          content:"Enjoy free shipping and hassle-free returns on all your purchases."
     }
];


const products = [
     {
          name:"Men Wears",
          img_url:"/assets/first_men_wear.jpg"
     },
     {
          name:"Men Wears",
          img_url:"/assets/second_men_wear.jpg"
     },
     {
          name:"Women Wears",
          img_url:"/assets/first_women_wear.jpg"
     },
     {
          name:"Women Wears",
          img_url:"/assets/second_women_wear.jpg"
     },
     {
          name:"Ladies Jewelry",
          img_url:"/assets/first_jewelry.jpg"
     }
];

const AboutPage = () => {
     const context = useContext(ThemeContext);
    return ( 
            <DefaultLayout>
               <main className={`${ context.theme === 'light' ? 'bg-gray-50':'bg-black' } pb-14`} style={{color: context.theme === 'light' ? null : '#FFF'}}>

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
                    <div className="flex justify-center bg-orange-800">
                         {
                              support.map((support, index) => {
                                   return(
                                        <div key={index} className="w-1/4 py-8 px-5 border-s border-r border-white bg-orange-900 text-white">
                                             <h2 className="font-extrabold text-lg"> { support.title } </h2>
                                             <p className="text-sm leading-7"> { support.content } </p>
                                        </div>
                                   )
                              })
                         }
                    </div>

                    {/* section 3 */}

                    <div className="flex w-4/5 mx-auto py-14 items-center">
                         <div className="w-1/2">
                              <img src={cyber_shopping} alt="Cyber Shopping Image" />
                         </div>

                         <div className="p-10 w-1/2">
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
                    <div className="flex justify-between items-center py-10">
                         {
                              products.map((product, index) => {
                                   return(
                                        <div className="w-1/6" key={index}>
                                             <div className="p-2 w-fit border-2 border-orange-800 rounded-full mx-auto">
                                                  {/* <img src={product.img_url} alt={product.name} className="rounded-full"/> */}
                                                  <div
                                                  className="h-32 rounded-full w-32 border cursor-pointer transition-all ease-in-out hover:scale-110"
                                                  style={{
                                                       background:`url(${product.img_url})`,
                                                       backgroundPosition: "center",
                                                       backgroundSize: "contain",
                                                       backgroundRepeat: "no-repeat"
                                                  }}
                                                  >

                                                  </div>
                                             </div>
                                             <h2 className="text-center font-thin text-lg"> { product.name } </h2>
                                        </div>
                                   )
                              })
                         }
                    </div>

                    {/* section 5 */}
                    
                    {/* <div className="py-16">
                         <h5 className="text-center text-sm">Testimonial</h5>
                         <h2 className="text-center font-semibold">Happy Clients</h2>
                    </div> */}
                   

               </main>
            </DefaultLayout>
     );
}
 
export default AboutPage;