import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeBaseProvider} from 'native-base';
import {AppState} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './components/Home';
import Items from './components/Items';
import AppContext from './AppContext';
import {Charge} from './types';

const Stack = createStackNavigator();

const App = () => {
  const appState = React.useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = React.useState(
    appState.current,
  );

  const [charges, setCharges]: [Array<Charge>, any] = React.useState([]);

  const storeItems = async () => {
    try {
      console.log('storing', items);
      const jsonValue = JSON.stringify(items);
      await AsyncStorage.setItem('@customItems', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getItems = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@customItems');
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.log(e);
    }
  };

  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    console.log('refreshed items', items);
    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState: any) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      //fetch data from storage
      console.log('App has come to the foreground!');
      getItems().then(value => {
        setItems(value);
        console.log('value:', value);
        console.log('items:', items);
      });
    } else if (
      appState.current === 'active' &&
      nextAppState.match(/inactive|background/)
    ) {
      //send items to storage
      console.log('App leaving foreground');
      console.log('to store', items);
      storeItems();
    }
    appState.current = nextAppState;
    setAppStateVisible(appState.current);
  };

  const globalContext = {
    charges: charges,
    setCharges: setCharges,
    items: items,
    setItems: setItems,
  };

  // React.useEffect(() => {
  //   console.log('refreshed items', items);
  // });

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
