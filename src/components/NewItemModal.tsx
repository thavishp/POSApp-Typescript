import {Button, Input, Modal, useToast} from 'native-base';
import React, {useState} from 'react';

const NewItemModal = ({showModal, setShowModal, setItems}: any) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const toast = useToast();

  const createItem = () => {
    if (
      /^\d+(.\d{1,2})?$/.test(itemPrice) &&
      itemPrice != '0.00' &&
      itemName.trim() != ''
    ) {
      setItems((prev: any) =>
        prev.concat([{name: itemName, price: Number(itemPrice)}]),
      );
      setItemName('');
      setItemPrice('');
      setShowModal(false);
    } else {
      toast.show({
        status: 'error',
        description: 'Please enter a valid name and price',
        placement: 'top',
      });
    }
  };

  const closeModal = () => {
    setItemName('');
    setItemPrice('');
    setShowModal(false);
  };

  return (
    <Modal isOpen={showModal} onClose={closeModal} avoidKeyboard>
      <Modal.Content maxWidth="400px" px={0}>
        <Modal.CloseButton />
        <Modal.Header pl={5}>New Item</Modal.Header>
        <Modal.Body>
          <Input
            w="100%"
            my={1}
            mx={3}
            placeholder="Item Name"
            value={itemName}
            onChange={event => setItemName(event.nativeEvent.text)}
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />
          <Input
            w="100%"
            my={1}
            mx={3}
            placeholder="Item Price"
            value={itemPrice}
            keyboardType="numeric"
            onChange={event => setItemPrice(event.nativeEvent.text)}
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button.Group variant="ghost" space={2}>
            <Button onPress={() => createItem()}>Create Item</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
export default NewItemModal;
