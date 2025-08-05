import React from 'react'

const Ui = ({name,email}) => {
  return (
    <div style={{
        border: '1px solid #ccc',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      width: '300px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      backgroundColor:'yellow'
    }}>
      <h3>{name}</h3>
      <h4>{email}</h4>
    </div>
  )
}

export default Ui
