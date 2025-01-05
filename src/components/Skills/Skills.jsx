import Marquee from "react-fast-marquee";
import html from "../../assets/skills_logo/html.png";
import css from "../../assets/skills_logo/css.png";
import tailwind from "../../assets/skills_logo/tailwind.png";
import bootstrap from "../../assets/skills_logo/bootstrap.png";
import javascript from "../../assets/skills_logo/javascript.png";
import react from "../../assets/skills_logo/react.png";
import next from "../../assets/skills_logo/next.png";
import node from "../../assets/skills_logo/node.png";
import mongo from "../../assets/skills_logo/mongo.png";

const Skills = () => {

    return (
        <div className="max-w-[1280px] mx-auto my-24 px-5 lg:px-0" id='skills'>
            <h1 className="text-5xl font-extrabold text-white text-center mb-12 font-serif">My <span className="text-orange-500">Skills</span></h1>
            <Marquee speed={130}>
                <div className="flex gap-6">
                    <div>
                        <img src={html} alt="html_logo" className="w-[120px]" />
                        <p className="text-white text-sm font-bold uppercase text-center">html</p>
                    </div>
                    <div>
                        <img src={css} alt="css_logo" className="w-[120px]" />
                        <p className="text-white text-sm font-bold uppercase text-center">css</p>
                    </div>
                    <div>
                        <img src={tailwind} alt="tailwind_logo" className="w-[120px]" />
                        <p className="text-white text-sm font-bold uppercase text-center">tailwind css</p>
                    </div>
                    <div>
                        <img src={bootstrap} alt="bootstrap_logo" className="w-[120px]" />
                        <p className="text-white text-sm font-bold uppercase text-center">bootstrap</p>
                    </div>
                    <div>
                        <img src={javascript} alt="javascript_logo" className="w-[120px]" />
                        <p className="text-white text-sm font-bold uppercase text-center">javascript</p>
                    </div>
                    <div>
                        <img src={react} alt="reactjs_logo" className="w-[120px]" />
                        <p className="text-white text-sm font-bold uppercase text-center">react js</p>
                    </div>
                    <div>
                        <img src={next} alt="nextjs_logo" className="w-[120px]" />
                        <p className="text-white text-sm font-bold uppercase text-center">next js</p>
                    </div>
                    <div>
                        <img src={node} alt="nodejs_logo" className="w-[120px]" />
                        <p className="text-white text-sm font-bold uppercase text-center">node js</p>
                    </div>
                    <div className="mr-[200px]">
                        <img src={mongo} alt="mongoDB_logo" className="w-[120px]" />
                        <p className="text-white text-sm font-bold uppercase text-center">mongodb</p>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Skills;