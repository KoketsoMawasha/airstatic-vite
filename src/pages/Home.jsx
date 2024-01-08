import React, { useEffect, useState } from 'react'
import TopNav from '../components/TopNav'
import HeroBlog from '../components/HeroBlog'
import Footer from '../components/Footer'
import supabase from '../services/supabase'
import VersusSpotlight from '../components/VersusSpotlight'


function Home() {
  const [homePosts, setHomePosts] = useState([])

  const getHomePosts = async ()=>{
      let {data, supabaseErr} = await supabase.from('featuredBlogs').select()
  
      if(supabaseErr){throw new Error(supabaseErr)}
      if(data){
        setHomePosts(data)
      }
  }

  useEffect(()=>{
    getHomePosts()
  },[])

  return (
    <div className='bg-neutral-900 w-screen min-h-screen flex flex-col'>
        <TopNav />
        <div className='px-4 flex flex-col mt-6 mb-8'>
          <VersusSpotlight />
        {homePosts.map((post)=>{
          if(post.active){
            return (
              <HeroBlog key={post.id} heading={post.heading} img={post.img} summary={post.summary} link={post.linkTo}/>
              )
          }
        })}
        </div>
        <Footer />
    </div>
  )
}



export default Home