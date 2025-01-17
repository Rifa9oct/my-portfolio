import { Link } from "react-scroll";
import logo from "../assets/icon.png"
import "./navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";

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
                            <div className="flex gap-3 items-center">
                                <img className="w-10 h-10 pt-1" src={logo} />
                                <p className="cursor-pointer text-white font-serif text-xl hover:text-orange-500 ">Kohinur Akther</p>
                            </div>
                        </Link>

                    </div>
                    <div className="block lg:hidden dropdown dropdown-end">
                        <label tabIndex={0} className="lg:hidden">
                            <GiHamburgerMenu className="text-white text-xl" />
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