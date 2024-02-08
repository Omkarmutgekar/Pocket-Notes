import React from 'react'

function Message(props) {
  return (
      <div className="message">
      <div className="msgcontent">
      <p>{props.msg}</p>
      </div>
      <div className='time-stamp'>
      <div className='date'>{props.date}</div>
      <span className='dot'>.</span>
      <div className='time'> {props.time} </div>
      </div>

    </div>
    
   
  )
}

export default Message