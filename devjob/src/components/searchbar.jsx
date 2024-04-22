
import React from 'react'

import search_icon from '../../assets/desktop/icon-search.svg'
import location_icon from '../../assets/desktop/icon-location.svg'

function Searchbar() {
  return (
    <div className='fixed top-[11vh] w-[70vw] z-[2]'>
          <div className=' bg-white flex flex-row  justify-between items-center w-full h-11 p-5'>

                <div className=' flex flex-row items-center w-[40%] border-r-2 border-gray-400 h-11'>
                    <img src={search_icon} alt="search" className=' w-[15px] h-[15px] pr-1'/>
                    <input type="text" className=' border-none outline-none w-[90%]' placeholder='Filter by title,companies,expartise...' />
                </div>

                <div className='flex flex-row items-center w-[30%] border-r-2  border-gray-400 h-11 px-3'>
                    <img src={location_icon} alt="search" className=' w-[15px] h-[15px] pr-1'/>
                    <input type="text" className=' border-none outline-none w-[90%]' placeholder='Filter by location...' />
                </div>

                <div className='flex flex-row justify-end w-[30%]'>
                    <input type="checkbox"  name='Fulltime' className=''/>
                    <label htmlFor="Fulltime" className=' mx-3'>Full Time</label>
                    <button type="button" className=' outline-none bg-violet rounded-sm h-7 w-fit px-5'>Search</button>
                </div>

          </div>
          <div className='w-full h-[5vh] bg-light-grey'>

          </div>
    </div>
  )
}

export default Searchbar