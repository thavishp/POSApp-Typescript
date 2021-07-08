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
import NumPad from './NumPad';
const Home = () => {
  const context = useContext(AppContext);
  const charges = context.charges;
  const setCharges = context.setCharges;

  return (
    <Box
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="flex-end"
      safeArea>
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
            <Text color="primary.500">Charge: $0.00</Text>
          </Center>
        </Box>
      </Box>
      <NumPad buttonPressed={buttonPressed} submit={submitItem} />
    </Box>
  );
};
export default Home;
