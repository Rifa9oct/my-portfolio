import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import video from "../../assets/video.mp4"
import { useForm } from 'react-hook-form';
import { MdError } from "react-icons/md";
import { useRef } from 'react';

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const form = useRef();

    const sendEmail = async () => {

        try {
            emailjs.sendForm('service_wxg8lsx', 'template_817cisf', form.current, 'swwPslQjzr44hQZx_')
                .then(() => {
                    reset();
                    
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Thank You.🥰",
                        text: "Email send successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }, (error) => {
                    console.log(error.text);
                });
        } catch (err) {
            console.log(err)
        }
    }

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
                    <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                        <div>
                            <label className='text-white'>Name</label><br />
                            <input type="text"
                                name="user_name"
                                {...register("user_name", { required: true })}
                                className={`w-[350px] lg:w-[400px] rounded-lg mt-2 px-5 py-2 ${errors.user_name ? "focus:outline focus:outline-red-500" : "focus:outline focus:outline-[#9020aa]"} `}
                                placeholder="your name" /> <br />
                            {errors.user_name && <span className="text-sm text-red-500"><MdError className="text-lg inline" /> Name field is required.</span>}
                        </div>

                        <div className='my-3'>
                            <label className='text-white'>Email</label><br />
                            <input type="email"
                                name="user_email"
                                {...register("user_email", { required: true })}
                                className={`w-[350px] lg:w-[400px] rounded-lg mt-2 px-5 py-2 ${errors.user_email ? "focus:outline focus:outline-red-500" : "focus:outline focus:outline-[#9020aa]"} `}
                                placeholder="youremail@gmail.com" /> <br />
                            {errors.user_email && <span className="text-sm text-red-500"><MdError className="text-lg inline" /> Email field is required.</span>}
                        </div>

                        <div>
                            <label className='text-white'>Message</label><br />
                            <textarea name="message" {...register("message", { required: true, maxLength: 150 })} rows="5"
                                className={`w-[350px] lg:w-[400px] rounded-lg mt-2 px-5 pt-2 ${errors.message ? "focus:outline focus:outline-red-500" : "focus:outline focus:outline-[#9020aa]"} `} placeholder='type your message...' /> <br />
                            {errors.message?.type === "required" && <span className="text-sm mt-1 text-red-500"><MdError className="text-lg inline" /> This field is required.</span>}
                            {errors.message?.type === "maxLength" && <p className="text-sm text-red-500"><MdError className="text-lg inline" /> Review message must be less than 150 characters.</p>}
                        </div>

                        <button type='submit'
                            className="w-[350px] lg:w-[400px] text-white font-bold bg-gradient-to-r from-[#4f32a9] to-[#9020aa] hover:scale-105 transition-all px-8 py-2 mt-5 rounded-full cursor-pointer">
                            send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;