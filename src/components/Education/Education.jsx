import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import bsc from "../../assets/bsc.png"
import hsc from "../../assets/hsc.png"
import ssc from "../../assets/ssc.png"

const Education = () => {
    return (
        <div className="max-w-[1468px] mx-auto" id="education">
            < h1 className="text-5xl font-extrabold text-white text-center" >Education</h1 >
            <div className='mt-12 p-5 md:w-[500px] lg:w-[1000px] mx-auto'>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        contentStyle={{ background: '#f97316', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                        date="2021- present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<img src={bsc} />}
                    >
                        <h3 className="font-bold ">Bsc (Hons)</h3>
                        <h4 className="text-xl font-bold ">Computer Science and Engineering</h4>
                        <h3 className='font-bold '>Tejgaon College, Dhaka, Bangladesh</h3>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        contentStyle={{ background: '#f97316', color: '#fff' }}
                        date="2018 - 2019"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<img src={hsc} />}
                    >
                        <h3 className="font-bold ">HSC</h3>
                        <h4 className="text-xl font-bold ">Higher Secondary Certificate</h4>
                        <h3 className='font-bold '>Police Lines School and College, Rangpur</h3>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        contentStyle={{ background: '#f97316', color: '#fff' }}
                        date="2016 - 2017"
                        iconStyle={{ background: 'rgb(1, 210, 1)', color: '#fff' }}
                        icon={<img className='rounded-[] mt-1 p-[2px] w-[84%] mx-auto' src={ssc} />}
                    >
                        <h3 className="font-bold ">SSC</h3>
                        <h4 className="text-xl font-bold ">Secondary School Certificate</h4>
                        <h3 className='font-bold '>Govt Girls High School, Rangpur</h3>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Education;