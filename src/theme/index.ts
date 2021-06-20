import { extendTheme } from '@chakra-ui/react';
import Tabs from './components/tabs';
import Button from './components/button/button';
import IconButton from './components/icon-button';

const theme = extendTheme({
  components: {
    Button,
    IconButton,
    Tabs,
  },
});

export default theme;
