import "./home.css";
import Navbar from './../../component/navbar/Navbar.js';
import Footer from "../../component/footer/Footer.js";

export default function Home() {
    return (
        <div>
            <Navbar /> 
            <h1>home</h1>
            <p>
                this is my home page
                </p>
            <Footer/>
        </div>
    );
}
