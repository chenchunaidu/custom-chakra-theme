import React, { useState } from 'react';
import {
  RadioGroup, Radio, Stack, Box, Wrap, Select, Text,
} from '@chakra-ui/react';

type DemoCompProps = {
    variant:string;
    size:string;
    children:string|React.ReactNode;
    'aria-label':string;
}

export declare interface DemoProps {
    variants:string[];
    sizes:string[];
    DemoCompChild:string|React.ReactNode;
    DemoComp:React.VFC<DemoCompProps>;
    Heading?:string;
    ariaLabel?:string;
  }

export default function Demo({
  variants, sizes, DemoComp, DemoCompChild, Heading, ariaLabel,
}:DemoProps) {
  const [selectedVariant, setSelectedVariant] = useState(variants.length ? variants[0] : '');
  const [selectedSize, setSelectedSize] = useState(sizes.length ? sizes[0] : '');

  return (
    <Stack boxShadow="lg" borderRadius="lg" m="4" p="8" bg="white" direction="row" minWidth="md">
      <Stack width="60%" alignItems="center" justifyContent="center">
        <Box>
          <DemoComp variant={selectedVariant} size={selectedSize} aria-label={ariaLabel || ''}>
            {DemoCompChild}
          </DemoComp>
        </Box>
      </Stack>
      <Stack width="40%">
        <Text fontSize="lg" fontWeight="semibold">
          {Heading}
        </Text>
        <Box>
          <Text>
            Variant
          </Text>
          <Select onChange={(e) => { setSelectedVariant(e.target.value); }}>
            {variants.map((variant) => (
              <option value={variant}>
                {variant}
              </option>
            ))}

          </Select>
        </Box>
        <RadioGroup onChange={setSelectedSize} variant={selectedSize}>
          <Text>
            Size
          </Text>
          <Wrap direction="row">
            {sizes.map((size) => (
              <Radio value={size}>
                {size}
              </Radio>
            ))}
          </Wrap>
        </RadioGroup>
      </Stack>
    </Stack>
  );
}
