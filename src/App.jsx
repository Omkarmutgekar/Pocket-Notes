import './App.css'
import React, { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import MessageBox from './components/msgbox/MessageBox'
import Home from './components/Home/Home'
import NewGroup from './components/createGroup/NewGroup'
import { useEffect } from 'react'



function App() {

  
  const [selected , setSelected] = useState(false)
  const[popup,setPopup] = useState(false);
  const [activeGroup , setActiveGroup] = useState([])
  const [grpNote , setGrpNote] = useState ('')
  const [groupNamesParent, setGroupNamesParent] = useState('')
 

useEffect(() => {
  const obj = JSON.parse(localStorage.getItem("groupNames"));
  const noteobj = JSON.parse(localStorage.getItem("Notes"))


  if (obj !== null) {
     setGroupNamesParent(obj);      
  }
  if(noteobj !== null){
    setGrpNote(noteobj)
  }
}, []);




  const onClose = () => {
    setPopup(false);
  }
  
  const onSelect = (groupid) => {
      setActiveGroup(groupid)
      setSelected(true)
  }




  return (
 <div className="main">
    <div className="container">
      <div className="sidebar">
         <Sidebar onSelect={onSelect} groupNamesParent = {groupNamesParent}  />
         <div className="addgroup-btn" onClick={() => {setPopup(true)}}>
              <div className="round">
                  <div className="plus">+</div>
              </div>
         </div>
            
      </div>

          { popup && 
           <div className= "popupGroup" onClick={()=> setPopup(!popup)}>
          {popup && (<NewGroup onClose={onClose} 
          groupNamesParent = {groupNamesParent} 
          setGroupNamesParent = {setGroupNamesParent}
          activeGroup={activeGroup}  
          grpNote = {grpNote}
         />)}
          </div> }
         
      <div className="noteBox">
            
          {selected == false ? <Home/> : <MessageBox  activeGroup={activeGroup}  grpNote ={grpNote} setGrpNote={setGrpNote}/>}

     </div>
     </div>
</div>
  )
}

export default App
