import React from 'react'
import TopNav from '../components/TopNav'
import HeroBlog from '../components/HeroBlog'

function Home() {
  return (
    <div className='bg-neutral-900 w-screen min-h-screen flex flex-col'>
        <TopNav />
        <div className='px-4 flex flex-col mt-4'>
        <HeroBlog/>
        <HeroBlog/>
        <HeroBlog/>
        </div>
    </div>
  )
}



export default Home