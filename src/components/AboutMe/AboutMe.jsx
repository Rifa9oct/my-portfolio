import about from "../../assets/about.png"

const AboutMe = () => {
    const bgImg = {
        backgroundImage: `url(${about})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height: '600px'
    };

    return (
        <div style={bgImg} id="aboutme">
            <div className="lg:pl-[35%] mt-28 md:mt-0 flex items-center h-[600px] bg-[#271a2b] lg:bg-white lg:bg-opacity-20 text-white text-sm" >
                <div className="px-8 md:px-0 md:w-[650px] mx-auto">
                    < h1 className="font-serif text-4xl md:text-5xl text-center lg:text-start font-extrabold text-white pb-5" >ABOUT<span span className="text-orange-500" > ME</span ></h1 >
                    <p className="mb-3">👋 Hello there! I&apos;am a passionate and detail-oriented web developer.</p>
                    <p className="mb-3">💻 I specialize in building robust and scalable web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack. I thrive on turning innovative ideas into practical solutions, leveraging my skills in React.js to craft engaging front-end interfaces that captivate users.</p>
                    <p className="mb-3">🌐 My expertise extends beyond the client-side, as I&apos;m well-versed in server-side development using Node.js and Express.js. I have hands-on experience in database management, particularly with MongoDB, ensuring data integrity and efficient storage.</p>

                    <p className="mb-3">🚀 Always eager to stay ahead in the ever-evolving tech landscape, I incorporate modern tools like Tailwind CSS for sleek and responsive designs. Additionally, I&apos;ve embraced Firebase for its real-time database capabilities and seamless integration.</p>

                    <p className="mb-3">🛠️ I&apos;m committed to writing clean, maintainable code and utilizing version control with GitHub to streamline collaborative projects. Whether it&apos;s implementing a smooth user interface or optimizing backend processes, I take pride in delivering high-quality solutions that meet both user and business needs.</p>

                    <p className="mb-3">🎨 Outside the realm of coding, I&apos;m a fan of enhancing user experiences through thoughtful design, and I often incorporate my creativity with tools like DaisyUI and other design principles.</p>
                </div>
            </div>
        </div >
    );
};

export default AboutMe;