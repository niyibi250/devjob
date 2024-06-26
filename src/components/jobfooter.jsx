import React from 'react'

export default function Jobfooter({selectedjob}) {
  const {position}=selectedjob
    return (
    <div className=' flex flex-row justify-center items-center bg-white w-full dark:bg-very-dark-blue'>
        <div className='w-[55%] flex flex-row justify-between items-center py-3'>
            <div className=''>
                <h1 className="font-bold dark:text-white">{position}</h1>
                <h1 className=" text-grey">So Digitor Inc.</h1>
            </div>
            <a className=' bg-violet flex justify-center items-center rounded-sm py-2 px-5 text-white'>Apply Now</a>
        </div>
    </div>
  )
}
