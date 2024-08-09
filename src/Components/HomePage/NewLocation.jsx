import React from 'react'
import Slider from '../Main/Slider'
import imgSlider1 from 'src/Images/Flowerbox/img1.jpg'
import imgSlider2 from 'src/Images/Flowerbox/img2.jpg'
import imgSlider3 from 'src/Images/Flowerbox/img3.jpg'


const NewLocation = () => {
    return (
        <div>
            <div className='m-auto w-max'>
                <h2 className='text-4xl m-auto text-center underline mb-8'><a href="#footer">Nowa lokalizacja Pustelni Chaber!</a></h2>

                <div className='text-center'>
                    <h4 className='text-3xl mb-4'>Pracownia Florystyczna Pustelnia Chaber</h4>
                    <p className='text-xl'>
                        <b>- Zapraszamy - </b> <br />
                        Teraz też w centrum oświęcimia na wprost Oświęcimskiego Centrum Kultury <br />
                        <a href="#footer">Jędrzeja Śniadeckiego 33, Oświęcim</a>
                    </p>
                    <h5 className='text-3xl'>Godziny Otwarcia</h5>
                    <p className='text-2xl w-max m-auto mb-8'>
                        pon-pt 10 - 16 <br />
                        <hr className='my-2 w-[80%]' />
                        sobota 10 - 13
                    </p>
                </div>
                <div className='flex gap-[4rem] mb-4 max-md:flex-col'>
                    {/* <div className='max-w-md overflow-hidden rounded-2xl'>
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
                        }} >
                            <img src={imgSlider1} alt='Kwiaty' className='w-full object-cover aspect-square m-auto' />
                            <img src={imgSlider2} alt='Kwiaty' className='w-full object-cover aspect-square m-auto' />
                            <img src={imgSlider3} alt='Kwiaty' className='w-full object-cover aspect-square m-auto' />
                        </Slider>
                    </div> */}
                    <iframe className=' rounded-2xl min-w-[25rem] max-md:min-w-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.5156754378644!2d19.238327245496347!3d50.03511139539742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716950eb0310541%3A0x9d28298a168d31e8!2zSsSZZHJ6ZWphIMWabmlhZGVja2llZ28gMzMsIDMyLTYwMCBPxZt3acSZY2lt!5e0!3m2!1spl!2spl!4v1723221145855!5m2!1spl!2spl" width="100%" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
        </div>
    )
}

export default NewLocation