import React, { useState, useEffect, useRef } from 'react';

interface Props {
  onSearch: (term: string) => void
  onCleanInput: () => void
}

const UserSearch: React.FC<Props> = ({
  onSearch,
  onCleanInput
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState('');
  
  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, [])

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (e.target.value.length === 0) {
      onCleanInput();
    }
  }

  const onClickSearchTerm = () => {
    onSearch(input)
  }

  return (
    <div>
      <input
        ref={inputRef}
        value={input}
        onChange={onChangeInput}
      />
      <button
        onClick={onClickSearchTerm}
      >Search</button>
    </div>
  )
}

export default UserSearch;
