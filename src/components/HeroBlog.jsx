import React from 'react'
import { Link } from 'react-router-dom'
import Events from '../pages/Events'
import { NavLink } from 'react-router-dom'

function HeroBlog({ heading, img = 'https://cdn.midjourney.com/43fc0ccb-7a31-4615-98c9-0708ecb8bf1a/0_2.png', summary, link, redirect, buttonTitle }) {
    const InnerContent = (
        <>
            <p className='text-2xl font-heading text-white mb-2'>{heading}</p>
            <div className="heroImg w-full">
                <img src={img} alt="Image of a JDM car show" className="w-full max-w-sm mb-4" />
            </div>
            <p className='text-stone-400 mb-4'>{summary}</p>
            {buttonTitle && (<p className='text-yellow-500 border border-yellow-500 rounded-md w-fit p-2'>{buttonTitle}</p>)}
        </>
    );

    // Render content within a Link if link prop is provided
    if (link) {
        return (
            <Link to={link}>
                <div className='max-w-sm flex flex-col justify-center align-middle self-center mb-12 mx-auto'>
                    {InnerContent}
                </div>
            </Link>
        );
    }
    
    // Render content within an anchor tag if redirect prop is provided
    if (redirect) {
        return (
            <a href={redirect} target="_blank" rel="noopener noreferrer">
                <div className='max-w-sm flex flex-col justify-center align-middle self-center mb-12 mx-auto'>
                    {InnerContent}
                </div>
            </a>
        );
    }

    // Default to rendering the content without a link or redirect
    return (
        <div className='max-w-sm flex flex-col justify-center align-middle self-center mb-12 mx-auto'>
            {InnerContent}
        </div>
    );
}


export default HeroBlog