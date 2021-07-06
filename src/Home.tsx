import {
  Box,
  Center,
  Container,
  HStack,
  Text,
  VStack,
  Button,
} from 'native-base';
import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView>
      <Box
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="flex-end">
        <VStack space={3}>
          <HStack space={3} alignItems="center">
            <TouchableOpacity onPress={_ => console.log('1')}>
              <Center size={'24'} bg="dark.400" rounded="md" shadow={3}>
                1
              </Center>
            </TouchableOpacity>
            <TouchableOpacity onPress={_ => console.log('2')}>
              <Center bg="dark.400" size={'24'} rounded="md" shadow={3}>
                2
              </Center>
            </TouchableOpacity>
            <TouchableOpacity onPress={_ => console.log('3')}>
              <Center size={'24'} bg="dark.400" rounded="md" shadow={3}>
                3
              </Center>
            </TouchableOpacity>
          </HStack>
          <HStack space={3} alignItems="center">
            <TouchableOpacity onPress={_ => console.log('4')}>
              <Center size={'24'} bg="dark.400" rounded="md" shadow={3}>
                4
              </Center>
            </TouchableOpacity>
            <TouchableOpacity onPress={_ => console.log('5')}>
              <Center bg="dark.400" size={'24'} rounded="md" shadow={3}>
                5
              </Center>
            </TouchableOpacity>
            <TouchableOpacity onPress={_ => console.log('6')}>
              <Center size={'24'} bg="dark.400" rounded="md" shadow={3}>
                6
              </Center>
            </TouchableOpacity>
          </HStack>
          <HStack space={3} alignItems="center">
            <TouchableOpacity onPress={_ => console.log('7')}>
              <Center size={'24'} bg="dark.400" rounded="md" shadow={3}>
                7
              </Center>
            </TouchableOpacity>
            <TouchableOpacity onPress={_ => console.log('8')}>
              <Center bg="dark.400" size={'24'} rounded="md" shadow={3}>
                8
              </Center>
            </TouchableOpacity>
            <TouchableOpacity onPress={_ => console.log('9')}>
              <Center size={'24'} bg="dark.400" rounded="md" shadow={3}>
                9
              </Center>
            </TouchableOpacity>
          </HStack>
          <HStack space={3} alignItems="center">
            <TouchableOpacity onPress={_ => console.log('cleared')}>
              <Center size={'24'} bg="dark.400" rounded="md" shadow={3}>
                C
              </Center>
            </TouchableOpacity>
            <TouchableOpacity onPress={_ => console.log('0')}>
              <Center size={'24'} bg="dark.400" rounded="md" shadow={3}>
                0
              </Center>
            </TouchableOpacity>
            <TouchableOpacity onPress={_ => console.log('.')}>
              <Center size={'24'} bg="dark.400" rounded="md" shadow={3}>
                .
              </Center>
            </TouchableOpacity>
          </HStack>
          <Button
            size="md"
            variant="outline"
            onPress={_ => console.log('submitted')}>
            Add Item
          </Button>
        </VStack>
      </Box>
    </SafeAreaView>
  );
};
export default Home;
