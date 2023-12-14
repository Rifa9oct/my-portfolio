import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {

    return (
        <div className="pb-20 max-w-[1468px] mx-auto my-20" id='skills'>
            <h1 className="text-5xl font-extrabold text-white text-center">My <span className="text-orange-500">Skills</span></h1>
            <div className="mt-12 justify-center">
                <div className="pl-10 md:pl-40 lg:pl-0 flex flex-col lg:flex-row mx-auto justify-center lg:gap-32 text-white">
                    <div>
                        <div className="flex items-center mb-4">
                            <p className="text-xl w-[120px] font-bold mr-5">HTML</p>
                            <ProgressBar className="w-[200px] md:w-[300px] lg:w-[400px]" baseBgColor="#43366A" height={12} completed={90} bgColor="#F86F03" />
                        </div>
                        <div className="flex items-center mb-4">
                            <p className="text-xl w-[120px] font-bold mr-5">CSS</p>
                            <ProgressBar className="w-[200px] md:w-[300px] lg:w-[400px]" baseBgColor="#43366A" height={12} completed={85} bgColor="#F86F03" />
                        </div>
                        <div className="flex items-center mb-4">
                            <p className="text-xl w-[120px] font-bold mr-5">Tailwind CSS</p>
                            <ProgressBar className="w-[200px] md:w-[300px] lg:w-[400px]" baseBgColor="#43366A" height={12} completed={80} bgColor="#F86F03" />
                        </div>
                        <div className="flex items-center mb-4">
                            <p className="text-xl w-[120px] font-bold mr-5">Javascipt</p>
                            <ProgressBar className="w-[200px] md:w-[300px] lg:w-[400px]" baseBgColor="#43366A" height={12} completed={70} bgColor="#F86F03" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center mb-4">
                            <p className="text-xl w-[120px] font-bold mr-5">React Js</p>
                            <ProgressBar className="w-[200px] md:w-[300px] lg:w-[400px]" baseBgColor="#43366A" height={12} completed={80} bgColor="#F86F03" />
                        </div>
                        <div className="flex items-center mb-4">
                            <p className="text-xl w-[120px] font-bold mr-5">Mongo DB</p>
                            <ProgressBar className="w-[200px] md:w-[300px] lg:w-[400px]" baseBgColor="#43366A" height={12} completed={60} bgColor="#F86F03" />
                        </div>
                        <div className="flex items-center mb-4">
                            <p className="text-xl w-[120px] font-bold mr-5">Node Js</p>
                            <ProgressBar className="w-[200px] md:w-[300px] lg:w-[400px]" baseBgColor="#43366A" height={12} completed={75} bgColor="#F86F03" />
                        </div>
                        <div className="flex items-center">
                            <p className="text-xl w-[120px] font-bold mr-5">Bootstrap</p>
                            <ProgressBar className="w-[200px] md:w-[300px] lg:w-[400px]" baseBgColor="#43366A" height={12} completed={65} bgColor="#F86F03" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;