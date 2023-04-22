import { Button, Image, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const Card = ({ img, checkoutHandler }) => {
  const [amountQuery, setAmountQuery] = useState(1);

  return (
    <VStack>
      <Image src={img} boxSize={"64"} objectFit="cover" />
      <Text>₹{amountQuery}</Text>

      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          children="$"
        />
        <Input
          placeholder="Enter amount"
          onChange={(e) => setAmountQuery(e.target.value)}
        />
      </InputGroup>
      <Button onClick={() => checkoutHandler(amountQuery)}>Payment</Button>
    </VStack>
  );
};

export default Card;
