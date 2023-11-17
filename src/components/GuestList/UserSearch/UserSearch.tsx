import React, { useState } from 'react';

interface Props {
  onSearch: (term: string) => void
  onCleanInput: () => void
}

const UserSearch: React.FC<Props> = ({
  onSearch,
  onCleanInput
}) => {
  const [input, setInput] = useState('');

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
