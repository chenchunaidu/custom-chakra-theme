import { extendTheme } from '@chakra-ui/react';
import { Button } from './components/button/button';

const theme = extendTheme({
  components: {
    Button,
  },
  colors: {
    brand: {
      100: '#f7fafc',
      // ...
      900: '#1a202c',
    },
  },
});

export default theme;
