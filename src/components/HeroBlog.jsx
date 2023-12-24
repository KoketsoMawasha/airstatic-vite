import React from 'react'
import { Link } from 'react-router-dom'
import Events from '../pages/Events'

function HeroBlog() {
    return (
        <div className='max-w-sm flex flex-col justify-center align-middle self-center mb-12'>
            <p className='text-xl font-light text-white mb-2'>Dates to <span className=''>save</span></p>
            <div className="heroImg w-full">
                <img src="https://i.pinimg.com/564x/c5/44/c5/c544c513803fb71a3b26d6244001c676.jpg" alt="Image of a JDM car show" className="w-full max-w-sm mb-4" />
            </div>
            <p className='text-stone-300 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ipsam temporibus et quam! Laboriosam obcaecati iure suscipit vitae debitis, aperiam provident ipsam quaerat delectus fugit voluptatem nisi molestias distinctio hic.</p>
            <Link to={"/events"} element={<Events/>} className='text-yellow-500'>More information</Link>
            
        </div>
    )
}

export default HeroBlog