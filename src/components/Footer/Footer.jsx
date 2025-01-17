import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";
import "./footer.css"

const Footer = () => {
    return (
        <div className="text-white mt-10 lg:mt-[100px] border-t border-[#761d8a] pt-10">
            <div data-aos="fade-up"
                data-aos-duration="800" className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-8 justify-center md:justify-between items-center my-6">
                <div className='text-white text-lg'>
                    <div className='flex items-center justify-center lg:justify-start'>
                        <MdLocationOn className='inline mr-2 text-2xl' />
                        <a target="blank" href="https://www.google.com/maps/" className="hover:text-orange-500">Mohammadpur, Dhaka, Bangladesh.</a>
                    </div>
                    <div className='flex items-center justify-center lg:justify-start'>
                        <MdEmail className='inline mr-2' />
                        <a target="blank" href="https://gmail.com/" className="hover:text-orange-500">kohinuraktherr@gmail.com</a>
                    </div>
                </div>

                <div className="text-3xl flex items-center gap-4">
                    <a target="blank" href="https://github.com/Rifa9oct/"><FaGithub /></a>
                    <a target="blank" href="https://www.linkedin.com/in/most-kohinur-akther/"><FaLinkedin /></a>
                    <a target="blank" href="https://www.instagram.com/kohinur_akther.dev/"><FaInstagram /></a>
                    <a target="blank" href="https://whatsapp.com/"><FaWhatsapp /></a>
                </div>
            </div>

            <div className="wave_style">
                <p data-aos="fade-up"
                    data-aos-duration="800" className="text-sm text-center">Copyright © 2025 - All right reserved by Most. Kohinur Akther</p>
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
            </div>
        </div>
    );
};

export default Footer;