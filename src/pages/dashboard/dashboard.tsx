import React from 'react';
import { Button, Stack, Text } from '@chakra-ui/react';

export default function Dashboard() {
  return (
    <Stack>
      <Text>
        Outline button
      </Text>
      <Stack direction="row">
        <Button size="sm">
          Button
        </Button>
        <Button size="md">
          Button
        </Button>
        <Button size="lg">
          Button
        </Button>
      </Stack>
      <Text>
        Solid button
      </Text>
      <Stack direction="row">
        <Button size="sm" variant="solid">
          Button
        </Button>
        <Button size="md" variant="solid">
          Button
        </Button>
        <Button size="lg" variant="solid">
          Button
        </Button>
      </Stack>
      <Text>
        Ghost button
      </Text>
      <Stack direction="row">
        <Button size="sm" variant="ghost">
          Button
        </Button>
        <Button size="md" variant="ghost">
          Button
        </Button>
        <Button size="lg" variant="ghost">
          Button
        </Button>
      </Stack>
      <Text>
        Link button
      </Text>
      <Stack direction="row" spacing="6">
        <Button size="sm" variant="link">
          Button
        </Button>
        <Button size="md" variant="link">
          Button
        </Button>
        <Button size="lg" variant="link">
          Button
        </Button>
      </Stack>
      <Text>
        Unstyled button
      </Text>
      <Stack direction="row" spacing="6">
        <Button size="sm" variant="unstyled">
          Button
        </Button>
        <Button size="md" variant="unstyled">
          Button
        </Button>
        <Button size="lg" variant="unstyled">
          Button
        </Button>
      </Stack>
      <Text>
        Gradient solid button
      </Text>
      <Stack direction="row" spacing="6">
        <Button size="sm" variant="gradientSolid">
          Button
        </Button>
        <Button size="md" variant="gradientSolid">
          Button
        </Button>
        <Button size="lg" variant="gradientSolid">
          Button
        </Button>
      </Stack>
      <Text>
        Gradient solid button
      </Text>
      <Stack direction="row" spacing="6">
        <Button size="sm" variant="gradientLink">
          Button
        </Button>
        <Button size="md" variant="gradientLink">
          Button
        </Button>
        <Button size="lg" variant="gradientLink">
          Button
        </Button>
      </Stack>

    </Stack>

  );
}
