import React from 'react'
import Header from '../Components/HomePage/Header'
import Kwiatomaty from '../Components/HomePage/Kwiatomaty/Kwiatomaty'
import About from '../Components/HomePage/About'
import GalleryPreview from '../Components/HomePage/GalleryPreview/GalleryPreview'
import NewLocation from 'src/Components/HomePage/NewLocation'



const HomePage = ({ setPage }) => {
    const today = new Date();
    const isAnnouncementDay =
        today.getFullYear() === 2025 &&
        today.getMonth() === 6 && // July is month 6 (0-based index)
        (today.getDate() === 28 || today.getDate() === 29);

    return (
        <>
            <Header />

            {isAnnouncementDay && (
                <div
                    id='ogloszenie'
                    role="alert"
                    className='bg-red-600 w-full text-white text-center p-3 text-xl'
                >
                    W dniach 28-29 lipca Pracownia będzie nieczynna
                </div>
            )}



            <hr className="my-6 border-gray-300" />
            <Kwiatomaty />

            <hr className="my-6 border-gray-300" />
            <About />

            <hr className="my-6 border-gray-300" />
            <GalleryPreview setPage={setPage} />
        </>
    );
};

export default HomePage