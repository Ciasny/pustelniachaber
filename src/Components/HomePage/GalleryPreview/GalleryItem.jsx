import React, { useState } from 'react'
import Slider from '../../Main/Slider'
import './gallery.css'


const GalleryItem = ({ title, imagesPaths, id, setPage }) => {

    const [width, setWidth] = useState(window.innerWidth)

    function renderSlider() {
        return (
            <Slider config={{ padding: '4rem', type: 'loop', gap: '0.5rem' }} className={'max-w-lg my-8'}>
                {
                    imagesPaths.map(imagePath => {

                        return (<img src={require(`src/Images/${imagePath}`)} alt='Kwiaty' onClick={() => setPage({ title: 'GalleryPage', data: title })} />)
                    })
                }
            </Slider>
        )
    }

    function renderNormal() {
        return (
            <div className='flex justify-center gap-2 my-6'>
                {
                    imagesPaths.map(imagePath => {

                        return (<img src={require(`src/Images/${imagePath}`)} alt='Kwiaty' className='max-w-xs' onClick={() => setPage({ title: 'GalleryPage', data: title })} />)
                    })
                }
            </div>
        )
    }

    window.onresize = () => {
        setWidth(window.innerWidth)
    }

    return (
        <div id={id} className='gallery-item'>
            <h3 className='text-4xl' onClick={() => setPage({ title: 'GalleryPage', data: title })}>{title}</h3>
            {width > 1024 ? renderNormal() : renderSlider()}
            <button className='blue-button' onClick={() => setPage({ title: 'GalleryPage', data: title })
            }>Zobacz Wszystkie</button>
        </div>
    )
}

export default GalleryItem
