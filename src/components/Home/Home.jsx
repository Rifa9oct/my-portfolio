import { FaDownload } from "react-icons/fa6";
import banner from "../../assets/banner.png"
import resume from "../../assets/Kohinur Akther Resume.pdf";
import "./home.css"

const Home = () => {
    const bgImg = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundAttachment: 'fixed',
        height: '600px'
    };
    return (
        <div className="max-w-[1468px] mx-auto relative" style={bgImg} id="home">
            <div className="absolute text-center lg:text-start top-[140px] lg:top-[200px] left-[10px] md:left-[150px]">
                <h2 className="home2 text-orange-500 font-medium text-xl">Hi, It&apos;s me</h2>
                <h1 className="home1 text-3xl md:text-5xl font-extrabold text-white">MOST. KOHINUR AKTHER</h1>
                <h2 className="home2 text-2xl font-medium my-1 text-white">And I&apos;m a<span className="text-orange-500"> Web Developer</span></h2>
                <p className="homeP text-white text-sm w-[400px]">with a strong foundation in modern technologies. My journey in the world of web development began with a love for creating seamless and interactive user experiences.</p>

                <a href={resume} download={resume}>
                    <button className="button text-white font-bold bg-orange-500 px-4 py-3 mt-5 rounded-full"><FaDownload className="inline text-xl pb-1 text-center" /> Download Resume</button>
                </a>
            </div>
        </div>
    );
};

export default Home;