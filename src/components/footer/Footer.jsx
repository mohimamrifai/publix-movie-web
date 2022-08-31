import React from 'react'
import FootElem from './FootElem'
import './footer.css'

const Footer = () => {

  return (
    <section className='footer'>
        <div className="elem">
            <FootElem />
            <FootElem />
            <FootElem />
            <FootElem />
        </div>
    </section>
  )
}

export default Footer