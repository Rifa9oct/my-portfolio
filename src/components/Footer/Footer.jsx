import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
    return (
        <div className=" text-white p-6 bg-[#170550]">
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
            <p className="text-sm text-center">Copyright © 2024 - All right reserved by Most. Kohinur Akther</p>
        </div>
    );
};

export default Footer;