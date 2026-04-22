import React from 'react'

const Card = ({btnText="visit-here"}) => {
  return (
    <div className="md:max-w-sm w-full p-6 rounded-xl shadow-xl bg-black border border-zinc-800 hover:border-white transition-all duration-300 hover:scale-105 group">
      
      <div className="relative overflow-hidden rounded-lg mb-6">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20240518/pngtree-nature-beautiful-background-hd-image_15796886.jpg"
          alt="Featured content"
          className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <h2 className="text-white text-xl font-bold mb-2">
        Modern Design Solutions
      </h2>

      <p className="text-gray-400 text-sm mb-4">
        Discover cutting-edge design patterns and UI components.
      </p>

      <button className="px-4 py-2 bg-white text-black rounded-lg">
     {btnText}
      </button>

    </div>
  )
}

export default Card