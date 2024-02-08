import React from 'react'


function Groups({onSelect }) {


  const grpData = JSON.parse(localStorage.getItem("groupNames"))
  const onGroupSelect = (id , name) => {
    onSelect(id)
  }

  return (
    
    <div className='group-list'> 
    <ul className="group">
      {grpData.map((group) => (
        
         <li 
          className='grp-item'
          key={group.id}
          onClick = {() => onGroupSelect(group.id , group.groupName ) }
         >

          <div className='grp-logo' style={{ backgroundColor: group.color }}>{group.initials} </div>
          <div className='grp-name'>{group.name}</div>
        </li>
        // </NavLink>
      ))}
    </ul>
 
</div>
  )
}

export default Groups