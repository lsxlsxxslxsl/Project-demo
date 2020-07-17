import React from 'react';
import Buttons from './Buttons';
import { Color } from './color';
import ShowArea from './ShowArea';

function Example4() {
  return (
    <div>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  );
}

export default Example4;
