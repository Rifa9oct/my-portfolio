import bsc from "../../assets/bsc.png"
import hsc from "../../assets/hsc.png"
import ssc from "../../assets/ssc.png"

const Education = () => {
    return (
        <div className="max-w-[1280px] mx-auto mt-[100px] mb-[150px]" id="education">
            < h1 className="text-5xl font-extrabold text-white text-center mt-20" >Education</h1 >

            <div className='flex gap-8 justify-center mt-16'>
                <div className='w-[400px] h-[250px] border-2 border-purple-400 bg-purple-700 rounded-[70px] p-5 text-center'>
                    <img src={bsc} alt="bsc_hons" className='border-2 border-red-600 mx-auto w-[100px] bg-blue-500 rounded-full' />
                    <h3 className="mt-2">Bsc (Hons) (2021- present)</h3>
                    <h4 className="text-lg font-bold text-white ">Computer Science and Engineering</h4>
                    <h3 className=''>Tejgaon College, Dhaka, Bangladesh</h3>
                </div>
                <div className='w-[400px] h-[250px] border-2 border-purple-400 bg-purple-700  rounded-[70px] p-5 text-center'>
                    <img src={hsc} alt="hsc" className='mx-auto w-[100px] rounded-full' />
                    <h3 className="mt-2">HSC (2018 - 2019)</h3>
                    <h4 className="text-lg text-white font-bold ">Higher Secondary Certificate</h4>
                    <h3>Police Lines School and College, Rangpur</h3>
                </div>
                <div className='w-[400px] h-[250px] border-2 border-purple-400 bg-purple-700  rounded-[70px] p-5 text-center'>
                    <div className='flex justify-center items-center w-[100px] h-[100px] rounded-full mx-auto border-2 border-red-700 bg-[#01D201]'>
                        <img src={ssc} alt="ssc" className='w-[80px] ' />
                    </div>

                    <h3 className="mt-2">SSC (2016 - 2017)</h3>
                    <h4 className="text-lg text-white font-bold ">Secondary School Certificate</h4>
                    <h3>Govt Girls High School, Rangpur</h3>
                </div>
            </div>
        </div>
    );
};

export default Education;