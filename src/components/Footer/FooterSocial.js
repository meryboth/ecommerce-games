import React from 'react'

function FooterSocial(props) {
  return (
    <a href="" className='rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1 items-center'>
    <img
    src={props.icon}
    />
    </a>
  )
}

export default FooterSocial