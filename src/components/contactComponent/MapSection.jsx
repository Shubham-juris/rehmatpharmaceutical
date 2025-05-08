import React from 'react'

const MapSection = () => {
  return (
    <>
      <section className="w-full h-96 px-4">
      <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Insight24 Location"
          src="https://www.google.com/maps?q=New+Sunny+Enclave+125+140301&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section> 
    </>
  )
}

export default MapSection
