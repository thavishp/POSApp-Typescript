import React, {useContext, useState} from 'react';
import {
  Box,
  Center,
  Text,
  Button,
  Modal,
  useToast,
  HStack,
  VStack,
  Circle,
} from 'native-base';
import NumPad from './NumPad';
import CartModal from './CartModal';
import AppContext from '../AppContext';
import {useIsFocused} from '@react-navigation/native';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'CAD',
});

const Home = ({navigation}: any) => {
  const {charges, setCharges} = useContext(AppContext);

  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('0.00');

  const toast = useToast();
  const isFocused = useIsFocused();

  const buttonPressed = (inputChar: string): void => {
    if (inputChar === 'C') {
      setText('0.00');
    } else {
      if (text == '0.00') {
        setText(inputChar);
      } else if (/^\d+(.\d{0,2})?$/.test(text + inputChar)) {
        setText(text.concat(inputChar));
      }
    }
    console.log(text);
  };

  const submitItem = () => {
    // Take raw item value
    if (/^\d+(.\d{1,2})?$/.test(text) && text != '0.00') {
      setCharges(
        charges.concat([{name: '_item', price: Number(text), quantity: 1}]),
      );
    } else if (text != '0.00') {
      toast.show({
        status: 'error',
        description: 'Please enter a valid price',
        placement: 'top',
      });
      console.log(text);
    }
    setText('0.00');
  };

  const total = charges
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const itemCount = charges.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Box
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="flex-end"
      pt={5}
      safeAreaBottom>
      <CartModal showModal={showModal} setShowModal={setShowModal} />
      <Box flex={1} width="100%" px={10}>
        <VStack justifyContent="space-between" flex={1} pb={3}>
          <Center
            rounded="lg"
            border={1}
            borderColor="darkText"
            width="100%"
            height={10}>
            {/* TODO: add checkout ability */}
            <Text color="darkText">
              Total: {formatter.format(Number(total))}
            </Text>
          </Center>

          <HStack width="100%" justifyContent="space-around" space={3}>
            <Button
              size="lg"
              onPress={() => setShowModal(true)}
              bg="rgb(52, 152, 219)"
              _text={{color: 'lightText'}}
              alignItems="center"
              justifyContent="center">
              <HStack space={2} alignItems="center">
                <Text color="lightText" fontSize={17} bold>
                  View Cart
                </Text>
                <Circle size={6} bg="rgb(231, 76, 60)" m={0}>
                  <Text color="lightText">{itemCount}</Text>
                </Circle>
              </HStack>
            </Button>
            <Button
              size="lg"
              onPress={() => navigation.navigate('Items')}
              bg="rgb(52, 152, 219)"
              _text={{color: 'lightText'}}>
              Saved Items
            </Button>
          </HStack>

          <Text alignSelf="flex-end" pt={5} color="darkText" bold>
            {/* {Number.isNaN(Number(text)) ? text : formatter.format(Number(text))} */}
            {formatter.format(Number(text))}
          </Text>
        </VStack>
      </Box>
      <NumPad buttonPressed={buttonPressed} submit={submitItem} />
    </Box>
  );
};
export default Home;
