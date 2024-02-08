import React ,{ useState } from 'react'
import send from '../../assets/send.png'

function input({activeGroup ,grpNote , setGrpNote }) {

  const [note , setNote] = useState('')

  function getCurrentDate() {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear() % 100; 
  
    const formattedDate = `${day} ${month} ${year}`;
  
    return formattedDate;
  }
  const currentDate = getCurrentDate();
  const time = new Date().toLocaleTimeString()

  const addNoteHandler = (e) => {
    e.preventDefault()
    const newNote = {id:activeGroup , note:note , time:time, date:currentDate }
    setGrpNote([...grpNote,newNote ])
    localStorage.setItem("Notes" , JSON.stringify([...grpNote,newNote]))
    setNote('')
}

const handleChange = (e) => {
    setNote(e.target.value)
}


  return (
    <form  onSubmit={addNoteHandler} className='input-box'>
      <input className='msg-input'
      value={note}
      onChange={handleChange}
      onKeyDown={handleChange}
       type="text"
        placeholder='Enter your text here .......'
         />

      <img type='submit' onClick={addNoteHandler} className='send' src={send} alt="sendbtn" />
    </form>
  )
}

export default input