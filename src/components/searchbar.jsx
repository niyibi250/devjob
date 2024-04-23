
import React, { useContext } from 'react'

import search_icon from '../../assets/desktop/icon-search.svg'
import location_icon from '../../assets/desktop/icon-location.svg'
import themecontex from '../contex/contex'

function Searchbar() {
  const {multiplesearchterm, setmultiple,locationsearchterm,setlocation,fulltimesearchterm, setfulltime}=useContext(themecontex)

  
  const multiplehandlechange = (event) => {
    setmultiple(event.target.value)
    console.log(multiplesearchterm)
  };

  const locationhandlechange = (event) => {
    setlocation(event.target.value)
    console.log(locationsearchterm)
  };

  const fulltimehandlechange = (event) => {
    setfulltime(event.target.checked)
    console.log(fulltimesearchterm)
  };
 
  return (
    <div className='fixed top-[11vh] w-[70vw] z-[2]'>
          <div className=' bg-white flex flex-row  justify-between items-center w-full h-11 p-5 dark:bg-very-dark-blue dark:text-white'>

                <div className=' flex flex-row items-center w-[40%] border-r-2 border-gray-400 h-11'>
                    <img src={search_icon} alt="search" className=' w-[15px] h-[15px] pr-1'/>
                    <input type="text" onChange={multiplehandlechange} className=' border-none outline-none w-[90%] dark:bg-very-dark-blue' placeholder='Filter by title,companies,expartise...' />
                </div>

                <div className='flex flex-row items-center w-[30%] border-r-2  border-gray-400 h-11 px-3'>
                    <img src={location_icon} alt="search" className=' w-[15px] h-[15px] pr-1'/>
                    <input type="text" onChange={locationhandlechange}  className=' border-none outline-none w-[90%] dark:bg-very-dark-blue' placeholder='Filter by location...' />
                </div>

                <div className='flex flex-row justify-end w-[30%]'>
                    <input type="checkbox" checked={fulltimesearchterm}  onChange={fulltimehandlechange} name='Fulltime' className=''/>
                    <label htmlFor="Fulltime" className=' mx-3'>Full Time</label>
                    <button type="button" className=' outline-none bg-violet rounded-sm h-7 w-fit px-5'>Search</button>
                </div>

          </div>
          <div className='w-full h-[5vh] bg-light-grey dark:bg-midnight'>

          </div>
    </div>
  )
}

export default Searchbar