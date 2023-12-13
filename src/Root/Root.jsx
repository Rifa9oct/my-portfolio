import Headroom from "react-headroom";
import Navbar from "../Navbar/Navbar";
import Home from "../components/Home/Home";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import Skills from "../components/Skills/Skills";
import Project from "../components/Project/Project";
import Footer from "../components/Footer/Footer";
import Education from "../components/Education/Education";

const Root = () => {
    return (
        <div>
            <Headroom><Navbar></Navbar></Headroom>
            <Home></Home>
            <AboutMe></AboutMe>
            <Education></Education>
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Root;