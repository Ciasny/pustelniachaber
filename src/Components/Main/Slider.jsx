import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Slider = ({ children, config, className }) => {
    console.log(children)
    return (
        <Splide options={{
            ...config
        }}
            className={`max-w-full  m-auto ${className}`} aria-label="Slider">
            {children.map(item => <SplideSlide>{item}</SplideSlide>)}
        </Splide>
    )
}

export default Slider