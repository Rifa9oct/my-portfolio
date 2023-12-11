import img from "../../assets/about.png"

const AboutMe = () => {
    const bgImg = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '600px'
    };
    return (
        <div className="relative py-20" style={bgImg} id="aboutme">
            <h1 className="text-5xl font-extrabold text-white text-center">ABOUT <span className="text-orange-500">ME</span></h1>
        </div>
    );
};

export default AboutMe;