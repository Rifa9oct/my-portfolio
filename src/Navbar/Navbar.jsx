import { Link } from "react-scroll";
import logo from "../assets/logo.png"
import "./navbar.css"
import { IoMenu } from "react-icons/io5";


const Navbar = () => {

    const navLinks = <div className="navbar flex items-center flex-col lg:flex-row gap-2 lg:gap-8">
        <li className="li1"><Link className="hover:text-orange-500" smooth={true} to="home">Home</Link></li>
        <li className="li2"><Link className="hover:text-orange-500" offset={-100} smooth={true} to="aboutme">About Me</Link></li>
        <li className="li3"><Link className="hover:text-orange-500" offset={-100} smooth={true} to="education">Education</Link></li>
        <li className="li4"><Link className="hover:text-orange-500" offset={-100} smooth={true} to="skills">Skills</Link></li>
        <li className="li5"><Link className="hover:text-orange-500" offset={-100} smooth={true} to="project">Project</Link></li>
        <li className="li6"><Link className="hover:text-orange-500" offset={-100} smooth={true} to="contact">Contact</Link></li>
    </div>

    return (
        <div className="bg-[#162243]">
            <div className="flex items-center max-w-[1280px] mx-auto px-5 lg:px-0 justify-between">
                <div className="flex items-center justify-between w-full lg:w-auto p-3 md:p-2">
                    <div className="logo w-[180px] md:w-[220px]">
                        <Link smooth={true} to="home">
                            <img className=" pt-1" src={logo} />
                        </Link>
                    </div>
                    <div className="block lg:hidden dropdown dropdown-end">
                        <label tabIndex={0} className="btn-sm btn-outline lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="rounded-lg flex text-base text-white flex-col gap-4 dropdown-content mt-3 z-[1] p-6 py-6 shadow shadow-gray-500 bg-[#271a2b] w-52">
                            {navLinks}
                        </ul>
                    </div>
                </div>

                <div>
                    <ul className="hidden lg:block text-white cursor-pointer">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;