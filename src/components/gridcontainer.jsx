import React,{useContext} from 'react'
import Grid from './grid'

import data from './data.json'
import themecontex from '../contex/contex'
import jobdata from './data.json'

export default function Gridcontainer() {

  const {multiplesearchterm, locationsearchterm, fulltimesearchterm}=useContext(themecontex)
  
  const filtedData=jobdata.filter((job)=>{
    return(
     (job.company.toLowerCase().includes(multiplesearchterm.toLowerCase()) || job.position.toLowerCase().includes(multiplesearchterm.toLowerCase())) &&
     (job.location.toLowerCase().includes(locationsearchterm.toLowerCase()))
    )
  })
 
    return (
    <div className=' w-[87%] grid grid-cols-4 grid-flow-row gap-x-3 gap-y-10 mb-8'>
       
      {filtedData.map((job)=><Grid  id={job.id} company={job.company} logo={job.logo} logobackground={job.logoBackground} position={job.position} postedAt={job.postedAt} contract={job.contract} location={job.location}></Grid>)}

    </div>
  )
}
