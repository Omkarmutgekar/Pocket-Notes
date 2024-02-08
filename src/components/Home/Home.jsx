import React from 'react'
import HomeImage from './HomeImage'
import Footer from './Footer'

function Home() {
  return (
    <div className='home'>
       <HomeImage/>
             <p className="home-logo">Pocket Notes</p>
             <div className="home-info">
             <p className='info-txt'>Send and receive messages without keeping your phone online. 
                  Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            </div>
        <Footer/>
    </div>
  )
}

export default Home