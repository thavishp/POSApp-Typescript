import {
  AddIcon,
  Box,
  HStack,
  Text,
  VStack,
  Button,
  CloseIcon,
} from 'native-base';
import React, {useContext, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import AppContext from '../AppContext';

const Items = () => {
  const context = useContext(AppContext);
  const charges = context.charges;
  const setCharges = context.setCharges;

  // TODO: initialize items from permanent storage
  const [items, setItems] = useState([
    {name: 'Banana', price: 1},
    {name: 'Apple', price: 2},
    {name: 'Mango', price: 3},
  ]);

  const addItem = (item: {name: string; price: number}) => {
    const index = charges.findIndex(charge => {
      if (charge.name == item.name) {
        return true;
      }
    });

    if (index == -1) {
      setCharges(charges.concat([Object.assign(item, {quantity: 1})]));
    } else {
      charges[index].quantity += 1;
      setCharges(charges);
    }
  };

  const newItem = () => {
    //TODO: adding new items
    console.log('added new item');
  };

  const listItems = items.map((item, index) => (
    <Box key={index} bg="trueGray.50" p={2} m={1} rounded="xl">
      <HStack space={3}>
        <VStack>
          <Text fontSize={20} color="darkText">
            {item.name == '_item' ? 'Item ' + (index + 1) : item.name}
          </Text>
          <Text fontSize={15}>${item.price.toFixed(2)}</Text>
        </VStack>
        <HStack
          flex={1}
          width="100%"
          alignItems="center"
          justifyContent="flex-end"
          space={3}>
          <TouchableOpacity onPress={() => addItem(item)}>
            <AddIcon color="green.500" />
          </TouchableOpacity>
          {/* TODO: removing items */}
          <TouchableOpacity onPress={() => console.log('delete item')}>
            <CloseIcon color="red.500" />
          </TouchableOpacity>
        </HStack>
      </HStack>
    </Box>
  ));

  return (
    <Box
      width="100%"
      height="100%"
      // alignItems="center"
      justifyContent="flex-start"
      safeAreaBottom>
      <VStack justifyContent="center">{listItems}</VStack>
      <Box justifyContent="flex-end" flex={1} py={5} alignItems="center">
        <Button
          size="md"
          onPress={() => newItem()}
          bg="rgb(52, 152, 219)"
          _text={{color: 'lightText'}}>
          Add Item
        </Button>
      </Box>
    </Box>
  );
};
export default Items;
