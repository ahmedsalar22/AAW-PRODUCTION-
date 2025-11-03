import React from 'react'


const Text = ({ heading , para }) => {
  return (
    <>
        <h2 className="text-3xl font-bold text-center mb-2">{heading}</h2>
        <h2 className="text-center text-3xl font-bold text-black mb-8">{para} </h2>
        
    </>
  )
}

export default Text