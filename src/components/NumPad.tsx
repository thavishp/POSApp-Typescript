import {Center, HStack, VStack, Button} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const buttonColor = 'rgb(41, 128, 185)';

const NumPad = ({
  buttonPressed,
  submit,
}: {
  buttonPressed: (inputChar: string) => void;
  submit: () => void;
}) => (
  <VStack space={2}>
    <HStack space={2} alignItems="center">
      <TouchableOpacity onPress={() => buttonPressed('1')}>
        <Center
          size="110px"
          bg={buttonColor}
          rounded="md"
          shadow={3}
          _text={{
            color: 'lightText',
          }}>
          1
        </Center>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => buttonPressed('2')}>
        <Center
          size="110px"
          bg={buttonColor}
          rounded="md"
          shadow={3}
          _text={{
            color: 'lightText',
          }}>
          2
        </Center>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => buttonPressed('3')}>
        <Center
          size="110px"
          bg={buttonColor}
          rounded="md"
          shadow={3}
          _text={{
            color: 'lightText',
          }}>
          3
        </Center>
      </TouchableOpacity>
    </HStack>
    <HStack space={2} alignItems="center">
      <TouchableOpacity onPress={() => buttonPressed('4')}>
        <Center
          size="110px"
          bg={buttonColor}
          rounded="md"
          shadow={3}
          _text={{
            color: 'lightText',
          }}>
          4
        </Center>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => buttonPressed('5')}>
        <Center
          bg={buttonColor}
          size="110px"
          rounded="md"
          shadow={3}
          _text={{
            color: 'lightText',
          }}>
          5
        </Center>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => buttonPressed('6')}>
        <Center
          size="110px"
          bg={buttonColor}
          rounded="md"
          shadow={3}
          _text={{
            color: 'lightText',
          }}>
          6
        </Center>
      </TouchableOpacity>
    </HStack>
    <HStack space={2} alignItems="center">
      <TouchableOpacity onPress={() => buttonPressed('7')}>
        <Center
          size="110px"
          bg={buttonColor}
          rounded="md"
          shadow={3}
          _text={{
            color: 'lightText',
          }}>
          7
        </Center>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => buttonPressed('8')}>
        <Center
          bg={buttonColor}
          size="110px"
          rounded="md"
          shadow={3}
          _text={{
            color: 'lightText',
          }}>
          8
        </Center>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => buttonPressed('9')}>
        <Center
          size="110px"
          bg={buttonColor}
          rounded="md"
          shadow={3}
          _text={{
            color: 'lightText',
          }}>
          9
        </Center>
      </TouchableOpacity>
    </HStack>
    <HStack space={2} alignItems="center">
      <TouchableOpacity onPress={() => buttonPressed('C')}>
        <Center
          size="110px"
          bg={buttonColor}
          rounded="md"
          shadow={3}
          _text={{
            color: 'lightText',
          }}>
          C
        </Center>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => buttonPressed('0')}>
        <Center
          size="110px"
          bg={buttonColor}
          rounded="md"
          shadow={3}
          _text={{
            color: 'lightText',
          }}>
          0
        </Center>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => buttonPressed('.')}>
        <Center
          size="110px"
          bg={buttonColor}
          rounded="md"
          shadow={3}
          _text={{
            color: 'lightText',
          }}>
          .
        </Center>
      </TouchableOpacity>
    </HStack>
    <Button size="md" onPress={submit} bg="green.500">
      Add Item
    </Button>
  </VStack>
);
export default NumPad;
