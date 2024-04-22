import React from 'react'

import Jobheader from '../components/jobheader'

import Jobdetails from '../components/jobdetails'

import jobdata from '../components/data.json'

import {useParams} from 'react-router-dom'
import Jobfooter from '../components/jobfooter'

export default function Job() {
    const {id}=useParams()
    const selectedjob=jobdata.find((job)=>job.id == id)

    return (
    <div className=' bg-light-grey flex flex-col justify-center items-center pb-[2%]'>
        <Jobheader selectedjob={selectedjob} ></Jobheader>
        <Jobdetails selectedjob={selectedjob}></Jobdetails>
        <Jobfooter selectedjob={selectedjob}></Jobfooter>
    </div>
  )
}
