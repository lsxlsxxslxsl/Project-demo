import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function Counter() {
  const {count, text} = useContext(CountContext); //一句话就可以得到count
  return (
    <h1>
      {count} - {text}
      <SubCounter />
    </h1>
  );
}

function SubCounter() {
  const {count, text} = useContext(CountContext); //一句话就可以得到count
  return (
    <p>
      {count} - {text}
    </p>
  );
}

function Example4() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('文案');
  return (
    <div>
      <p>You clicked {count} times</p>
      <p>content: {text}</p>
      <input
        type="text"
        defaultValue={text}
        onInput={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
      <CountContext.Provider value={{count, text}}>
        <Counter />
      </CountContext.Provider>
    </div>
  );
}
export default Example4;
