import bsc from "../../assets/bsc.png"
import hsc from "../../assets/hsc.png"
import ssc from "../../assets/ssc.png"

const Education = () => {
    return (
        <div className="max-w-[1280px] mx-auto mt-[100px] mb-[150px]" id="education">
            < h1 className="text-5xl font-extrabold text-white text-center mt-20" >Education</h1 >

            <div className='flex gap-8 justify-center mt-[130px]'>
                <div className='relative'>
                    <div className="absolute -top-[60px] left-[138px] flex justify-center items-center w-[100px] h-[100px] rounded-full mx-auto border-2 border-red-600 bg-blue-500">
                        <img src={bsc} alt="bsc_hons" />
                    </div>

                    <div className="w-[380px] pt-[50px] border-2 border-purple-400 bg-purple-700 rounded-[20px] p-8 text-center">
                        <h3>Bsc (Hons) (2021- present)</h3>
                        <h4 className="text-lg font-bold text-white ">Computer Science and Engineering</h4>
                        <h3 className=''>Tejgaon College, Dhaka, Bangladesh</h3>
                    </div>
                </div>
                <div className='relative'>
                    <div className="absolute -top-[60px] left-[138px] flex justify-center items-center w-[100px] h-[100px] rounded-full mx-auto">
                        <img src={hsc} alt="hsc" />
                    </div>

                    <div className="w-[380px] pt-[50px] border-2 border-purple-400 bg-purple-700 rounded-[20px] p-8 text-center">
                        <h3>HSC (2018 - 2019)</h3>
                        <h4 className="text-lg font-bold text-white ">Higher Secondary Certificate</h4>
                        <h3>Police Lines School and College, Rangpur</h3>
                    </div>
                </div>
                <div className='relative'>
                    <div className="absolute -top-[60px] left-[138px] flex justify-center items-center w-[100px] h-[100px] rounded-full border-2 border-red-700 bg-[#01D201]">
                        <img src={ssc} alt="ssc" className='w-[80px]' />
                    </div>

                    <div className="w-[380px] pt-[50px] border-2 border-purple-400 bg-purple-700 rounded-[20px] p-8 text-center">
                        <h3>SSC (2016 - 2017)</h3>
                        <h4 className="text-lg font-bold text-white ">Secondary School Certificate</h4>
                        <h3>Govt Girls High School, Rangpur</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;