import React, {useContext, useState} from 'react';
import {Box, Center, Text, Button, Modal, useToast} from 'native-base';
import NumPad from './NumPad';
import AppContext from '../AppContext';

const Home = () => {
  const context = useContext(AppContext);
  const charges = context.charges;
  const setCharges = context.setCharges;

  const [text, setText] = useState('0.00');

  const toast = useToast();

  const buttonPressed = (inputChar: string): void => {
    if (inputChar === 'C') {
      setText('0.00');
    } else {
      if (text == '0.00') {
        setText(inputChar);
      } else {
        setText(text.concat(inputChar));
      }
    }
  };

  const submitItem = () => {
    // Take raw item value
    if (/^\d+(.\d{1,2})?$/.test(text) && text != '0.00') {
      setCharges(charges.concat([{name: '_item', price: Number(text)}]));
    } else if (text != '0.00') {
      toast.show({
        status: 'error',
        description: 'Please enter a valid number',
        placement: 'top',
      });
    }
    setText('0.00');
  };

  const total = charges.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <Box
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="flex-end"
      pt={5}
      safeAreaBottom>
      <Box flex={1} width="100%" px={10} justifyContent="flex-start">
        <Button size="md" onPress={() => navigation.navigate('Items')}>
          Items List
        </Button>
        <Box justifyContent="flex-end" flex={1} py={5} alignItems="center">
          <Center
            rounded="lg"
            border={1}
            borderColor="primary.500"
            width="100%"
            height={10}>
            <Text color="primary.500">Charge: ${total}</Text>
          </Center>
          <Text alignSelf="flex-end" pt={5}>
            {text} CAD
          </Text>
        </Box>
      </Box>
      <NumPad buttonPressed={buttonPressed} submit={submitItem} />
    </Box>
  );
};
export default Home;
