import React, { useCallback, useState } from 'react';
import UserSearch from './UserSearch';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState<string[]>([]);
  const [filterList, setFilterList] = useState<string[]>([]);
  const cleanInput = useCallback(() => {
    setFilterList([...list])
    setName('');
  }, [])

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const addToList = () => {
    setList(prev => [...prev, name]);
    cleanInput();
  }

  const onSearchList = (term: string) => {
    if(term.length > 0) {
      setFilterList(prev => {
        return prev.filter(item => item.toLowerCase().includes(term))
      });
    }
  }

  const onResetList = () => {
    setFilterList([...list])
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
      <UserSearch
        onSearch={onSearchList}
        onCleanInput={onResetList}
      />
      <ul>
        {
          filterList.map(item => <li>{item}</li>)
        }
      </ul>
    </div>
  )
}

export default GuestList;
