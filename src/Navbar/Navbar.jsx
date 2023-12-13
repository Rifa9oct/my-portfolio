import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import "./navbar.css"


const Navbar = () => {

    const navLinks = <div className="navbar">
        <li className="li1"><Link className="hover:text-orange-500" smooth={true} to="home">Home</Link></li>
        <li className="li2"><Link className="hover:text-orange-500" offset={-100} smooth={true} to="aboutme">About Me</Link></li>
        <li className="li3"><Link className="hover:text-orange-500" offset={-100} smooth={true} to="education">Education</Link></li>
        <li className="li4"><Link className="hover:text-orange-500" offset={-100} smooth={true} to="skills">Skills</Link></li>
        <li className="li5"><Link className="hover:text-orange-500" offset={-100} smooth={true} to="project">Project</Link></li>
        <li className="li6"><Link className="hover:text-orange-500" offset={-100} smooth={true} to="contact">Contact</Link></li>
    </div>

    return (
        <div className="navbar flex items-center justify-between bg-[#170550] lg:px-[150px]">
            <div>
                <div className="logo">
                    <img className="w-[120px] pt-1" src={logo} />
                </div>
                <div className="block lg:hidden dropdown dropdown-end ml-[230px] md:ml-[565px]">
                    <label tabIndex={0} className="btn btn-error lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="flex text-base text-yellow-300 flex-col gap-4 dropdown-content mt-3 z-[1] p-6 py-6 shadow bg-[#170550] w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div>
                <div className="hidden mr-8 lg:flex">
                    <ul className="flex gap-8 text-yellow-300 cursor-pointer">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;