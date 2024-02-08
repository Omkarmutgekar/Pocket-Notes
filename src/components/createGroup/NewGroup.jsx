import React, { useState } from 'react'
import {nanoid} from '@reduxjs/toolkit'


const ColorOptions = [
  { name: 'Color-1', color: '#B38BFA' },
  { name: 'Color-2', color: '#FF79F2' },
  { name: 'Color-3', color: '#43E6FC' },
  { name: 'Color-4', color: '#F19576' },
  { name: 'Color-5', color: '#0047FF' },
  { name: 'Color-6', color: '#6691FF' },
];


const NewGroup = ({onClose , groupNamesParent , setGroupNamesParent , grpNote , activeGroup}) => {

  const [groupName, setGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [id , setId] = useState('')
  const [initials, setInitials] = useState('');
  

  const handleInputChange = (e) =>{
        setId(nanoid())
        setGroupName(e.target.value)

        setInitials(e.target.value
          .split(" ")
          .map((word) => word.charAt(0))
          .join("")
          .toUpperCase()
          )
  }

  const handleColorSelection = (color) => {
    setSelectedColor(color)
  }


  const addGroupHandler = (e) => {
        e.preventDefault();
        setGroupName('')
        setSelectedColor('')
        onClose()


        const newGroup = { id: id , name: groupName, initials:initials, color: selectedColor };
        setGroupNamesParent([...groupNamesParent, newGroup]);
   
        localStorage.setItem("groupNames",  JSON.stringify([...groupNamesParent, newGroup]));
        
        const newNote = {id:activeGroup, note:''}
        {grpNote.length == 0 ? localStorage.setItem("Notes" , JSON.stringify([...grpNote,newNote])) : ''} 

  }


  return (
    <form onSubmit={addGroupHandler} className="group-tab" onClick={(e) => {e.stopPropagation()}}>
    <div className='newGroup'>
        <div className='inner-grp'>
        <div className="grp-head">
        <p>Create New group</p>
        </div>
        <div className="group-input">
         <p>Group Name</p>
         <input className='grp-input' 
           type="text"
           id="groupName"
           value={groupName}
           onChange={handleInputChange}
           required 
           />
        </div>

        <div className="color">
        <p>choose color</p>

        <div className="color-opt">
        {ColorOptions.map((colorOption, index) => ( 
          <div className={`color ${
              selectedColor === colorOption.color ? `highlight` : null
            }`}
          key={index}
          onClick={() => handleColorSelection(colorOption.color)}
          style={{
            backgroundColor: colorOption.color,
            width: '25px',
            height: '25px',
            borderRadius: '50%',
            cursor: 'pointer',
          }}

          />
          ))}
        </div>
        </div>
        <button type="submit" className='create-grp-btn'>Create</button>
        </div>
    </div>
    </form>
  )
}

export default NewGroup