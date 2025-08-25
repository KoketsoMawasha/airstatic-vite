import React from 'react'
import { Link } from 'react-router-dom'
import Events from '../pages/Events'
import { NavLink } from 'react-router-dom'



function HeroBlog({ heading, img = 'https://cdn.midjourney.com/43fc0ccb-7a31-4615-98c9-0708ecb8bf1a/0_2.png', summary, link, redirect, buttonTitle }) {
    const InnerContent = (
        <div className='h-[100%] grid content-start'>
            <div>
                <p className='text-2xl font-heading text-white mb-2'>{heading}</p>
            </div>
            <div className="heroImg ">
                <img src={img} alt="Image of featured blog post" className="w-full max-w-sm mb-4 object-cover object-bottom max-h-[320px] rounded-md "   />
                <p className='text-stone-400 mb-4'>{summary}</p>
            </div>
            {buttonTitle && (<div className='self-end'>
                <p className='bg-sky-500 font-medium  rounded-md text-center py-2 p-3'>{buttonTitle}</p>
            </div>)}
        </div>
    );

    // Render content within a Link if link prop is provided
    if (link) {
        return (
            <div>
                <Link to={link} className='h-[100%] grid '>
                <div className='max-w-sm  h-[100%] mb-12 mx-auto'>
                    {InnerContent}
                </div>
            </Link>
            </div>
        );
    }
    
    // Render content within an anchor tag if redirect prop is provided
    if (redirect) {
        return (
            <a href={redirect} target="_blank" rel="noopener noreferrer" className='h-[100%] '>
                <div className='max-w-sm  mb-12 mx-auto'>
                    {InnerContent}
                </div>
            </a>
        );
    }

    // Default to rendering the content without a link or redirect
    return (
        <div className=' align-middle max-w-sm mb-12 mx-auto'>
            {InnerContent}
        </div>
    );
}


export default HeroBlog