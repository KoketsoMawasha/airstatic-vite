import React, { useEffect, useState } from 'react'
import TopNav from '../components/TopNav'
import HeroBlog from '../components/HeroBlog'
import Footer from '../components/Footer'
import supabase from '../services/supabase'
import VersusSpotlight from '../components/VersusSpotlight'


function Home() {
  const [homePosts, setHomePosts] = useState([])
  const [loading, setLoading] = useState(true)

  const getHomePosts = async ()=>{
      let {data, supabaseErr} = await supabase.from('featuredBlogs').select()
  
      if(supabaseErr){throw new Error(supabaseErr)}
      if(data){
        setHomePosts(data)
        setLoading(!loading)
      }
  }

  useEffect(()=>{
    getHomePosts()
  },[])

  return (
  <div className='bg-neutral-900 w-screen min-h-screen flex flex-col'>
    <TopNav />
    <div className='px-4 grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 md:gap-y-6 items-start mt-6 max-w-7xl mx-auto'>
      {/* <VersusSpotlight /> */}
      {loading &&
        <div className='text-center grid items-center justify-center p-8'>
          <p className='text-white/70'>Loading...<span className="text-2xl">💐😁</span></p>
        </div>
      }
      {homePosts.sort((a,b)=> Number(a.order) - Number(b.order)).map((post)=>{
        if(post.active){
          return (
            <div className="h-[100%]">
              <HeroBlog key={post.id} heading={post.heading} img={post.img} summary={post.summary} link={post.linkTo} redirect={post.redirect} buttonTitle={post.ctaTitle}/>
            </div>
          )
        }
      })}
    </div>
    {!loading && <Footer />}
  </div>
  )
}



export default Home