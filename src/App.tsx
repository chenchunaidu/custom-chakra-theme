import * as React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import Dashboard from './pages/dashboard/dashboard';
import theme from './theme';

const App = () => (
  <ChakraProvider theme={theme}>
    <Dashboard />
  </ChakraProvider>
);

export default App;
