import React, { useState } from 'react'
import NewGroup from '../createGroup/NewGroup'

function Addbtn() {
const[popup,setPopup] = useState(false);
  return (
      <>
      <div className="addgroup-btn" onClick={() => {setPopup(true)}}>
        <div className="round">
        <div className="plus">+</div>
        </div>
           {/* {popup && (  <NewGroup/> ) } */}  
      </div>
      </>
    
  )
}

export default Addbtn