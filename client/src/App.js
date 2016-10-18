// @flow
import React, { Element } from 'react';

import { PageHeader } from './components'

type PropsT = {
  children: Element,
};

function App({ children }: PropsT) {
  return (
    <div className="container">
      <PageHeader />

      { children }
    </div>
  );
}

export default App;
