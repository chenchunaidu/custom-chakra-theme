import { extendTheme } from '@chakra-ui/react';
import Button from './components/button/button';
import IconButton from './components/icon-button';

const theme = extendTheme({
  components: {
    Button,
    IconButton,
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
