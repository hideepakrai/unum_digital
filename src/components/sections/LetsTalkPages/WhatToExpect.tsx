import React from 'react'

const WhatToExpect = () => {
  return (
    <section className="w-full py-10 md:py-14 bg-white">
      <div className="max-w-8xl mx-auto px-4">
        <div
          className="
            bg-[#F8F8F8]
            rounded-[20px]
            min-h-[260px] md:min-h-[320px]
            flex flex-col items-center justify-center
            text-center
            px-6 md:px-10
          "
        >
          <h2 className="text-2xl md:text-[48px] font-medium text-[#555555] mb-4">
            What happens next?
          </h2>

          <ul className="text-sm md:text-[18px] text-[#555555] space-y-2 list-disc list-inside text-start">
            <li>You'll get a reply within 24 hours.</li>
            <li>No pressure — just clarity.</li>
            <li>If there's a fit, we'll map next steps.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WhatToExpect
