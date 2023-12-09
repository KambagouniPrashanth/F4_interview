import React, { useState } from 'react';

const TextEditor=()=> {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);
  const [isAppendDisabled, setIsAppendDisabled] = useState(true);
  const [isUndoDisabled, setIsUndoDisabled] = useState(true);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setIsAppendDisabled(event.target.value === '');
  };

  const handleAppend = () => {
    setList([...list, inputValue]);
    setInputValue('');
    setIsAppendDisabled(true);
    setIsUndoDisabled(false);
  };

  const handleUndo = () => {
    const newList = [...list];
    newList.pop();
    setList(newList);
    setIsAppendDisabled(false);
    setIsUndoDisabled(newList.length === 0);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter an element"
      />
      <button onClick={handleAppend} disabled={isAppendDisabled}>
        Append
      </button>
      <button onClick={handleUndo} disabled={isUndoDisabled}>
        Undo
      </button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TextEditor;