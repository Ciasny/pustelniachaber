import React, { useRef } from 'react'
import './kwiatomaty.css'

const Kwiatomat = ({ img, title, content, mapLink }) => {

    const contentRef = useRef(null)

    function toogleContentVisibility() {
        contentRef.current.classList.toggle('lower-opacity')
    }

    return (
        <div className='grid grid-cols-1 grid-rows-1 rounded-xl overflow-hidden ' onClick={toogleContentVisibility}>
            <img src={img} alt="Zdjęcie Kwiatomatu" className='row-start-1 col-start-1' />
            <div ref={contentRef} className='row-start-1 col-start-1 p-1 mt-auto bg-white-transparent text-center min-h-[50%] transition duration-500 flex justify-between flex-col items-center lg:min-h-[35%]'>
                <h3 className='text-xl'>{title}</h3>
                <p className='text-lg'>{content}</p>
                <a href={mapLink} target='_blank' rel='noreferrer' className='blue-button'>Zobacz na mapie</a>
            </div>
        </div>
    )
}

export default Kwiatomat