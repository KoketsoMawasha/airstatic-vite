import React from 'react'
import { Link } from 'react-router-dom'
import Events from '../pages/Events'

function HeroBlog() {
    return (
        <div className='max-w-sm flex flex-col justify-center align-middle self-center mb-12'>
            <p className='text-2xl font-md text-white mb-2'>Dates to <span className='text-sky-500 italic'>save</span></p>
            <div className="heroImg w-full">
                <img src="https://i.pinimg.com/564x/a3/6c/61/a36c614569ea39196c123f12b2ebddf8.jpg" alt="Image of a JDM car show" className="w-full max-w-sm mb-4" />
            </div>
            <p className='text-stone-400 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ipsam temporibus et quam! Laboriosam obcaecati iure suscipit vitae debitis, aperiam provident ipsam quaerat delectus fugit voluptatem nisi molestias distinctio hic.</p>
            <Link to={"/events"} element={<Events/>} className='text-yellow-500'>More information</Link>
            
        </div>
    )
}

export default HeroBlog