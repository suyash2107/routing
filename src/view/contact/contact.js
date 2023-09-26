import "./contact.css";
import Navbar from './../../component/navbar/Navbar.js';
import Footer from "../../component/footer/Footer.js";

export default function Contact() { 
    return (
        <div className="contact-container"> 
            <Navbar />
            <h1>Contact</h1>
            <p>
                This is my contact page.
            </p>
            <Footer />
        </div>
    );
}
