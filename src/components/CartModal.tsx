import React, {useContext} from 'react';
import {Box, Button, HStack, Modal, Text, VStack} from 'native-base';
import AppContext from '../AppContext';
import {TouchableOpacity} from 'react-native';
import {Charge} from '../types';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'CAD',
});

const CartModal = ({showModal, setShowModal}: any) => {
  const {charges, setCharges} = useContext(AppContext);
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
    }
    forceUpdate({});
  };

  const incrementItem = (index: number) => {
    setCharges((prev: Array<Charge>) => {
      prev[index].quantity += 1;
      return prev;
    });
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
          <Text fontSize={15}>{formatter.format(item.price)}</Text>
        </VStack>
        <HStack space={10} alignItems="center">
          <TouchableOpacity
            onPress={() => decrementItem(index)}
            hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
            <Text fontSize={40}>-</Text>
          </TouchableOpacity>
          <Text fontSize={20}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => incrementItem(index)}
            hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
            <Text fontSize={40}>+</Text>
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
