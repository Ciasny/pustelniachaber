import React from 'react'
import phoneIcon from 'src/Images/Icons/phone-icon.png'
import igIcon from 'src/Images/Icons/ig-icon.png'
import fbIcon from 'src/Images/Icons/fb-icon.png'
import mailIcon from 'src/Images/Icons/mail-icon.png'
import './footer.css'


const Footer = () => {
    return (
        <div id='footer' className='bg-secondary mt-20 pt-5 '>
            <h2 className='text-center text-5xl'>Kontakt</h2>
            <div className='lg:grid grid-cols-2 lg:max-w-[60%] lg:m-auto'>
                <div className=''>
                    <ul className='m-auto w-max text-xl my-5 links-list'>

                        <img loading="lazy" className='max-w-[1.5rem] max-h-[1.5rem]' src={mailIcon} alt="Mail" />
                        <li className='flex '><a href="mailto:urszula.maciejowska@op.pl" className='clean-underline-l'>urszula.maciejowska@op.pl</a></li>

                        <img loading="lazy" className='max-w-[2rem] max-h-[2rem]' src={phoneIcon} alt="Telefon" />
                        <li className='flex'><a href="tel:603523975" className='clean-underline-l'>603 523 975</a></li>

                        <img loading="lazy" className='max-w-[2rem] max-h-[2rem]' src={igIcon} alt="Instagram" />
                        <li className='flex'><a target='_blank' rel="noreferrer" href="https://www.instagram.com/pustelniachaber/" className='clean-underline-l'>pustelniachaber</a></li>

                        <img loading="lazy" className='max-w-[2rem] max-h-[2rem]' src={fbIcon} alt="Facebook" />
                        <li className='flex'><a target='_blank' rel="noreferrer" href="https://www.facebook.com/Pustelnia.chaber?locale=pl_PL" className='clean-underline-l'>Pustelnia Chaber</a></li>

                    </ul>
                </div>
                <div>
                    <p className='text-center my-2 text-lg'>Lokalizacja Pracowni "Pustelnia Chaber"</p>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.5156754378644!2d19.238327245496347!3d50.03511139539742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716950eb0310541%3A0x9d28298a168d31e8!2zSsSZZHJ6ZWphIMWabmlhZGVja2llZ28gMzMsIDMyLTYwMCBPxZt3acSZY2lt!5e0!3m2!1spl!2spl!4v1723221145855!5m2!1spl!2spl" width="100%" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
            </div>



            <p className='bg-black text-stone-300 text-center p-3 text-mid'>Pracownia Florystyczna "Pustelnia Chaber"</p>
        </div>
    )
}

export default Footer