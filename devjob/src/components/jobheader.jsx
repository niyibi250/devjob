import React from 'react'

import image from '../../assets/logos/scoot.svg'
export default function Jobheader({selectedjob}) {
  
 const {company, logo, logoBackground, website} =selectedjob
  return (
    <div className='fixed top-[10%] z-[2] w-full flex justify-center items-center flex-col'>
        <div className='w-[55%] bg-white flex flex-row h-[100px] '>
          <div className=' w-[15%] flex flex-row justify-center items-center' style={{backgroundColor:logoBackground}}>
            <img src={logo} alt="image" />
          </div>
          <div className=" flex flex-row py-8 w-[85%] justify-between px-6">
            <div className="">
              <h1 className=' font-bold'>{company}</h1>
              <h1 className=" text-gray-500">{company}.com</h1>
            </div>
            <a href={website} className=" w-fit bg-light-grey h-full rounded-sm px-3 flex justify-center items-center text-violet">Company Site</a>
          </div>
        </div>
        <div className='w-[55%] h-[5vh] bg-light-grey'></div>
    </div>

  )
}


