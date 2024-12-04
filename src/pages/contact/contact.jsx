import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/header";
import TemplateBanner from "./../../components/banners/templateBanner";

import Styles from "./Component.module.css";
import { faClock, faPhone } from "@fortawesome/free-solid-svg-icons";
import Benefits from "../../components/benefits";
import Footer from "../../components/footer";


export default function Contact() {
    return (
        <>
            <Header/>
            <TemplateBanner img="/banners/backgroundB&W.jpg" title="Contact" />
            <div className={Styles.infoContainer}> 
                <h1 className={Styles.title}>Contact us</h1>
                <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>    
            </div>
            <div className={Styles.formContainer}>
            <div className={Styles.contactDetails}>
                    <div>
                        <h3><FontAwesomeIcon icon={faPhone}/> Phone</h3>
                        <p>Mobile:(+1) 123 456 7890</p>
                        <p>Hotline:(+1) 123 456 7890</p>
                    </div>
                    <div>
                        <h3><FontAwesomeIcon icon={faClock} /> Working time</h3>
                        <p>Monday to Friday: 9:00 - 18:00</p>
                        <p>Saturday-Sunday: 10:00 - 16:00</p>
                    </div>    
                </div>

                <div className={Styles.form}>
                    <label>Your Name</label>
                    <input type="text" placeholder="Name" />
                    <label>Email</label>
                    <input type="email" placeholder="your@email.com" />
                    <label>Subject</label>
                    <input type="text" placeholder="This is an optional field" />
                    <label>Message</label>
                    <textarea placeholder="Message" />
                    <button>Submit</button>
                </div>               
            </div>
            <Benefits/>
            <Footer/>
        </>
    );
}