import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import Swal from 'sweetalert2';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_r7shgvs', 'template_817cisf', form.current, 'kf8L6L5rWew__efaS')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Thank You. 🥰",
                    text: "Email send successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });

            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='pb-20' id="contact">
            <h1 className="text-5xl font-extrabold text-white text-center">Contact <span className="text-orange-500">ME</span></h1>

            <div className='flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-20 mt-12'>
                <div className='text-white text-xl'>
                    <div className='flex justify-center items-center'>
                        <MdLocationOn className='inline mr-2 text-2xl' />
                        <p>Dhaka, Bangladesh</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <MdEmail className='inline mr-2' />
                        <p className='mb-2'>kohinuraktherr@gmail.com</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <FaLinkedin className='inline mr-2' />
                        <a href="https://www.linkedin.com/in/most-kohinur-akther-3a46752a3/">Linked in</a>
                    </div>
                </div>

                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <label className='text-white'>Name</label><br />
                        <input className='w-[400px] my-2 rounded-lg px-5 py-2' type="text" placeholder='your full name' required name="user_name" /><br />

                        <label className='text-white'>Email</label><br />
                        <input className='w-[400px] rounded-lg px-5 py-2 my-2' type="email" placeholder='your email' required name="user_email" /><br />

                        <label className='text-white'>Message</label><br />
                        <textarea className='w-[400px] rounded-lg my-2 px-5 pt-2 pb-10' placeholder='message'required name="message" /> <br />

                        <input className="w-[400px] text-white font-bold bg-orange-500 shadow-xl hover:border-b-4 hover:scale-105 transition-all px-8 py-2 mt-5 rounded-full cursor-pointer" type='submit' value="Send" />
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Contact;