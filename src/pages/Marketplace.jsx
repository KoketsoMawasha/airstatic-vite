import React from 'react'
import MarketplaceItem from '../components/marketplace/MarketplaceItem'
import { useEffect,useState } from 'react'
import TopNav from '../components/TopNav'
import supabase from '../services/supabase'

function Marketplace() {
  const [products, setProducts] = useState([])

  const getProducts = async ()=>{
    let {data, supabaseErr} = await supabase.from('marketplace').select()

    if(supabaseErr){throw new Error(supabaseErr)}
    if(data){
      setProducts(data)
    }
  }

  useEffect(()=>{
    getProducts()
  },[])
  
  return (
    <div className='bg-neutral-900 w-[100vw] min-h-screen flex flex-col'>
      <TopNav/>
      {products &&  <div className='grid items-center justify-center marketplace-items max-w-lg mx-auto'>
        {products.map((product)=>{
          console.log(product)
          return (
              <MarketplaceItem key={product.id} name={product.name} desc={product.description} location={product.location} price={product.price} gallery={product.gallery} contact={product.sellerContact}/>
        )
        })}
      </div>}
      {/* Empty state  */}
      {!products &&
      <div className='text-center grid items-center justify-center p-8'>
        <p><span className="text-white/70">Nothing available... for now.  <br /> <span className="font-heading">Check back soon for updates!</span> <br /></span> <span className="text-2xl">💐😁</span></p>
      </div>
      }

    </div>
  )
}

export default Marketplace