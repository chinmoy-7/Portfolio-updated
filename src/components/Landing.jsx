import React from 'react'

export default function Landing({props}) {
  return (
    <div className='bg-onyx h-screen font-Merriweather flex flex-col lg:flex-row'>
    <div className=' lg:w-2/6  xl:w-2/6 h-4/6 sm:h-full sm:items-start justify-center flex flex-col sm:flex-row items-center   w-full'>
        <div className='h-5/6  w-3/4 mt-3 flex flex-col justify-evenly rounded-xl bg-lightOnyx'>
            <div className='h-1/5 flex justify-around items-center '>
                <h2 className='text-white font-semibold text-1xl sm:text-2xl'>Chinmoy<br/>Dehingia</h2>
                <h3 className='text-white text-sm'>Full Stack <br/>Developer</h3>
            </div>
            <div className='h-2/3 flex flex-col items-center justify-around '>
                <img src="./ph.jpeg" className='h-3/6 rounded-lg' alt="" />
                <p className='text-white text-sm py-2 lg:text-lg'>chinmoy.dehingia@gmail.com</p>
                <p className='text-white text-3xl'>Base in Delhi</p>
                <div className='flex'>
                    <a href=''><img src="./link.png" alt="" className='cursor-pointer hover:bg-white ease-in duration-100 rounded-md'/></a>
                    <a href=""><img src="./insta.png" alt="" className='cursor-pointer hover:bg-white ease-in duration-100 rounded-md'/></a>
                    <a href=""><img src="./git.png" alt="" className='cursor-pointer hover:bg-white ease-in duration-100 rounded-md'/></a>
                </div>
                {/* <div className='w-3/6 h-18 py-10'> */}
                    <button className='bg-noiceGreen w-3/6 h-10  m-6 hover:bg-white hover:ease-in duration-200 rounded-full'>Hire me!</button>
                {/* </div> */}
            </div>
        </div>
    </div>
    
        <div className='text-white  lg:w-2/6 xl:w-4/6 h-1/3 sm:h-full justify-around flex flex-col sm:flex-col items-center
         sm w-full  lg:justify-start lg:items-start lg:py-32 '>
            <h2 className='text-2xl lg:text-6xl'>Say Hi from <span className='text-noiceGreen tracking-wide'>Chinmoy,</span><br/>Full Stack Developer</h2>
            <p className='text-1xl lg:py-12 text-gray-500 lg:px-0 px-10 text-justify'>Welcome to my portfolio! As an innovative MERN developer, I craft seamless web applications<br className='hidden lg:block'/>  and digital experiences with frontend and backend brilliance.    </p>
            <div className='flex justify-around w-1/2'>
            <h1 className='lg:text-noiceGreen  lg:my-32 lg:text-6xl'>1+
                <p className='text-gray-500 text-sm '>Years of<br/> experience</p>
            </h1>
            <h1 className='lg:text-noiceGreen lg:my-32  lg:mx-32 lg:text-6xl '>10+
                <p className='text-gray-500 text-sm '>Project<br/> Completed</p>
            </h1>
            </div>
        </div>
        <div className='text-white hidden lg:w-1/6 xl:w-1/6 h-4/6 sm:h-full justify-center lg:flex flex-col sm:flex-row items-center sm w-full fixed right-0'>
            <div className=' h-1/3 w-1/6 rounded-md border-2 border-gray-500 fill-white flex flex-col justify-around items-center '>
                <img src="home.png" onClick={props.scrollToHome} className="w-5/6 cursor-pointer hover:rounded-md hover:bg-gray-50"alt="" />
                <img onClick={props.scrollToAbout} src="account.png "  className="w-5/6 cursor-pointer hover:rounded-md hover:bg-gray-50" alt="" />
                <img onClick={props.scrollToResume} src="resume.png "  className="w-5/6 cursor-pointer hover:rounded-md hover:bg-gray-50" alt="" />
                <img onClick={props.scrollToSkill} src="service.png "  className="w-5/6 cursor-pointer hover:rounded-md hover:bg-gray-50" alt="" />
                <img src="skills.png "  className="w-5/6 cursor-pointer hover:rounded-md hover:bg-gray-50" alt="" />
            </div>
        </div>
</div>
  )
}
