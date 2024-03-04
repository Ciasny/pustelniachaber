import React from 'react'
import Header from '../Components/HomePage/Header'
import Kwiatomaty from '../Components/HomePage/Kwiatomaty/Kwiatomaty'
import About from '../Components/HomePage/About'
import GalleryPreview from '../Components/HomePage/GalleryPreview/GalleryPreview'

const HomePage = ({ setPage }) => {
    return (
        <>
            <Header />
            <hr />
            <Kwiatomaty />
            <hr />
            <About />
            <hr />
            <GalleryPreview setPage={setPage} />
        </>
    )
}

export default HomePage