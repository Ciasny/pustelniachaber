import React, { useEffect, useState } from 'react'
import Kwiatomat from './Kwiatomat'
import Slider from '../../Main/Slider'
import kwiatomatMiastoImg from '../../../Images/Kwiatomaty/miasto.jpg'
import kwiatomatOsiedleImg from '../../../Images/Kwiatomaty/rapsodia.jpg'


const Kwiatomaty = () => {

    const [width, setWidth] = useState(window.innerWidth)

    function renderSlider() {
        return (
            <Slider className='w-full' config={{ padding: '3rem', gap: '1rem' }}>
                <Kwiatomat img={kwiatomatMiastoImg} title={'Kwiatomat w "Mieście"'} content={'Przy Sklepie PSS Społem, ul.Dąbrowskiego 8B'} mapLink={'https://maps.app.goo.gl/9dnUzRmzuu8iRQr5A'} />
                <Kwiatomat img={kwiatomatOsiedleImg} title={'Kwiatomat na "Osiedlu"'} content={'Przy Rapsodia Cafe, ul.Śniadeckiego 22'} mapLink={'https://maps.app.goo.gl/MJrDL2kGXnLSPfHh9'} />
            </Slider>
        )
    }

    function renderNormal() {
        return (
            <div className='grid grid-cols-2 gap-2 max-w-[50%]'>
                <Kwiatomat img={kwiatomatMiastoImg} title={'Kwiatomat w "Mieście"'} content={'Przy Sklepie PSS Społem, ul.Dąbrowskiego 8B'} mapLink={'https://maps.app.goo.gl/9dnUzRmzuu8iRQr5A'} />
                <Kwiatomat img={kwiatomatOsiedleImg} title={'Kwiatomat na "Osiedlu"'} content={'Przy Rapsodia Cafe, ul.Śniadeckiego 22'} mapLink={'https://maps.app.goo.gl/MJrDL2kGXnLSPfHh9'} />
            </div>
        )
    }

    window.onresize = () => {
        setWidth(window.innerWidth)
    }

    return (
        <div id='kwiatomaty' className='text-center '>
            <h2 className='text-5xl mb-3 md:mb-10'>Kwiatomaty <br />Oświęcim</h2>
            <div className=' md:flex justify-center gap-10 lg:px-[10%]'>
                <div className='px-5'>
                    <h3 className='text-blue-600 text-3xl md:text-4xl'>Pierwsze Kwiatomaty w<br /> Oświęcimiu</h3>
                    <div className='text-left text-xl md:text-2xl md:mt-10'>
                        Oferujemy:
                        <ul className='text-lg md:text-xl'>
                            <li>- Sukcesywną dostawe świeżych bukietów i kompozycji</li>
                            <li>- Otwarte 24/7</li>
                            <li>- Płatność kartą i blikiem</li>
                            <li>- Prosta obsługa</li>
                            <li>- Możliwość odbioru indywidualnych zamówień, na podstawie przsłanego kodu odbioru</li>
                        </ul>
                    </div>
                </div>
                {width > 768 ? renderNormal() : renderSlider()}
            </div>
        </div>
    )
}

export default Kwiatomaty