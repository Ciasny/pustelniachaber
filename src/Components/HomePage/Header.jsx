import React, { useRef } from 'react'
import Slider from '../Main/Slider'
import imgSlider1 from '../../Images/Flowerbox/img1.jpg'
import imgSlider2 from '../../Images/Bukiety/img6.jpg'
import imgSlider3 from '../../Images/Śluby/img1.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Header = () => {

    const headerTextRef = useRef()
    const sliderRef = useRef()

    useGSAP(() => {
        gsap.from(headerTextRef.current, { opacity: 0, duration: 2, delay: 0.8 })
        gsap.from(sliderRef.current, { opacity: 0, duration: 2, delay: 0.5 })
    })

    return (
        <header className='flex align-middle justify-center flex-col mt-10 md:grid md:grid-cols-2 md:place-items-center md:h-[70vh] lg:h-[90vh] md:mt-0 '>
            <div className=' col-start-1' ref={headerTextRef}>
                <h2 className='text-center text-2xl'>Pracownia Florystyczna</h2>
                <h1 className='text-center text-7xl leading-20 mb-[3rem]'>Pustelnia <br />Chaber</h1>
                <div className='flex justify-between text-xl max-w-[50%] min-w-[19rem] m-auto mb-5'>
                    <a href="#footer" className='clean-underline'>Kwiaty na zamówienie</a>
                    <a href="#kwiatomaty" className='clean-underline'>Kwiatomaty</a>
                </div>
            </div>

            <div className='col-start-2 text-center md:max-w-[80vh] md:ml-auto md:my-auto lg:mb-auto ' ref={sliderRef}>
                <div className='rounded-[1rem] overflow-hidden mb-5'>
                    <Slider config={{
                        type: 'loop',
                        infinite: true,
                        autoplay: true,
                        speed: 1000,
                        interval: 2500,
                        breakpoints: {
                            768: {
                                padding: '3rem',
                                gap: '1rem'

                            }
                        }
                    }}>
                        <img src={imgSlider1} alt='Kwiaty' className='w-full object-cover aspect-square m-auto' />
                        <img src={imgSlider2} alt='Kwiaty' className='w-full object-cover aspect-square m-auto' />
                        <img src={imgSlider3} alt='Kwiaty' className='w-full object-cover aspect-square m-auto' />
                    </Slider>
                </div>


                <a href="#gallery-preview" className='clean-underline text-3xl '>Galeria Kwiatów</a>
            </div>

        </header>
    )
}

export default Header