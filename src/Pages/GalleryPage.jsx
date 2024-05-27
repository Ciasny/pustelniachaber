import React, { useLayoutEffect, useState } from 'react';
import uniqid from 'uniqid';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const GalleryPage = ({ setPage, currentPage }) => {


    const images = {
        'Bukiety': mapPaths('Bukiety', 8),
        'FlowerBoxy': mapPaths('Flowerbox', 5),
        'Wianki': mapPaths('Wianki', 11),
        'Wieńce Pogrzebowe': mapPaths('Wieńce', 4),
        'Śluby': mapPaths('Śluby', 8)
    }

    const [width, setWidth] = useState(window.innerWidth)

    useGSAP(() => {
        gsap.from('.image-appear1', { opacity: 0, duration: 1, stagger: 0.5 })
        gsap.from('.image-appear2', { opacity: 0, duration: 1, stagger: 0.5 })

    })

    function goBack() {
        setPage({ title: 'HomePage', data: '' })
        setTimeout(() => {
            const item = document.getElementById('gallery-preview')
            item.scrollIntoView()
        }, 1)
        clearTimeout(() => {
            const item = document.getElementById('gallery-preview')
            item.scrollIntoView()
        }, 1)

    }

    function mapPaths(prefix, count) {
        let res = []
        for (let i = 0; i < count; i++) {
            res.push(`${prefix}/img${i + 1}.jpg`)
        }
        return res
    }

    function mapImages(images, chunk) {
        return images.map(imagePath => {
            return <img key={uniqid()} src={require(`src/Images/${imagePath}`)} alt={currentPage.data} className={'image-appear' + chunk} />
        })
    }

    function renderGalleryMenu(items) {
        return items.map(flowerTypeData => {
            if (flowerTypeData === currentPage.data) {
                return (
                    <li key={uniqid()}><button className='text-blue-600 transition duration-300 clean-underline'>{flowerTypeData}</button></li>
                )
            } else {
                return (
                    <li key={uniqid()}><button onClick={() => setPage({ title: 'GalleryPage', data: flowerTypeData })}>{flowerTypeData}</button></li>
                )
            }

        })
    }

    function renderInColumns(images) {

        const chunk1 = images.slice(0, images.length / 2);
        const chunk2 = images.slice(images.length / 2, images.length);
        return (
            <div className='grid grid-cols-2 gap-2 lg:mx-[10%] xl:mx-[15%]'>
                <div className='flex flex-col gap-2'>
                    {
                        mapImages(chunk1, 1)
                    }
                </div>
                <div className='flex flex-col gap-2'>
                    {
                        mapImages(chunk2, 2)
                    }
                </div>

            </div>
        )
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    window.onresize = () => setWidth(window.innerWidth)
    return (
        <div className=''>
            <button onClick={goBack} className='sticky top-2 left-[50%] translate-x-[-50%] blue-button'>Powrót</button>

            <ul className='flex flex-wrap gap-3 text-2xl justify-center my-6'>
                {renderGalleryMenu(Object.keys(images))}
            </ul>

            <h2 className='text-5xl text-center'>{currentPage.data}</h2>

            <div className='flex flex-col gap-2 p-4 md:flex-row flex-wrap'>
                {width < 1024 ? mapImages(images[currentPage.data]) : renderInColumns(images[currentPage.data])}
            </div>
            <hr />
            <ul className='flex flex-wrap gap-3 text-2xl justify-center my-6'>
                {renderGalleryMenu(Object.keys(images))}
            </ul>
        </div>
    )
}

export default GalleryPage