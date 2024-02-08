import React from 'react'
import Input from './Input'
import Messages from './Message'


function MessageBox({activeGroup , grpNote ,setGrpNote  }) {

  const grpData = JSON.parse(localStorage.getItem("groupNames") || [] )
  const grpNotes = JSON.parse(localStorage.getItem("Notes") || [] )


  return (
    <div className="noteBox">
      <div className="msg-header">
        <ul className="msg-group">
          { 
           grpData.map((group) => ( 
            activeGroup == group.id &&
          <li className='msg-grp-item' key={group.id}> 
          <div className='msg-grp-logo' style={{backgroundColor : group.color}} > {group.initials} </div>
          <div className='msg-grp-name'>{group.name}</div>
          </li>
          ))}
        </ul>
      </div>

   <div className='messages'>
    {
      grpNotes.map((notes , index) => (  
      activeGroup == notes.id &&
     <Messages 
      key = {index}
      id={notes.id}
      msg= {notes.note}
      time= {notes.time} 
      date ={notes.date}
      /> 
      ))
      }
   </div>
   
      <div className="input-area">
      <Input activeGroup = {activeGroup} grpNote ={grpNote} setGrpNote={setGrpNote}/>
      </div>
    </div>
  )
}

export default MessageBox