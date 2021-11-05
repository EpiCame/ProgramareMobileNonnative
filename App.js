import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import UpdateShowScreen from './screens/UpdateShowScreen';
import AddShowScreen from './screens/AddShowScreen';
import ViewShowScreen from './screens/ViewShowScreen';

const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="ViewShows"
          component={ViewShowScreen}
          options={{
            title: 'Showtracker',
            headerStyle: {
              backgroundColor: '#7B68EE',
            },
            headerTitleStyle: {
              color: '#000000',
              fontSize: 26,
              alignSelf: 'center',
            },
          }}
        />
        <RootStack.Screen
          name="AddShow"
          component={AddShowScreen}
          options={{
            title: 'New Show',
            headerStyle: {
              backgroundColor: '#7B68EE',
            },
            headerTitleStyle: {
              color: '#000000',
              fontSize: 24,
            },
          }}
        />
        <RootStack.Screen
          name="UpdateShow"
          component={UpdateShowScreen}
          options={{
            title: 'Update',
            headerStyle: {
              backgroundColor: '#7B68EE',
            },
            headerTitleStyle: {
              color: '#000000',
              fontSize: 24,
            },
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;