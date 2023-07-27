import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import '../../node_modules/react-vertical-timeline-component/style.min.css';

function Resume() {
  return (
    <div className="bg-onyx font-Merriweather flex flex-col lg:flex-row lg:justify-center px-10 ">
      <div className="flex  lg:w-1/2 flex-col ">
        <div className="w-28 border-2 h-8 border-gray-500 rounded-lg mb-14 mt-10 flex justify-around items-center">
          <img src="account.png" className="w-5 h-6 " alt="" />
          <h2 className="text-white">Resume</h2>
        </div>
        <div className="flex  flex-col items-center">
        <h1 className=" text-5xl text-white">Education And <span className="text-noiceGreen">Experience</span></h1>
        <div className="w-full mt-10 h-screen  ">  
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '2px solid  rgb(33, 150, 243)' }}
    date="2023 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff',width:"40px",height:"40px", marginTop:"15px",marginLeft:"-21px"}} >
    <h3 className="vertical-timeline-element-title">Adda 52</h3>
    <h4 className="vertical-timeline-element-subtitle">Full stack Developer</h4>
    
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '2px solid  rgb(33, 150, 243)' }}
    date="2021 - 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff',width:"40px",height:"40px", marginTop:"15px",marginLeft:"-21px"}} >
    <h3 className="vertical-timeline-element-title">Masters of of Computer Application</h3>
    <h4 className="vertical-timeline-element-subtitle">DIbrugarh University</h4>
    {/* <h4 className="vertical-timeline-element-subtitle">Full stack Developer</h4> */}
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '2px solid  rgb(33, 150, 243)' }}
    date="6 Months"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff',width:"40px",height:"40px", marginTop:"15px",marginLeft:"-21px"}} >
    <h3 className="vertical-timeline-element-title">Full Stack Development</h3>
    <h4 className="vertical-timeline-element-subtitle">The 10x Academy</h4>
    {/* <h4 className="vertical-timeline-element-subtitle">Full stack Developer</h4> */}
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '2px solid  rgb(33, 150, 243)' }}
    date="2018 - 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff',width:"40px",height:"40px", marginTop:"15px",marginLeft:"-21px"}} >
    <h3 className="vertical-timeline-element-title">Bachelor of Computer Application</h3>
    <h4 className="vertical-timeline-element-subtitle">DIbrugarh University</h4>
    
  </VerticalTimelineElement>
  </VerticalTimeline>
  </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
