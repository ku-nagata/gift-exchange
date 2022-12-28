import { HStack, Text, Switch } from "@chakra-ui/react";
import React from "react";

export const SelfGiftToggle = (props: { onChange: () => void }) => {
  return (
    <HStack fontSize="10px">
      <Text>自分との交換</Text>
      <Switch colorScheme="green" onChange={props.onChange} />
    </HStack>
  );
};
