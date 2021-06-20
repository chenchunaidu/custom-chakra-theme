import React from 'react';
import {
  Wrap, IconButton, Button, Tabs, TabList, Tab, TabPanel, TabPanels,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Demo from '../../components/demo';

export default function Dashboard() {
  return (
    <Wrap width="full" height="100vh" bg="gray.50" alignItems="center" p="4">
      <Demo
        DemoComp={Button}
        variants={['gradientSolid', 'gradientLink', 'outline',
          'solid', 'link', 'unstyled', 'ghost']}
        sizes={['sm', 'md', 'lg']}
        DemoCompChild="Button"
        Heading="Button"
      />
      <Demo
        DemoComp={IconButton}
        variants={['gradientSolid', 'outline', 'solid', 'link', 'unstyled',
          'ghost']}
        sizes={['sm', 'md', 'lg']}
        DemoCompChild={<SearchIcon />}
        Heading="Icon Button"
      />
      <Demo
        DemoComp={Tabs}
        variants={['solid-rounded-gradient', 'solid-gradient', 'enclosed', 'soft-rounded', 'line', 'enclosed-colored', 'solid-rounded']}
        sizes={['sm', 'md', 'lg']}
        DemoCompChild={(
          <>
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
              <Tab>Three</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </>
)}
        Heading="Tabs"
      />
    </Wrap>

  );
}
