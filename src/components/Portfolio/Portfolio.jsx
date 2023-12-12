import "./portfolio.css"
import { CgMouse } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Portfolio = () => {
    return (
        <div className="pb-20 max-w-[1468px] mx-auto  mb-20" id='portfolio'>
            < h1 className="text-5xl font-extrabold text-white text-center" > My <span span className="text-orange-500" > Portfolio</span ></h1 >

            <div className="flex flex-col lg:flex-row gap-6 justify-evenly items-center mt-12">
                <div className="lg:hidden md:block text-white w-[300px] text-center">
                    <h1 className="text-2xl text-yellow-300">Employee Management</h1>
                    <p className="text-xs mt-1">Transform workforce management with our Employee Management site, using Firebase, Tailwind, Mongoose, React, JWT, and daisyui. Tailored roles empower HR, Admin, and employees, ensuring an efficient and user-friendly experience.</p>
                </div>
                <a href="https://tricky-earthquake.surge.sh" target="blank" className="scrollBg-1 relative overflow-hidden h-[345px] w-[300px] border rounded-md cursor-pointer">
                    <div className="absolute h-[345px] w-[300px] bg-black bg-opacity-50 hover:opacity-0">
                        <div className="animateUpDown text-2xl mt-[140px] ml-[135px] text-white">
                            <IoIosArrowUp />
                            <CgMouse />
                            <IoIosArrowDown />
                        </div>
                    </div>
                </a>

                <div className="lg:hidden md:block text-white w-[300px] text-center">
                    <h1 className="text-2xl text-yellow-300">Hotel Booking</h1>
                    <p className="text-xs mt-1">Seamless hotel bookings on our platform: securely stored info for effortless viewing, modifying, and canceling reservations. Elevate hospitality with our tech-savvy, user-friendly booking solution.</p>
                </div>
                <a href="https://ocean-side-hotel.web.app" target="blank" className="scrollBg-2 relative overflow-hidden h-[345px] w-[300px] border rounded-md cursor-pointer">
                    <div className="absolute h-[345px] w-[300px] bg-black bg-opacity-50 hover:opacity-0">
                        <div className="animateUpDown text-2xl mt-[140px] ml-[135px] text-white">
                            <IoIosArrowUp />
                            <CgMouse />
                            <IoIosArrowDown />
                        </div>
                    </div>
                </a>

                <div className="lg:hidden md:block text-white w-[300px] text-center">
                    <h1 className="text-2xl text-yellow-300">Fashion Brand Shop</h1>
                    <p className="text-xs mt-1">Discover style on our Fashion Brand Shop with sleek Tailwind design, MongoDB, React, and daisyUI. Elevate your wardrobe with elegance and innovation in a seamless shopping experience.</p>
                </div>
                <a href="https://fashionbrandshop-f47a4.web.app" target="blank" className="scrollBg-3 relative overflow-hidden h-[345px] w-[300px] border rounded-md cursor-pointer">
                    <div className="absolute h-[345px] w-[300px] bg-black bg-opacity-50 hover:opacity-0">
                        <div className="animateUpDown text-2xl mt-[140px] ml-[135px] text-white">
                            <IoIosArrowUp />
                            <CgMouse />
                            <IoIosArrowDown />
                        </div>
                    </div>
                </a>

            </div>

            <div className="lg:flex hidden justify-evenly mt-4">
                <div className="text-white w-[300px] text-center">
                    <h1 className="text-2xl text-yellow-300">Employee Management</h1>
                    <p className="text-xs mt-1">Transform workforce management with our Employee Management site, using Firebase, Tailwind, Mongoose, React, JWT, and daisyui. Tailored roles empower HR, Admin, and employees, ensuring an efficient and user-friendly experience.</p>
                </div>
                <div className="text-white w-[300px] text-center">
                    <h1 className="text-2xl text-yellow-300">Hotel Booking</h1>
                    <p className="text-xs mt-1">Seamless hotel bookings on our platform: securely stored info for effortless viewing, modifying, and canceling reservations. Elevate hospitality with our tech-savvy, user-friendly booking solution.</p>
                </div>
                <div className="text-white w-[300px] text-center">
                    <h1 className="text-2xl text-yellow-300">Fashion Brand Shop</h1>
                    <p className="text-xs mt-1">Discover style on our Fashion Brand Shop with sleek Tailwind design, MongoDB, React, and daisyUI. Elevate your wardrobe with elegance and innovation in a seamless shopping experience.</p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;