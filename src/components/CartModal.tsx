import React, {useContext, useEffect} from 'react';
import {Box, Button, HStack, Modal, Text, VStack} from 'native-base';
import AppContext from '../AppContext';
import {TouchableOpacity} from 'react-native';
import {Charge} from '../types';

const CartModal = ({showModal, setShowModal}: any) => {
  const context = useContext(AppContext);
  const charges = context.charges;
  const setCharges = context.setCharges;
  const [, forceUpdate] = React.useState({});

  const decrementItem = (index: number) => {
    if (charges[index].quantity == 1) {
      setCharges((prev: Array<Charge>) => {
        prev.splice(index, 1);
        return prev;
      });
    } else {
      // charges[index].quantity -= 1;
      setCharges((prev: Array<Charge>) => {
        prev[index].quantity -= 1;
        return prev;
      });
      console.log('decrementItem');
    }
    forceUpdate({});
  };

  const incrementItem = (index: number) => {
    setCharges((prev: Array<Charge>) => {
      prev[index].quantity += 1;
      return prev;
    });
    console.log('incrementItem');
    forceUpdate({});
  };

  const clearCart = () => {
    setCharges([]);
  };

  const cartItems = charges.map((item, index) => (
    <Box key={index}>
      <HStack space={3} justifyContent="space-between">
        <VStack>
          <Text fontSize={20}>
            {item.name == '_item' ? 'Item ' + (index + 1) : item.name}
          </Text>
          <Text fontSize={15}>${item.price.toFixed(2)}</Text>
        </VStack>
        <HStack space={3} alignItems="center">
          <TouchableOpacity onPress={() => decrementItem(index)}>
            <Text fontSize={25}>-</Text>
          </TouchableOpacity>
          <Text fontSize={20}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => incrementItem(index)}>
            <Text fontSize={25}>+</Text>
          </TouchableOpacity>
        </HStack>
      </HStack>
    </Box>
  ));

  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px" pt={5} px={0}>
        <Modal.CloseButton />
        <Modal.Header pl={5}>Cart</Modal.Header>
        <Modal.Body px={5}>
          <VStack space={3} pt={5}>
            {cartItems.length != 0 ? (
              cartItems
            ) : (
              <Text alignSelf="center">Cart Empty</Text>
            )}
          </VStack>
        </Modal.Body>
        <Modal.Footer width="100%">
          <Button.Group
            variant="ghost"
            justifyContent="space-around"
            width="100%">
            <Button onPress={clearCart}>CLEAR CART</Button>
            <Button>CHECK OUT</Button>
            <Button
              onPress={() => {
                setShowModal(false);
              }}>
              CLOSE
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
export default CartModal;
