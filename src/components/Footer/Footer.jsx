import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";
import "./footer.css"

const Footer = () => {
    return (
        <div className="text-white mt-[120px] border-t border-[#761d8a] pt-10">
            <div className="flex flex-col md:flex-row justify-center md:justify-between lg:mx-32 items-center my-6">
                <div className='text-white text-lg'>
                    <div className='flex items-center'>
                        <MdLocationOn className='inline mr-2 text-2xl' />
                        <p>Dhaka, Bangladesh</p>
                    </div>
                    <div className='flex items-center'>
                        <MdEmail className='inline mr-2' />
                        <p>kohinuraktherr@gmail.com</p>
                    </div>
                </div>

                <div className="text-3xl flex items-center gap-4">
                    <a target="blank" href="https://github.com/Rifa9oct"><FaGithub /></a>
                    <a target="blank" href="https://www.linkedin.com/in/most-kohinur-akther/"><FaLinkedin /></a>
                    <a target="blank" href="https://www.instagram.com/kohinur_akther.dev"><FaInstagram /></a>
                    <a><FaWhatsapp /></a>
                </div>
            </div>

            <div className="wave_style">
                <p className="text-sm text-center">Copyright © 2025 - All right reserved by Most. Kohinur Akther</p>
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
            </div>
        </div>
    );
};

export default Footer;