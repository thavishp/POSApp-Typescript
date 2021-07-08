import {Center, HStack, VStack, Button} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const NumPad = ({
  buttonPressed,
  submit,
}: {
  buttonPressed: (inputChar: string) => void;
  submit: () => void;
}) => (
  <VStack space={3}>
    <HStack space={3} alignItems="center">
      <TouchableOpacity onPress={_ => buttonPressed('1')}>
        <Center size={'24'} bg="dark.400" rounded="md" shadow={3}>
          1
        </Center>
      </TouchableOpacity>
      <TouchableOpacity onPress={_ => buttonPressed('2')}>
        <Center bg="dark.400" size={'24'} rounded="md" shadow={3}>
          2
        </Center>
      </TouchableOpacity>
      <TouchableOpacity onPress={_ => buttonPressed('3')}>
        <Center size={'24'} bg="dark.400" rounded="md" shadow={3}>
          3
        </Center>
      </TouchableOpacity>
    </HStack>
    <HStack space={3} alignItems="center">
      <TouchableOpacity onPress={_ => buttonPressed('4')}>
        <Center size={'24'} bg="dark.400" rounded="md" shadow={3}>
          4
        </Center>
      </TouchableOpacity>
      <TouchableOpacity onPress={_ => buttonPressed('5')}>
        <Center bg="dark.400" size={'24'} rounded="md" shadow={3}>
          5
        </Center>
      </TouchableOpacity>
      <TouchableOpacity onPress={_ => buttonPressed('6')}>
        <Center size={'24'} bg="dark.400" rounded="md" shadow={3}>
          6
        </Center>
      </TouchableOpacity>
    </HStack>
    <HStack space={3} alignItems="center">
      <TouchableOpacity onPress={_ => buttonPressed('7')}>
        <Center size={'24'} bg="dark.400" rounded="md" shadow={3}>
          7
        </Center>
      </TouchableOpacity>
      <TouchableOpacity onPress={_ => buttonPressed('8')}>
        <Center bg="dark.400" size={'24'} rounded="md" shadow={3}>
          8
        </Center>
      </TouchableOpacity>
      <TouchableOpacity onPress={_ => buttonPressed('9')}>
        <Center size={'24'} bg="dark.400" rounded="md" shadow={3}>
          9
        </Center>
      </TouchableOpacity>
    </HStack>
    <HStack space={3} alignItems="center">
      <TouchableOpacity onPress={_ => buttonPressed('C')}>
        <Center size={'24'} bg="dark.400" rounded="md" shadow={3}>
          C
        </Center>
      </TouchableOpacity>
      <TouchableOpacity onPress={_ => buttonPressed('0')}>
        <Center size={'24'} bg="dark.400" rounded="md" shadow={3}>
          0
        </Center>
      </TouchableOpacity>
      <TouchableOpacity onPress={_ => buttonPressed('.')}>
        <Center size={'24'} bg="dark.400" rounded="md" shadow={3}>
          .
        </Center>
      </TouchableOpacity>
    </HStack>
    <Button size="md" onPress={submit}>
      Add Item
    </Button>
  </VStack>
);
export default NumPad;
