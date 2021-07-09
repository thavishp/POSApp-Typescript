import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeBaseProvider} from 'native-base';
import {Button} from 'react-native';
import Home from './components/Home';
import Items from './components/Items';
import AppContext from './AppContext';
import {Charge} from './types';

const Stack = createStackNavigator();

const App = () => {
  const [charges, setCharges]: [Array<Charge>, any] = React.useState([]);

  const chargesContext = {
    charges: charges,
    setCharges: setCharges,
  };

  return (
    <AppContext.Provider value={chargesContext}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{title: 'Checkout'}}
            />
            <Stack.Screen
              name="Items"
              component={Items}
              options={{headerBackTitle: 'Back'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </AppContext.Provider>
  );
};
export default App;
