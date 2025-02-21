import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Mongo from '../assets/mongo.png';
import MySql from '../assets/mysql.png';
import C_plus from '../assets/c_plus.png';
import java from '../assets/java.png'

import '../assets/Skills.css';

const Skills = () => {
  return ( 
    //skillcontainer w-full h-screen bg-[#0a192f] text-gray-300
    
    <div name='skills' className='pt-20 md:pt-5 skillcontainer w-full h-screen bg-[#070e19] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#2b3979] '>Skills</p>
              {/* <p className='py-4'>// These are the technologies I've worked with</p> */}
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
          {/* html html shadow-md shadow-[#cbcad4]  bg-[#111b2b] */}
              <div className='html shadow-md shadow-[#cbcad4]  bg-[#111b2b] pt-3'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='html shadow-md shadow-[#cbcad4]  bg-[#111b2b] pt-3'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='html shadow-md shadow-[#cbcad4]  bg-[#111b2b] pt-3'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='html shadow-md shadow-[#cbcad4]  bg-[#111b2b] pt-3'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='html shadow-md shadow-[#cbcad4]  bg-[#111b2b]'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='html shadow-md shadow-[#cbcad4]  bg-[#111b2b]'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='html shadow-md shadow-[#cbcad4]  bg-[#111b2b]'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='html shadow-md shadow-[#cbcad4]  bg-[#111b2b]'>
                  <img className='w-20 mx-auto' src={java} alt="HTML icon" />
                  <p className='my-4'>JAVA</p>
              </div>
              <div className='html shadow-md shadow-[#cbcad4]  bg-[#111b2b]'>
                  <img className='w-20 mx-auto' src={C_plus} alt="HTML icon" />
                  <p className='my-4'>C++</p>
              </div>
              <div className='html shadow-md shadow-[#cbcad4]  bg-[#111b2b]'>
                  <img className='w-20 mx-auto' src={MySql} alt="HTML icon" />
                  <p className='my-4'>MySql</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
