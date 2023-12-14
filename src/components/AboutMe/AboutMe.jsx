import aboutme from "../../assets/aboutme.png"

const AboutMe = () => {

    return (
        <div className="max-w-[1468px] mx-auto pb-20 lg:mt-16" id="aboutme">
            < h1 className="text-4xl md:text-5xl font-extrabold text-white text-center" >ABOUT<span span className="text-orange-500" > ME</span ></h1 >

            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-20 mt-12 text-white text-sm">
                <div className="w-[300px] lg:w-1/4 p-5">
                    <img className="rounded-[36px]" src={aboutme} alt="about me" />
                </div>
                <div className="lg:w-[45%] px-8 lg:px-0">
                    <p className="mb-3">👋 Hello there! I'am a passionate and detail-oriented web developer.</p>
                    <p className="mb-3">💻 I specialize in building robust and scalable web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack. I thrive on turning innovative ideas into practical solutions, leveraging my skills in React.js to craft engaging front-end interfaces that captivate users.</p>
                    <p className="mb-3">🌐 My expertise extends beyond the client-side, as I'm well-versed in server-side development using Node.js and Express.js. I have hands-on experience in database management, particularly with MongoDB, ensuring data integrity and efficient storage.</p>

                    <p className="mb-3">🚀 Always eager to stay ahead in the ever-evolving tech landscape, I incorporate modern tools like Tailwind CSS for sleek and responsive designs. Additionally, I've embraced Firebase for its real-time database capabilities and seamless integration.</p>

                    <p className="mb-3">🛠️ I'm committed to writing clean, maintainable code and utilizing version control with GitHub to streamline collaborative projects. Whether it's implementing a smooth user interface or optimizing backend processes, I take pride in delivering high-quality solutions that meet both user and business needs.</p>

                    <p className="mb-3">🎨 Outside the realm of coding, I'm a fan of enhancing user experiences through thoughtful design, and I often incorporate my creativity with tools like DaisyUI and other design principles.</p>
                </div>
            </div>
        </div >
    );
};

export default AboutMe;