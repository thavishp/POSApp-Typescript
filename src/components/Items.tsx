import {AddIcon, Box, HStack, List, Text} from 'native-base';
import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import AppContext from '../AppContext';

const Items = () => {
  const context = useContext(AppContext);
  const charges = context.charges;
  const setCharges = context.setCharges;

  const addItem = (item: {name: string; price: number}) => {
    setCharges(charges.concat([item]));
  };

  const listItems = [
    {name: 'Banana', price: 1},
    {name: 'Apple', price: 2},
    {name: 'Mango', price: 3},
  ].map((item, index) => (
    <List.Item key={index}>
      <HStack justifyContent="space-between" flex={1} pr={5}>
        <Text color="primary.500">{item.name}</Text>
        <TouchableOpacity onPress={() => addItem(item)}>
          <AddIcon color="primary.500" />
        </TouchableOpacity>
      </HStack>
    </List.Item>
  ));

  return (
    <Box
      width="100%"
      height="100%"
      // alignItems="center"
      justifyContent="flex-start"
      safeAreaBottom>
      <List space={2}>{listItems}</List>
    </Box>
  );
};
export default Items;
