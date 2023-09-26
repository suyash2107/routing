import "./about.css";
import Navbar from './../../component/navbar/Navbar.js';
import Footer from "../../component/footer/Footer.js";

export default function About() {
    return (
        <div>
            <Navbar /> 
            <h1>About</h1>
            <p>
                this is my about page
                </p>
            <Footer/>
        </div>
    );
}
