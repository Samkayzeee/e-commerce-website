import DefaultLayout from "../../layouts/DefaultLayouts/DefaultLayout";
import './Contact.css';
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
    // ref
    const formRef = useRef(null);
    const EmailRef = useRef(null);
    const context = useContext(ThemeContext);

    // States
    const [message, setMessage] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(true);

    // sending message with valid email function
    const validEMail = () => {
        const Email_Ref = EmailRef.current;
        const emailPattern = /^[^\s@]{6,}@[^\s@]+\.[^\s@]+$/;
        let theEmail = Email_Ref.value;
        let validEmail = emailPattern.test(theEmail);
        setIsEmailValid(validEmail);
    }

    const sendmail  = async(e) => {
        e.preventDefault();
        setLoading(true);
        const form = formRef.current;

        // sending the mail
        try{
           if (isEmailValid) {
            await emailjs.sendForm('service_fxvcxyj', 'template_vggxabq', form, 'CC6qrRtlQzRCdePxS');
            setLoading(false);
            setSuccessful(true);
            setMessage("Message sent Successfully.");
            e.target.reset();
           }
           else{
            throw new Error("Your Email is Invalid try using normal Email");
           }
        //    catching the error
        } catch (error){
            setLoading(false);
            setSuccessful(false);
            if(!isEmailValid){
                setMessage(error.message);
            }
            else if(isEmailValid){
                setMessage("Theirs is an error sending your mail check your connection");
            }
        }
    }


    const Loading = () => {
        return (
            <div className="loadingio-spinner-rolling-vc8zers97pd"><div className="ldio-zlxdtiiq8cb">
            <div></div>
            </div></div>
        )
    }


    return ( 
            <DefaultLayout>
                <div className="contact-container" style={{color: context.theme === 'light' ? null : '#FFF'}}>
                    {/* first section */}
                    <div className="h-96 flex items-end py-14" 
                    style={{
                        background:"linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0, 0.4)), url('/assets/Phone_Hold.jpg')",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundAttachment: "fixed"
                    }}
                    >
                        <div className="mx-auto text-center">
                           <p className="text-neutral-400 text-base font-semibold"> HOME <i className='bx bx-chevron-right text-3xl translate-y-1.5'></i> CONTACT US <i className='bx bx-chevron-right text-3xl translate-y-1.5'></i></p>
                           <h1 className="text-white font-thin" style={{fontSize: "60px"}}>Contact Us</h1>
                        </div>
                    </div>

                    {/* second section */}
                    <div className="flex justify-evenly text-center py-16">
                        {/* <div>
                            <div className="w-28 h-28 flex items-center justify-center mx-auto border border-solid rounded-full my-4 bg-red-700 text-white">
                                logo
                            </div>

                            <p><span className="font-bold">Address: </span> Null </p>
                        </div> */}

                        <div>
                            <div className="w-28 h-28 flex items-center justify-center mx-auto border border-solid rounded-full my-4 bg-red-700 text-white">
                                <i className='bx bxs-phone text-4xl'></i>
                            </div>

                            <p> <span className="font-bold">Phone: </span> +2347019665230 </p>
                        </div>

                        <div>
                            <div className="w-28 h-28 flex items-center justify-center mx-auto border border-solid rounded-full my-4 bg-red-700 text-white">
                                <i className='bx bxs-paper-plane text-4xl'></i>
                            </div>
                            <p> <span className="font-bold">Email: </span> <Link to={'mailto:lasisiabdulsamad7@gmail.com'} className="text-red-700 no-underline hover:text-red-600" target="blank"> lasisiabdulsamad7@gmail.com </Link> </p>
                        </div>

                        <div>
                            <div className="w-28 h-28 flex items-center justify-center mx-auto border border-solid rounded-full my-4 bg-red-700 text-white">
                                <i className='bx bx-world text-4xl'></i>
                            </div>
                            <p> <span className="font-bold">Website/Porfolio: </span>  <Link to={'https://samkayzee-portfolio.vercel.app/'} target="blank" className="text-red-700 no-underline hover:text-red-600"> Website </Link> </p>
                        </div>

                    </div>

                {/* third section */}

                </div>
            </DefaultLayout>
     );
}
 
export default ContactPage;