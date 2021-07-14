import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeBaseProvider} from 'native-base';
import Home from './components/Home';
import Items from './components/Items';
import AppContext from './AppContext';
import {Charge, Item} from './types';

const Stack = createStackNavigator();

const App = () => {
  const [charges, setCharges]: [Array<Charge>, any] = React.useState([]);

  // TODO: initialize items from permanent storage
  const [items, setItems]: [Array<Item>, any] = React.useState([
    {name: 'Banana', price: 1},
    {name: 'Apple', price: 2},
    {name: 'Mango', price: 3},
  ]);

  const globalContext = {
    charges: charges,
    setCharges: setCharges,
    items: items,
    setItems: setItems,
  };

  return (
    <AppContext.Provider value={globalContext}>
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
