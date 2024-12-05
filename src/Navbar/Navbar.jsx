import { Link } from "react-scroll";
import logo from "../assets/logo.png"
import "./navbar.css"


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
        <div className="bg-[#170550]">
            <div className="flex items-center max-w-[1468px] mx-auto justify-between">
                <div className="flex items-center p-3 md:p-2">
                    <div className="logo w-[250px]">
                        <img className=" pt-1" src={logo} />
                    </div>
                    <div className="block lg:hidden dropdown dropdown-end ml-[210px] md:ml-[560px]">
                        <label tabIndex={0} className="btn btn-error lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="rounded-lg flex text-base text-yellow-300 flex-col gap-4 dropdown-content mt-3 z-[1] p-6 py-6 shadow bg-[#170550] w-52">
                            {navLinks}
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <ul className="hidden lg:block text-[#bc87ee] cursor-pointer">
                            {navLinks}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;