// @flow
import React, { Element } from 'react';

import { PageHeader, Divider } from './components'

type PropsT = {
  children: Element,
};

function App({ children }: PropsT) {
  return (
    <div className="container">
      <PageHeader />
      <Divider />

      { children }
    </div>
  );
}

export default App;
