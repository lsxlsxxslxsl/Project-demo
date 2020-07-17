import React, { useEffect, useRef, useState } from 'react';
function Example6() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.value = 'Hello ,useRef';
    console.log(inputEl);
  };
  const [text, setText] = useState('world');
  const textRef = useRef();

  useEffect(() => {
    textRef.current = text;
    console.log('textRef.current:', textRef.current);
    console.log('textState:', text);
  });
  return (
    <>
      {/*保存input的ref到inputEl */}
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>在input上展示文字</button>
      <br />
      <br />
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </>
  );
}

export default Example6;
