import React from 'react'
import { Link } from 'react-router-dom'
import Events from '../pages/Events'
import { NavLink } from 'react-router-dom'

function HeroBlog({heading, img ='https://cdn.midjourney.com/43fc0ccb-7a31-4615-98c9-0708ecb8bf1a/0_2.png', summary, link = '#'}) {
    return (
        <Link to={link}>
            <div className='max-w-sm flex flex-col justify-center align-middle self-center mb-12 mx-auto'>
                <p className='text-2xl font-heading text-white mb-2'>{heading}</p>
                <div className="heroImg w-full">
                    <img src={img} alt="Image of a JDM car show" className="w-full max-w-sm mb-4" />
                </div>
                <p className='text-stone-400 mb-4'>{summary}</p>
                <p to={"/events"} className='text-yellow-500 border border-yellow-500 rounded-md w-fit p-2'>More information</p>
                
            </div>
        </Link>
    )
}

export default HeroBlog