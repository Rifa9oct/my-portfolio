import { Link } from "react-scroll";
import logo from "../assets/logo.png"


const Navbar = () => {

    const navLinks = <>
        <li><Link className="hover:text-orange-500" offset={-50} smooth={true} to="home">Home</Link></li>
        <li><Link className="hover:text-orange-500" offset={-50} smooth={true} to="aboutme">About Me</Link></li>
        <li><Link className="hover:text-orange-500" offset={-50} smooth={true} to="services">Services</Link></li>
        <li><Link className="hover:text-orange-500" offset={-50} smooth={true} to="skills">Skills</Link></li>
        <li><Link className="hover:text-orange-500" offset={-50} smooth={true} to="portfolio">Portfolio</Link></li>
        <li><Link className="hover:text-orange-500" offset={-50} smooth={true} to="contact">Contact</Link></li>
    </>

    return (
        <div className="navbar flex-col md:flex-row items-center justify-between pb-5 md:pb-0 bg-[#170550] px-[150px]">
            <div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="flex flex-col gap-4 dropdown-content mt-3 z-[1] p-6 py-6 shadow bg-[#F7F6F0xer text-sm hover:text-orange-950 w-52">
                        {navLinks}
                    </ul>
                </div>
                <img className="w-[120px] py-1" src={logo} />
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