import React from 'react'

const Map = () => {
  return (
    <div>
      
      <div className="map-container mb-10  " style={{width:'100vw'}}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7871603844605!2d86.01568387512341!3d24.003291882737933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4095158bbc51b%3A0xd25659142228adfa!2sJamtara%20Masjid!5e0!3m2!1sen!2sin!4v1744978463495!5m2!1sen!2sin"
          style={{ border: 0, height: 450 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Map
