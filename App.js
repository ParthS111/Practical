import React, { useEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import RootNavigator from './src/Router'
import useOrientation from './src/components/useOrientation'
import {Provider} from 'react-redux';
import store from './src/Redux/store';
function App() {

 const data= useOrientation()
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
      <RootNavigator />
      </Provider>
    </SafeAreaView>);
}


export default App;

