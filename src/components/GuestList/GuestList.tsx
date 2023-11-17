import React, { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  
  return (
    <div>
      <h3>GuestList</h3>
      <input
        placeholder='Type a name'
        value={name}
        onChange={onChangeName}
      />
      <button>Add guest</button>
    </div>
  )
}

export default GuestList;
