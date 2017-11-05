// Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header/Header';
import GuideList from './src/components/GuideList';

//Create a Component
const App = () => (
  <View>
    <Header headerText={'Guide.Me'} />
    <GuideList />
  </View>
);

// Render it to the device
// Only the ‘root’ component uses 'AppRegistry’
AppRegistry.registerComponent('guideme', () => App);


//ONe Component per file
