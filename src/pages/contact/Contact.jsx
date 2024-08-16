import DefaultLayout from "../../layouts/DefaultLayouts/DefaultLayout";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";


import { useForm } from "@formspree/react";


import Phone_Holding from "/assets/Phone_Hold.jpg";

const ContactPage = () => {


    const [state, handleSubmit] = useForm("mzzpdzdq");


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


    return ( 
            <DefaultLayout>
                <div className={`${ context.theme === 'light' ? 'bg-gray-50 text-black':'bg-black text-white' } pb-14`} >
                    {/* first section */}
                    <div className="md:h-96 h-[450px] flex items-end py-14" 
                    style={{
                        background:"linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0, 0.4)), url('/assets/Phone_Hold.jpg')",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundAttachment: "fixed"
                    }}
                    >
                        <div className="mx-auto text-center">
                           <p className="text-neutral-400 text-base font-semibold"> HOME <i className='bx bx-chevron-right text-3xl translate-y-1.5'></i> CONTACT US <i className='bx bx-chevron-right text-3xl translate-y-1.5'></i></p>
                           <h1 className="text-white font-extrabold" style={{fontSize: "60px"}}>Contact Us</h1>
                        </div>
                    </div>

                    {/* second section */}
                    <div className="flex md:flex-row flex-col justify-evenly text-center py-16">

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

                <div className="flex md:flex-row flex-col-reverse md:w-4/5 w-full mx-auto bg-white">
                    <div className="md:w-1/2 w-full">
                        <img src={Phone_Holding} alt="Phone Hold" className="md:h-full h-96 w-full"/>
                    </div>

                    <div className="md:w-1/2 w-full py-8 px-6">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="md:flex justify-between my-4">
                                <div className="md:w-5/12 w-full my-4 md:my-0">
                                    <label htmlFor="FullName" className="block mb-4 text-red-700 text-sm">FULL NAME</label>
                                    <input type="text" name="FullName" required className="bg-transparent text-sm border-b border-b-gray-500 py-3 outline-none focus:border-b-red-700 w-full" placeholder="Name"/>
                                </div>

                                <div className="my-4 md:my-0 md:w-5/12 w-full">
                                    <label htmlFor="Email" className="block mb-4 text-red-700 text-sm">EMAIL ADDRESS</label>
                                    <input type="email" name="Email" required className="bg-transparent text-sm border-b border-b-gray-500 py-3 outline-none focus:border-b-red-700 w-full" placeholder="Email" 
                                    ref={EmailRef} onBlur={validEMail} disabled={state.succeeded ? true : false}
                                    />
                                    {!isEmailValid && <p className="text-xs text-red-500">Please enter a valid email address</p>}
                                </div>
                            </div>

                            <div className="my-4">
                                <label htmlFor="Subject" className="block mb-4 text-red-700 text-sm">SUBJECT</label>
                                <input type="text" name="Subject" id="" className="w-full text-sm bg-transparent border-b border-b-gray-500 py-3 outline-none focus:border-b-red-700" placeholder="Subject"/>
                            </div>

                            <div className="my-4">
                                <label htmlFor="Textarea" className="block mb-4 text-red-700 text-sm">MESSAGE</label>
                                <textarea name="" id="" cols="30" rows="3" required className="w-full resize-none text-sm bg-transparent border-b border-b-gray-500 py-3 outline-none focus:border-b-red-700" placeholder="Message"></textarea>
                                { state.succeeded && <p className="text-xs text-green-600"> Message sent Successfully. </p>}
                                { state.errors && <p className="text-xs text-red-500" > Email not send check your connection or check your fields and try again </p> }
                            </div>

                            <button className=" w-36 py-2.5 text-center rounded-md text-white font-semibold bg-red-700" disabled={state.succeeded ? true : false}> { state.submitting ? <span className="loading loading-spinner loading-xs"></span> : "Send Message" } </button>

                            
                        </form>
                    </div>
                </div>

                </div>
            </DefaultLayout>
     );
}
 
export default ContactPage;