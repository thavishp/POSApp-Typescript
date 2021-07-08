import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeBaseProvider} from 'native-base';
import {Button} from 'react-native';
import Home from './components/Home';
import Items from './components/Items';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerRight: () => (
                <Button
                  onPress={() => console.log('This is a button!')}
                  title="Items"
                />
              ),
            }}
          />
          <Stack.Screen name="Items" component={Items} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
