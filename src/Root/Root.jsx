import Headroom from "react-headroom";
import Navbar from "../Navbar/Navbar";
import Home from "../components/Home/Home";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import Skills from "../components/Skills/Skills";

const Root = () => {
    return (
        <div>
            <Headroom><Navbar></Navbar></Headroom>
            <Home></Home>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Root;