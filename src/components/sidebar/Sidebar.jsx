import React from 'react'
import Navbar from './Navbar'
import Groups from './Groups'



function Sidebar({onSelect ,  groupNamesParent}) {


  return (
    <>
    <div className="sidebar">
      <Navbar/> 
      { groupNamesParent.length > 0 ? (<Groups onSelect ={onSelect} /> ):''}  
     
     </div>
    </>
  )
}

export default Sidebar