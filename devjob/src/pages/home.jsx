import React from 'react'
import Searchbar from '../components/searchbar'
import Gridcontainer from '../components/gridcontainer'
import Button from '../components/button'

export default function Home() {
  return (
    <div className=' bg-light-grey flex flex-col justify-center items-center pb-[2%]'>
        <Searchbar></Searchbar>
        <Gridcontainer></Gridcontainer>
        <Button></Button>
    </div>
  )
}
