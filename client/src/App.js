// @flow
import React, { Element } from 'react';

import { Headline } from './components'

type PropsT = {
  children: Element,
};

function App({ children }: PropsT) {
  return (
    <Headline
      large
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      katja<b>kuchenbecker</b>.
    </Headline>
  );
}

export default App;
