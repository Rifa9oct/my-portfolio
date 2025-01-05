import bsc from "../../assets/bsc.png"
import hsc from "../../assets/hsc.png"
import ssc from "../../assets/ssc.png"

const Education = () => {
    return (
        <div className="max-w-[1280px] text-white mx-auto mt-[160px] md:mt-10 lg:mt-[120px] mb-[150px]" id="education">
            < h1 className="text-5xl font-extrabold text-center font-serif" >Education</h1 >

            <div className='flex flex-col lg:flex-row gap-[100px] lg:gap-8 justify-center mt-[130px]'>
                <div className='relative'>
                    <div className="absolute -top-[60px] left-[165px] md:left-[335px] lg:left-[138px] flex justify-center items-center w-[100px] h-[100px] rounded-full mx-auto border-2 border-red-600 bg-blue-500">
                        <img src={bsc} alt="bsc_hons" />
                    </div>

                    <div className="w-[380px] mx-auto pt-[50px] border border-purple-400 shadow-inner shadow-gray-200 bg-[#9020aa] rounded-[20px] p-8 text-center">
                        <h3>Bsc (Hons) (2021- present)</h3>
                        <h4 className="text-xl font-bold">Computer Science and Engineering</h4>
                        <h3>Tejgaon College, Dhaka, Bangladesh</h3>
                    </div>
                </div>
                <div className='relative'>
                    <div className="absolute -top-[60px] left-[165px] md:left-[335px] lg:left-[138px] flex justify-center items-center w-[100px] h-[100px] rounded-full mx-auto">
                        <img src={hsc} alt="hsc" />
                    </div>

                    <div className="w-[380px] mx-auto pt-[50px] border border-purple-400 shadow-inner shadow-gray-200 bg-[#9020aa] rounded-[20px] p-8 text-center">
                        <h3>HSC (2018 - 2019)</h3>
                        <h4 className="text-xl font-bold">Higher Secondary Certificate</h4>
                        <h3>Police Lines School and College, Rangpur</h3>
                    </div>
                </div>
                <div className='relative'>
                    <div className="absolute -top-[60px] left-[165px] md:left-[335px] lg:left-[138px] flex justify-center items-center w-[100px] h-[100px] rounded-full border-2 border-red-700 bg-[#01D201]">
                        <img src={ssc} alt="ssc" className='w-[80px]' />
                    </div>

                    <div className="w-[380px] mx-auto pt-[50px] border border-purple-400 shadow-inner shadow-gray-200 bg-[#9020aa] rounded-[20px] p-8 text-center">
                        <h3>SSC (2016 - 2017)</h3>
                        <h4 className="text-xl font-bold">Secondary School Certificate</h4>
                        <h3>Govt Girls High School, Rangpur</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;