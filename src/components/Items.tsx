import {
  AddIcon,
  Box,
  HStack,
  Text,
  VStack,
  Button,
  CloseIcon,
  Center,
  Circle,
} from 'native-base';
import React, {useContext, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import AppContext from '../AppContext';
import {Item} from '../types';
import NewItemModal from './NewItemModal';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'CAD',
});

const Items = () => {
  const {charges, setCharges, items, setItems} = useContext(AppContext);

  const [showModal, setShowModal] = useState(false);
  const [, forceUpdate] = React.useState({});

  const addItem = (item: Item) => {
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
    forceUpdate({});
  };

  const deleteItem = (index: number) => {
    setItems((prev: any) => {
      prev.splice(index, 1);
      return prev;
    });
    forceUpdate({});
  };

  const itemCount = charges.reduce((acc, charge) => acc + charge.quantity, 0);

  const listItems = items.map((item, index) => (
    <Box key={index} bg="trueGray.50" p={2} m={1} rounded="xl">
      <HStack space={3}>
        <VStack>
          <Text fontSize={20} color="darkText">
            {item.name == '_item' ? 'Item ' + (index + 1) : item.name}
          </Text>
          <Text fontSize={15}>{formatter.format(item.price)}</Text>
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
          <TouchableOpacity onPress={() => deleteItem(index)}>
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
      <NewItemModal
        showModal={showModal}
        setShowModal={setShowModal}
        setItems={setItems}
      />
      <Box width="100%" px={10} py={3}>
        <Center
          rounded="lg"
          border={1}
          borderColor="darkText"
          width="100%"
          height={10}>
          {/* TODO: add checkout ability */}
          <HStack space={2} alignItems="center">
            <Text color="darkText">Items in Cart:</Text>
            <Circle size={6} bg="rgb(231, 76, 60)" m={0}>
              <Text color="lightText">{itemCount}</Text>
            </Circle>
          </HStack>
        </Center>
      </Box>
      <VStack justifyContent="center">{listItems}</VStack>
      <Box justifyContent="flex-end" flex={1} py={5} alignItems="center">
        <Button
          size="md"
          onPress={() => setShowModal(true)}
          bg="rgb(52, 152, 219)"
          _text={{color: 'lightText'}}>
          New Item
        </Button>
      </Box>
    </Box>
  );
};
export default Items;
