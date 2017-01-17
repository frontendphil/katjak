// @flow
import React from 'react';

import { PageHeader, Divider } from './components'

type PropsT = {
  children: React$Element,
};

function App({ children }: PropsT) {
  return (
    <div
      className="container"
      style={{
        fontFamily: 'Source Sans Pro',
      }}
    >
      <PageHeader />

      <Divider />

      { children }
    </div>
  );
}

export default App;
