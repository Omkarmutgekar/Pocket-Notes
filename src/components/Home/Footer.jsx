import React from 'react'
import lock from '../../assets/lock.png'

function Footer() {
  return (
    <>
         <footer className='footer'> 
            <img className='foot-icon' src={lock} alt="" />
            <p className='foot-txt'> end-to-end encrypted</p>
        </footer>
    </>
  )
}

export default Footer