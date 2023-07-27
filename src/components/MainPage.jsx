import React,{useRef} from 'react'
import Landing from './Landing'
import About from './About'
import Resume from './Resume';
import Skills from './Skills';

export default function MainPage() {
  const aboutRef = useRef(null);
  const homeRef=useRef(null)
  const resumeRef=useRef(null)
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHome=()=>{
    homeRef.current.scrollIntoView({behavior:"smooth"})
  }
  const scrollToResume=()=>{
    resumeRef.current.scrollIntoView({behavior:"smooth"})
  }

  return (
    <>
    <div ref={homeRef}>
      <Landing 
        props={{scrollToAbout,scrollToHome,scrollToResume}}
      />
      </div>
      <div ref={aboutRef}>
      <About/>
      </div>
      <div ref={resumeRef}>
      <Resume/>
      </div>
      <div >
      <Skills/>
      </div>
    </>
  )
}
