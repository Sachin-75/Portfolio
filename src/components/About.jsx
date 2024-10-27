import React from 'react';

const About = () => {
  return (
    // w-full h-screen bg-[#0a192f] text-gray-300
    <div name='about' className='w-full h-screen bg-[#070e19] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#2b3979]'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-1 gap-8 px-4'>
          {/* <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Sachin Kumavat, nice to meet you. Please take a look around.</p>
          </div> */}
          <hr></hr>
          <div className='bg-[#1c1c26] rounded-md backdrop-blur-md px-5 flex flex-col '>
            <p className=' text-lg mb-4'>
              Hello! I'm Sachin Kumavat, a passionate software developer with a strong foundation in Java, including advanced concepts like Hibernate and Servlet & JSP. My journey in programming began with a fascination for how things work behind the scenes, which led me to explore both frontend and backend web technologies.
              
            </p>
            {/* <p className='text-lg mb-4'>
              Over the years, I've honed my skills in building efficient and user-friendly web applications. I love tackling complex problems and creating solutions that make a real impact. Whether it’s crafting dynamic web experiences or designing robust backend systems, I’m always excited to take on new challenges.  
            </p> */}
            <p className='text-lg mb-4'>
              Over the years, I've honed my skills in building efficient and user-friendly web applications. Whether it’s crafting dynamic web experiences or designing robust backend systems, I’m always excited to take on new challenges.  
            </p>
            {/* <p className='text-lg'>
              If you're passionate about web development, problem-solving, or just curious to chat about technology, feel free to reach out
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;




/*import React from 'react';

const About = () => {
  return (
    // w-full h-screen bg-[#0a192f] text-gray-300
    <div name='about' className='w-full h-screen bg-[#070e19] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Sachin Kumavat, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;*/





