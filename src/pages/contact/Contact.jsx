import DefaultLayout from "../../layouts/DefaultLayouts/DefaultLayout";
import './Contact.css';
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
    // ref
    const formRef = useRef(null);
    const messageRef = useRef(null);
    const EmailRef = useRef(null);

    // States
    const [message, setMessage] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);

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
        const form = formRef.current;
        const message_ref = messageRef.current;

        try{

           if (isEmailValid) {
            await emailjs.sendForm('service_fxvcxyj', 'template_vggxabq', form, 'CC6qrRtlQzRCdePxS');
            message_ref.style.color = `rgb(100, 195, 100)`;
            setMessage("Message sent Successfully");
            e.target.reset();
           }
           else{
            throw new Error("Your Email is Invalid try using normal Email");
           }
        } catch (error){
            message_ref.style.color = "red";
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
                <div className="contact-container">
                    <h1>Contact Us</h1>
                    <h2>Get in Touch</h2>

                    <form ref={formRef} action="" className="contact-form" onSubmit={sendmail}>

                    <input type="text" name="name" id="" placeholder="Your Name" required/>

                    <input ref={EmailRef} type="email" onBlur={validEMail} name="email" id="" placeholder="Your Email" required/>
                    {!isEmailValid && <p style={{color:"red"}}>Please enter a valid email address</p>}

                    <input type="text" name="" id="" placeholder="Subject" required/>

                    <textarea name="message" id="" cols={30} rows={10} placeholder="Message" required></textarea>

                    <p ref={messageRef} className="message">{message}</p>

                    <button className="btn btn-outline-dark" type="submit">Send Message</button>
                </form>

                    <div className="contact-information">
                        <h2>Contact Informations</h2>
                    <ol>
                        <li> <span>Phone: </span>+2347019665230</li>
                        <li> <span>Email: </span>lasisiabdulsamad7@gmail.com</li>
                    </ol>
                    </div>
                </div>
            </DefaultLayout>
     );
}
 
export default ContactPage;