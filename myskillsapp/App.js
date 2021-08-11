import React from 'react';
import {StatusBar} from 'react-native';

import Home from './src/pages/Home/index';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#121015" barStyle={'light-content'} />
      <Home />
    </>
  );
};

export default App;
