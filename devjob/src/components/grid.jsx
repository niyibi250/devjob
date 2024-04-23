import React from 'react'

import {Link} from 'react-router-dom'
import image from '../../assets/logos/scoot.svg'

export default function Grid({id,company,logo,logobackground,position,postedAt,contract,location}) {

    return (
    
    <Link to={`/${id}`}>   
        <div className='flex flex-col justify-between items-start bg-white px-6 py-6 relative min-h-[198px] dark:bg-very-dark-blue'>
            <div className='w-[30px] h-[30px] rounded-lg p-1  flex justify-center items-center absolute -top-[2vh]' style={{background:logobackground}}>
                <img src={logo} alt=" " className=''/>
            </div>
            <div className=" inline-block text-dark-grey">
                <h1 className=' inline'>{postedAt}</h1>
                <h1 className=' inline'>-</h1>
                <h1 className=' inline'>{contract}</h1>
            </div>
            <h1 className=" font-bold dark:text-white">{position}</h1>
            <h1 className=" text-dark-grey">{company}</h1>
            <a href="" className=" text-violet pt-[30px]">{location}</a>
        </div>
    </Link> 
  )
}
