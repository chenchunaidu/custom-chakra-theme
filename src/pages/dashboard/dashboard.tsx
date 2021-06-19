import React from 'react';
import {
  Wrap, IconButton, Button,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Demo from '../../components/demo';

export default function Dashboard() {
  return (
    <Wrap width="full" height="100vh" bg="gray.50" alignItems="center" p="4">
      <Demo
        DemoComp={Button}
        variants={['outline',
          'solid', 'link', 'unstyled', 'ghost', 'gradientSolid']}
        sizes={['sm', 'md', 'lg']}
        DemoCompChild="Button"
        Heading="Button"
      />
      <Demo
        DemoComp={IconButton}
        variants={['outline', 'solid', 'link', 'unstyled',
          'ghost', 'gradientSolid']}
        sizes={['sm', 'md', 'lg']}
        DemoCompChild={<SearchIcon />}
        Heading="Icon Button"
      />
    </Wrap>

  );
}
