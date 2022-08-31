import React from 'react'
import './hero.css'


const Hero = () => {


  return (
    <section className='hero'>
        <img src="img/gb.jpg" alt="" />
        <div className="text">
            <h2>Film, acara TV tak terbatas, dan lebih banyak lagi.</h2>
            <p>Menonton film dimana aja dan kapan aja !</p>
            <p>Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.</p>
            <div className="langganan">
                <input type="email" className='input-langganan' placeholder='your email'/>
                <button className='btn-langganan'>Langganan</button>
            </div>
        </div>
    </section>
  )
}

export default Hero