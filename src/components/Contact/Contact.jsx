import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import video from "../../assets/video.mp4"

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
        <div className='pb-20 max-w-[1468px] mx-auto' id="contact">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center font-serif">Contact <span className="text-orange-500">ME</span></h1>

            <div className='flex flex-col lg:mx-[200px] lg:flex-row items-center justify-center mt-12'>
                <div className='w-[350px] mx-auto lg:w-[400px]' >
                    <video className="rounded-[36px]" autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>

                <div className='mx-auto mt-10 lg:mt-0'>
                    <form ref={form} onSubmit={sendEmail}>
                        <label className='text-white'>Name</label><br />
                        <input className='w-[350px] lg:w-[400px] my-2 rounded-lg px-5 py-2' type="text" placeholder='your full name' required name="user_name" /><br />

                        <label className='text-white'>Email</label><br />
                        <input className='w-[350px] lg:w-[400px] rounded-lg px-5 py-2 my-2' type="email" placeholder='your email' required name="user_email" /><br />

                        <label className='text-white'>Message</label><br />
                        <textarea className='w-[350px] lg:w-[400px] rounded-lg my-2 px-5 pt-2 pb-10' placeholder='message' required name="message" /> <br />

                        <input className="w-[350px] lg:w-[400px] text-white font-bold bg-gradient-to-r from-[#4f32a9] to-[#9020aa] hover:scale-105 transition-all px-8 py-2 mt-5 rounded-full cursor-pointer" type='submit' value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;