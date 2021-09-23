import React from 'react'
import Image from 'next/image'

function MediumCard({img, title}) {
    return (
        <div className="cursor-pointer hover:scale-105 transform transistion duration-300 ease-out">
            <div className="relative h-80 w-80">
            <Image 
            src={img}
            title={title}
            layout="fill"
            className="rounded-lg"
            />
            </div>
            <h3 className="text-2xl mt-3">{title}</h3>
        </div>
    )
}

export default MediumCard