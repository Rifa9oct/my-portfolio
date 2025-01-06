import bsc from "../../assets/bsc.png"
import hsc from "../../assets/hsc.png"
import ssc from "../../assets/ssc.png"

const Education = () => {
    return (
        <div className="max-w-[1280px] text-white mx-auto mt-[160px] md:mt-10 lg:mt-[120px] mb-[150px]" id="education">
            < h1 className="text-4xl md:text-5xl font-extrabold text-center font-serif" >Education</h1 >

            <div className='flex flex-col lg:flex-row gap-[100px] lg:gap-8 justify-center mt-[130px]'>
                <div className="relative w-[350px] md:w-[380px] mx-auto pt-[50px] border border-purple-400 shadow-inner shadow-gray-200 bg-[#9020aa] rounded-[20px] p-8 text-center">
                    <h3 className="mt-3 text-sm md:text-base">Bsc (Hons) (2021- present)</h3>
                    <h4 className="text-lg md:text-xl font-bold">Computer Science and Engineering</h4>
                    <h3 className="text-sm md:text-base">Tejgaon College, Dhaka, Bangladesh</h3>

                    <div className="absolute -top-[50px] left-[130px] md:left-[145px] flex justify-center items-center w-[100px] h-[100px] rounded-full mx-auto border-2 border-red-600 bg-blue-500">
                        <img src={bsc} alt="bsc_hons" />
                    </div>
                </div>

                <div className="relative w-[350px] md:w-[380px] mx-auto pt-[50px] border border-purple-400 shadow-inner shadow-gray-200 bg-[#9020aa] rounded-[20px] p-8 text-center">
                    <h3 className="mt-3 text-sm md:text-base">HSC (2018 - 2019)</h3>
                    <h4 className="text-lg md:text-xl font-bold">Higher Secondary Certificate</h4>
                    <h3 className="text-sm md:text-base">Police Lines School and College, Rangpur</h3>

                    <div className="absolute -top-[50px] left-[130px] md:left-[145px] flex justify-center items-center w-[100px] h-[100px] rounded-full mx-auto">
                        <img src={hsc} alt="hsc" />
                    </div>
                </div>

                <div className="relative w-[350px] md:w-[380px] mx-auto pt-[50px] border border-purple-400 shadow-inner shadow-gray-200 bg-[#9020aa] rounded-[20px] p-8 text-center">
                    <h3 className="mt-3 text-sm md:text-base">SSC (2016 - 2017)</h3>
                    <h4 className="text-lg md:text-xl font-bold">Secondary School Certificate</h4>
                    <h3 className="text-sm md:text-base">Govt Girls High School, Rangpur</h3>

                    <div className="absolute -top-[50px] left-[130px] md:left-[145px] flex justify-center items-center w-[100px] h-[100px] rounded-full border-2 border-red-700 bg-[#01D201]">
                        <img src={ssc} alt="ssc" className='w-[80px]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;