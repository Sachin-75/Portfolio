import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import resume from '../assets/Sachin_Resume.pdf';
// import { HiArrowNarrowRight } from 'react-icons/hi';
import TypewriterComponent from 'typewriter-effect';

const Home = () => {

  return (
    //bg-[#0a192f]
    <div name='home' className='w-full h-screen bg-[#070e19]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {/* <p className='text-blue-600'>Hi, my name is</p> */}
        <div className='flex flex-col sm:flex-row items-left sm:text-5xl'>
          <p className='text-white sm:text-4xl text-2xl mx-2 bg-[#070e19]'>Hi, my name is </p>
          {/* <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            SACHIN KUMAVAT
          </h1> */}
          {/* text- [#dde2f2]*/}
          <h1 className='text-4xl sm:text-4xl font-bold text-transparent bg-clip-text bg-custom-gradient'>
            SACHIN KUMAVAT
          </h1>

        </div>

        {/* <h2 className='text-4xl sm:text-7xl font-bold text-[#5e7acf]'> */}
        {/* Aligning I'm and typewriter text */}
        {/* Aligning I'm and typewriter text */}
        <div className='flex flex-col sm:flex-row sm:items-center text-4xl sm:text-7xl font-bold text-transparent bg-clip-text bg-custom-gradient-h2'>
          <h2>
            I'm a&nbsp;
          </h2>
          <div className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
            <TypewriterComponent
              options={{
                strings: [' Full Stack Developer', ' Web Developer', ' Java Developer'],
                loop: true,
                autoStart: true,
              }}
            />
          </div>
        </div>




        {/* text-[#8892b0] py-4 max-w-[800px] */}
        <p className='text-[#dfe2ea] py-4 max-w-[700px] text-lg'>
          Welcome to my Full Stack Developer portfolio. I’m specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          {/* <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600' to='work'>
            View Work
            <span className='group-hover:rotate-90 duration-500'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button> */}
        </div>
        <div className='flex justify-left space-x-4 mt-4 sm:hidden'>
          <a
            className='w-[40px] h-[40px] flex justify-center items-center bg-blue-600 text-gray-300 rounded-full'
            href='https://www.linkedin.com/in/sachin-kumavat-50b83225b/' rel="noreferrer" target="_blank"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            className='w-[40px] h-[40px] flex justify-center items-center bg-[#333333] text-gray-300 rounded-full'
            href='https://github.com/Sachin-75/' rel="noreferrer" target="_blank"
          >
            <FaGithub size={20} />
          </a>
          <a
            className='w-[40px] h-[40px] flex justify-center items-center bg-[#6fc2b0] text-gray-300 rounded-full'
            href='/'
          >
            <HiOutlineMail size={20} />
          </a>
          <a
            className='w-[40px] h-[40px] flex justify-center items-center bg-[#565f69] text-gray-300 rounded-full'
            href={resume} rel="noreferrer"
          >
            <BsFillPersonLinesFill size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
