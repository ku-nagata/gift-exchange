import { Box, Text, Textarea } from "@chakra-ui/react";
import React from "react";

export const TextareaWithPlaceholder = (props: {
  input: Array<string>;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  const inputExample = ["太郎", "次郎", "花子", "･･･"];
  return (
    <Box h="110px">
      <Box
        position="absolute"
        hidden={props.input.length !== 0}
        px="16px"
        py="8px"
        color="gray.400"
      >
        {inputExample.map((name, index) => {
          return <Text>{name}</Text>;
        })}
      </Box>
      <Textarea
        h="100%"
        // placeholder={`太郎\n次郎\n花子\n...`}
        onChange={(e) => {
          props.onChange(e);
        }}
      />
    </Box>
  );
};
