import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import Home from './src/pages/Home/index';

const App = (): JSX.Element => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#121015" barStyle={'light-content'} />
      <Home />
    </>
  );
};

export default App;
