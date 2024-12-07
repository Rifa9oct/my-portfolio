import { FaDownload } from "react-icons/fa6";
import me from "../../assets/me.jpg";
import resume from "../../assets/Kohinur Akther Resume.pdf";
import "./home.css"

const Home = () => {

    return (
        <div className="flex items-center justify-around max-w-[1280px] mx-auto h-[100vh]" id="home">
            <div className="text-center lg:text-start">
                <h2 className="home2 text-orange-500 font-medium text-xl">Hi, It&apos;s me</h2>
                <h1 className="home1 text-3xl md:text-5xl font-extrabold text-white">MOST. KOHINUR AKTHER</h1>
                <h2 className="home2 text-2xl font-medium my-1 text-white">And I&apos;m a<span className="text-orange-500"> Web Developer</span></h2>
                <p className="homeP text-white text-sm w-[400px]">with a strong foundation in modern technologies. My journey in the world of web development began with a love for creating seamless and interactive user experiences.</p>

                <a href={resume} download={resume}>
                    <button className="button text-white font-bold bg-orange-500 px-4 py-3 mt-5 rounded-full"><FaDownload className="inline text-xl pb-1 text-center" /> Download Resume</button>
                </a>
            </div>
            <div className="w-[272px] h-[342px] rounded-xl border-[6px] border-white  relative bg-yellow-500 ">
                <img src={me} alt="my_image" className="absolute border-[6px] border-white w-[250px] -rotate-[5deg]  rounded-xl -left-[40px] -top-[60px]"/>
            </div>
        </div>
    );
};

export default Home;