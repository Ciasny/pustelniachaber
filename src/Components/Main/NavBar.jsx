import React, { useRef } from 'react'
import logoImg from '../../Images/logo.png'
import './navbar.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const NavBar = ({ setPage }) => {

    const menuBtnRef = useRef(null)
    const menuRef = useRef(null)


    function slideMenu() {
        menuBtnRef.current.classList.toggle('clicked')
        menuRef.current.classList.toggle('show')
    }


    useGSAP(() => {
        gsap.from('.nav-link', { opacity: 0, duration: 1, stagger: -0.2 })
    })


    return (
        <nav className='px-3 py-2 bg-secondary flex justify-between align-middle  fixed w-full top-0 z-50'>
            <img src={logoImg} alt="Pustelnia Chaber Logo" className='max-w-[5rem]' onClick={() => setPage({ title: 'HomePage', data: '' })} />
            <button className='menu-btn md:!hidden' ref={menuBtnRef} onClick={slideMenu}>
                <div className='stripe1'></div>
                <div className='stripe2'></div>
                <div className='stripe3'></div>
            </button>

            <div className='hidden md:block'>
                <ul className='flex items-center h-[100%] gap-8 text-2xl'>
                    <li className='link-hover nav-link'><a href="" onClick={() => setPage({ title: 'HomePage', data: '' })}>Strona Główna</a></li>

                    <li className='link-hover nav-link'><a href="#kwiatomaty">Kwiatomaty</a></li>

                    <li className='link-hover nav-link'><a href="#footer">Kontakt</a></li>

                    <li className='link-hover nav-link'><a href="#gallery-preview">Galeria</a></li>

                    <li className='link-hover nav-link'><a href="#about">O Pracowni</a></li>
                </ul>
            </div>

            <div onClick={slideMenu} id='menu' ref={menuRef} className='text-3xl text-center p-5 z-30 md:hidden' >
                <h2 className='text-left text-2xl mb-10'>Pustelnia Chaber</h2>
                <ul className='flex flex-col gap-5 '>
                    <li><a href="" onClick={() => setPage({ title: 'HomePage', data: '' })}>Strona Główna</a></li>
                    <hr className='my-5' />
                    <li><a href="#kwiatomaty">Kwiatomaty</a></li>
                    <hr className='my-5' />
                    <li><a href="#footer">Kontakt</a></li>
                    <hr className='my-5' />
                    <li><a href="#gallery-preview">Galeria</a></li>
                    <hr className='my-5' />
                    <li><a href="#about">O Pracowni</a></li>
                </ul>
            </div>

        </nav>
    )
}

export default NavBar