import banner from "../../assets/banner.png"

const Home = () => {
    const bgImg = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '700px'
      };
    return (
        <div className="relative mb-32" style={bgImg} id="home">
            <div className="absolute top-[200px] left-[150px]">
               <h2 className="text-yellow-300 font-medium text-xl">Hi, It's me</h2>
               <h1 className="text-5xl font-extrabold text-white">MOST. KOHINUR AKTHER</h1>
               <h2  className="text-2xl font-medium my-1 text-white">And I'm a<span className="text-yellow-300"> Web Developer</span></h2>
               <p className="text-white text-sm w-[400px]">Enthusiastic web developer committed to creating seamless and innovative web applications.</p>
            </div>
        </div>
    );
};

export default Home;