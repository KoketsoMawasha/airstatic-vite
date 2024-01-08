import React, { useEffect, useState } from 'react'

function VersusSpotlight() {
    const [leftVote, setLeftVote] = useState(250)
    const [rightVote, setRightVote] = useState(189)
    const [leftVoted, setLeftVoted] = useState(false)
    const [rightVoted, setRightVoted] = useState(false)
    const [voted, setVoted] = useState(false)
    const [rightClass, setRightClass] = useState('')
    const [leftClass, setLeftClass] = useState('')

    const registerVote = (e) => {
        const target = e.target
        if (target.id === 'leftVoteBtn') {
            setLeftVote(leftVote + 1);
            setLeftVoted(true)
            setLeftClass('voted-button')
            // push e.target.classList array appearance to reflect vote  
        }else if (target.id === 'rightVoteBtn') {
            setRightVote(rightVote + 1);
            setRightVoted(true)
            setRightClass('voted-button')
        }
        setVoted(true);
    };

  return (
    <div className="mx-auto w-max-sm">
        <div className="w-full max-w-sm mx-auto copy">
        <p className="text-2xl font-heading text-white mb-2">Choose your Fighter!</p>
        <p className="text-lg text-neutral-300 font-extralight mb-6">Two neck-breaking polos on the stance war stage. Both have it all sleek rims, clean paintwork, detailing and unique impressions...but there can only be one winner. Throw in your vote and rally for the ride that speaks to your stance game. The winner will stay until facing a new challenger next week. 
        </p>
        </div>
        <div className='w-full max-w-sm flex flex-col justify-between items-center mb-12 mx-auto'>
            <div className="mb-8">
                <img src="https://vxgjbmpylrvarxxmosxd.supabase.co/storage/v1/object/public/Versus/January/KTL%20Polo%20Vs%20TT%20Polo-2.png?t=2024-01-06T17%3A00%3A44.044Z" alt="White Vw Polo Vs Red VW Polo" />
            </div>
            <div className="w-full grid grid-cols-2 gap-8">
                <div className="vote-1">
                    <p className='text-center mb-2 text-yellow-500'>{leftVote} Votes</p>
                    <button id='leftVoteBtn' disabled={voted} onClick={registerVote} className={`w-full px-4 py-2 text-white font-semibold border bg-transparent border-neutral-500 rounded shadow-md hover:shadow-lg active-red-500  focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-80 transition duration-250 ${leftClass}`}> {leftVoted? 'Voted' : 'Vote'} for TT</button>
                </div>
                <div className="vote-2">
                    <p className='text-center mb-2 text-yellow-500'>{rightVote} Votes</p>
                    <button id='rightVoteBtn' disabled={voted} onClick={registerVote} className={`w-full px-4 py-2 text-white font-semibold border bg-transparent border-neutral-500 rounded shadow-md hover:shadow-lg  active:border-red-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-80 transition duration-250 ${rightClass}`}> {rightVoted? 'Voted' : 'Vote'} for KTL</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VersusSpotlight