import React from 'react'
import { RainbowButton } from './ui/rainbow-button'
import { Star } from 'lucide-react'
import Link from 'next/link'

function Footer() {
    return (
        <div className='flex justify-center items-center '>

            <div>
                <RainbowButton >
                    <Link
                        href='https://github.com/mshra/PlatonicCode'
                        target='__blank'
                        className='flex justify-center items-center gap-2 font-semibold'>
                        <Star size={20} className='group-hover:animate-spin' /> Give us a Star on Github
                    </Link>
                </RainbowButton>
            </div>
        </div>
    )
}

export default Footer
