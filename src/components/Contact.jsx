import React from 'react'

const Contact = () => {
  return (
    //w-full h-screen bg-[#0a192f] flex justify-center items-center p-4
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4 bg-[#070e19]'>
        <form method='POST' action="https://formspree.io/f/xeqbazdn" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#2b3979] text-[#f4f4f4cc]'>Contact</p>
                {/* <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - vutukuri.kumar192st.niituniversity.in</p> */}
            </div>
            <input className='bg-[#f4f5f6] p-2 rounded-lg ' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#f2f2f4] rounded-lg' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#f4f4f6] p-2 rounded-lg' name="message" rows="10" placeholder='Message'></textarea>
            {/* text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center */}
            <button className='text-white border-2 hover:bg-[#f8786e] hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-md'>Send</button>
        </form>
    </div>
  )
}

export default Contact