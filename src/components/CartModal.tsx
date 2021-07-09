import React, {useContext} from 'react';
import {Box, Button, HStack, Modal, Text, VStack} from 'native-base';
import AppContext from '../AppContext';

const CartModal = ({showModal, setShowModal}: any) => {
  const context = useContext(AppContext);
  const charges = context.charges;
  const setCharges = context.setCharges;

  const cartItems = charges.map((item, index) => (
    <Box key={index}>
      <HStack space={3} justifyContent="space-between">
        <Text>{item.name == '_item' ? 'Item ' + (index + 1) : item.name}</Text>
        <Text>
          ${item.price.toFixed(2)} x {item.quantity}
        </Text>
      </HStack>
    </Box>
  ));

  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Cart</Modal.Header>
        <Modal.Body>
          <VStack space={3} pt={5}>
            {cartItems}
          </VStack>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group variant="ghost" space={2}>
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
