import React from 'react'
import './about.css'

const About = () => {

    function scrollToFooter() {
        const footer = document.querySelector('#footer')
        footer.scrollIntoView()
    }

    return (
        <div id='about' className='text-center p-5 '>
            <h2 className='text-5xl'>O Pracowni</h2>
            <p className='text-lg my-5 max-w-[50ch] mx-auto lg:text-2xl'>
                Pracownia moja powstała na wskutek wielu zdarzeń,
                które w sumie doprowadziły mnie na tygodniowe szkolenie jednej z najlepszych Mistrzyni Florstycznych w kraju.
                Tam zobaczyłam i doświadczyłam, co można robić z kwiatami i jak najlepiej je wyeksponować,
                żeby pokazać ich piękno i niepowtarzalność. Dalej było mnóstwo szkoleń, roczna szkoła florystyczna i wiele wolontariatów,
                min. podczas Florystycznych Mistrzostw Europy - EuroCup 2022 w Katowicach,
                Florystycznych Mistrzostw Polski w Pszczynie 2023 oraz wystawy kwiatów w różnych aranżacjach w komnatach zamkowych podczas 50. Lata Kwiatów na Zamku w Otmuchowie. <br />
                To wszystko kształtuje mnie cały czas i doprowadza do różnych historii... Ostatnia z nich, to otwarcie nowego miejsca pracowni na Osiedlu w Oświęcimiu przy ul. Sniadeckiego 23- 39, na wprost Oświęcimskiego Centrum Kultury.
            </p>
            <button onClick={scrollToFooter} className='blue-button'>Kontakt</button>
        </div>
    )
}

export default About