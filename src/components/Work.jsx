import React from 'react';
import { data } from "../data/data.js";
import githubLogo from '../assets/github.png'; // Adjust the path to the GitHub logo

const Work = () => {

    // projects file
    const project = data;
  
    return (
        <div name='work' className='pt-20 md:pt-5 w-full md:h-screen text-gray-300 bg-[#070e19]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 mt-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#2b3979]'>
                        Work
                    </p>
                    {/* <p className='py-6'>// Check out some of my recent work</p> */}
                </div>

                {/* container for projects */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 cursor-pointer">
                    
                    {/* Grid Item */}
                    {project.map((item, index) => (
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${item.image})` }}
                            className="relative shadow-lg shadow-[#415a7b] group container rounded-md 
                                      flex justify-center text-center items-center mx-auto content-div"
                        >
                            {/* Hover effect for images */}
                            <div className="opacity-0 group-hover:opacity-100 cursor-pointer bg-[#191c33] absolute inset-0 rounded-md flex flex-col justify-center items-center transition-opacity duration-300">
                                <span className="text-2xl font-bold text-white tracking-wider">
                                    {item.name}
                                </span>
                                <div className="pt-4">
                                    <img src={githubLogo} alt="GitHub Logo" className="w-8 h-8 mx-auto"/>
                                </div>
                                <div className="pt-8 text-center">
                                    {/* eslint-disable-next-line */}
                                    <a href={item.github} target="_blank">
                                        <button
                                            className="text-center rounded-sm px-4 py-1 m-2
                                                       bg-white text-gray-700 font-bold text-lg cursor-pointer"
                                        >
                                            Code
                                        </button>
                                    </a>
                                     {/* <a href={item.live} target="_blank">
                                          <button className="text-center rounded-lg px-4 py-3 m-2
                                          bg-white text-gray-700 font-bold text-lg" >
                                            Live
                                          </button>
                                      </a>  */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;








// <div className="pt-4">
//   <img src={githubLogo} alt="GitHub Logo" className="w-8 h-8 mx-auto"/>
// </div>






// import React from 'react';
// import { data } from "../data/data.js";
// import githubLogo from '../assets/github.png'; 

// const Work = () => {

//     // projects file
//     const project = data;
//     //setProject(data);
  
//   return (
//     //w-full md:h-screen text-gray-300 bg-[#0a192f]
//     <div name='work' className='w-full md:h-screen text-gray-300 bg-[#070e19]'>
//       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
//         <div className='pb-8 mt-8'>
//           <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
//             Work
//           </p>
//           {/* <p className='py-6'>// Check out some of my recent work</p> */}
//         </div>

// {/* container for projects */}
// <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 cursor-pointer">
          
//           {/* Gird Item */}
//           {project.map((item, index) => (
//   <div
//     key={index}
//     style={{ backgroundImage: `url(${item.image})` }}
//     className="shadow-lg shadow-[#415a7b] group container rounded-md 
//               flex justify-center text-center items-center mx-auto content-div "
//   >
//     {/* Hover effect for images */}
//     <div className="opacity-0 group-hover:opacity-100 cursor-pointer">
//       <span className="text-2xl font bold text-white tracking-wider ">
//         {item.name}
//       </span>
//       <div className="pt-8 text-center ">
//         {/* eslint-disable-next-line */}
//         <a href={item.github} target="_blank">
//           <button
//             className="text-center rounded-lg px-4 py-3 m-2
//                        bg-white text-gray-700 font-bold text-lg cursor-pointer"
//           >
//             Code
//           </button>
//         </a>
//         {/* eslint-disable-next-line */}
//         {/* <a href={item.live} target="_blank">
//           <button
//             className="text-center rounded-lg px-4 py-3 m-2
//                        bg-white text-gray-700 font-bold text-lg"
//           >
//             Live
//           </button>
//         </a> */}
//       </div>
//     </div>
//   </div>
// ))}


// </div>
//       </div>
//     </div>
//   );
// };

// export default Work;
