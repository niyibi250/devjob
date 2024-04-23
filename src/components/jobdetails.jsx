import React from 'react'

export default function Jobdetails({selectedjob}) {
  
  const {position,description,location,postedAt,contract,apply,requirements,role,} = selectedjob
  return (
      <div className=" w-[55%] bg-white p-12 mb-14 dark:bg-very-dark-blue dark:text-grey">
        {/* job info header */}
        <div className=" flex flex-row items-center justify-between mb-10">
          <div className="">
            <p className=" text-grey">
              {postedAt} - {contract}
            </p>
            <h1 className=' font-bold text-2xl dark:text-white'>{position}</h1>
            <h4 className=' text-violet'>{location}</h4>
          </div>
          <a
            href={apply}
            className=" bg-violet rounded-sm px-4 py-1.5 flex items-center justify-center text-white"
            target="_blank"
            rel="noreferrer"
            aria-label="button"
          >
            apply now
          </a>
        </div>
  
        {/* Job description */}
        <p className="">{description}</p>
  
        {/* Requirements */}
        <div className=" my-10">
          <h3 className=' font-bold mb-6 dark:text-white'>Requirements</h3>
          <p className=" mb-6">{requirements.content}</p>
          <ul className=" list-disc list-inside">
            {requirements.items.map((item, index) => {
              return <li className='' key={index}>{item}</li>;
            })}
          </ul>
        </div>
  
        {/* Role / Tasks */}
        <div className=" my-10">
          <h3 className=' font-bold mb-6 dark:text-white'>What You Will Do</h3>
          <p className=" mb-6">{role.content}</p>
          <ol className=" list-decimal list-inside">
            {role.items.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ol>
        </div>
      </div>
  )
}
