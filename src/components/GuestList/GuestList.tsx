import React, { useCallback, useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState<string[]>([]);
  const cleanInput = useCallback(() => setName(''), [])

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const addToList = () => {
    setList(prev => [...prev, name]);
    cleanInput();
  }

  return (
    <div>
      <h3>GuestList</h3>
      <input
        placeholder='Type a name'
        value={name}
        onChange={onChangeName}
      />
      <button
        onClick={addToList}
      >Add guest</button>
      <ul>
        {
          list.map(item => <li>{item}</li>)
        }
      </ul>
    </div>
  )
}

export default GuestList;
