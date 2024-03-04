import React from 'react'
import GalleryItem from './GalleryItem'
import './gallery.css'

const GalleryPreview = ({ setPage }) => {

    const images = {
        'Bukiety': ['Bukiety/img6.jpg', 'Bukiety/img4.jpg', 'Bukiety/img5.jpg'],
        'FlowerBoxy': ['Flowerbox/img1.jpg', 'Flowerbox/img2.jpg', 'Flowerbox/img3.jpg'],
        'Wianki': ['Wianki/img1.jpg', 'Wianki/img2.jpg', 'Wianki/img4.jpg'],
        'Wieńce': ['Wieńce/img1.jpg', 'Wieńce/img2.jpg', 'Wieńce/img3.jpg'],
        'Śluby': ['Śluby/img1.jpg', 'Śluby/img2.jpg', 'Śluby/img3.jpg']
    }




    return (
        <div id='gallery-preview' className='text-center'>
            <h2 className='text-5xl'>Galeria Kwiatów</h2>
            <ul className='flex justify-around text-xl px-5 my-5 gap-2 flex-wrap max-w-lg mx-auto md:text-2xl md:my-10'>
                <li className='clean-underline'><a href="#bukiety-slider">Bukiety</a></li>
                <li className='clean-underline'><a href="#floweboxy-slider">FlowerBoxy</a></li>
                <li className='clean-underline'><a href="#wianki-slider">Wianki</a></li>
                <li className='clean-underline'><a href="#wience-slider">Wieńce</a></li>
                <li className='clean-underline'><a href="#sluby-slider">Śluby</a></li>
            </ul>
            <GalleryItem setPage={setPage} imagesPaths={images['Bukiety']} title={'Bukiety'} id={'bukiety-slider'} />
            <hr />
            <GalleryItem setPage={setPage} imagesPaths={images['FlowerBoxy']} title={'FlowerBoxy'} id={'floweboxy-slider'} />
            <hr />
            <GalleryItem setPage={setPage} imagesPaths={images['Wianki']} title={'Wianki'} id={'wianki-slider'} />
            <hr />
            <GalleryItem setPage={setPage} imagesPaths={images['Wieńce']} title={'Wieńce Pogrzebowe'} id={'wience-slider'} />
            <hr />
            <GalleryItem setPage={setPage} imagesPaths={images['Śluby']} title={'Śluby'} id={'sluby-slider'} />

        </div>
    )
}

export default GalleryPreview