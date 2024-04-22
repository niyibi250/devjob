import React from 'react'
import Grid from './grid'

import data from './data.json'


export default function Gridcontainer() {
  
    return (
    <div className=' w-[87%] grid grid-cols-4 grid-flow-row gap-x-3 gap-y-10 mb-8'>
       
      {data.map((job)=><Grid  id={job.id} company={job.company} logo={job.logo} logobackground={job.logoBackground} position={job.position} postedAt={job.postedAt} contract={job.contract} location={job.location}></Grid>)}

    </div>
  )
}
