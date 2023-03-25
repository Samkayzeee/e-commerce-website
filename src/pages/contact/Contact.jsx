import DefaultLayout from "../../layouts/DefaultLayouts/DefaultLayout";
import './Contact.css';
import { useRef, useState } from "react";

const ContactPage = () => {
    const formRef = useRef(null);
    const messageRef = useRef(null);
    const [message, setMessage] = useState("");

    const sendmail  = async(e) => {
        e.preventDefault();
        const form = formRef.current;
        const message_ref = messageRef.current;

        try{
            const result = await emailjs.sendForm('service_fxvcxyj', 'template_vggxabq', form, 'CC6qrRtlQzRCdePxS');
            message_ref.style.color = `rgb(100, 195, 100)`;
            setMessage("Message sent Successfully");
        } catch (error){
            message_ref.style.color = "red";
            setMessage("Theirs was an error sending your mail");
        }

        e.target.reset();
    }


    return ( 
            <DefaultLayout>
                <div className="contact-container">
                    <h1>Contact Us</h1>
                    <h2>Get in Touch</h2>

                    <form ref={formRef} action="" className="contact-form" onSubmit={sendmail}>
                    <input type="text" name="name" id="" placeholder="Your Name" required/>
                    <input type="email" name="email" id="" placeholder="Your Email" required/>
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