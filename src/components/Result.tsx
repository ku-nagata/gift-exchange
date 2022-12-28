import { HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";

export const Result = (props: {
  originals: Array<string>;
  results: Array<string>;
}) => {
  return (
    <VStack>
      <Text fontWeight="bold" fontSize="24px">
        結果
      </Text>
      <VStack>
        <HStack fontSize="16px">
          <VStack>
            {props.originals.map((original, index) => {
              return (
                <HStack key={index}>
                  <Text>{original}</Text>
                </HStack>
              );
            })}
          </VStack>
          <VStack>
            {props.originals.map((_, index) => (
              <Text key={index}>→</Text>
            ))}
          </VStack>
          <VStack>
            {props.results.map((result, index) => {
              return <Text key={index}>{result}</Text>;
            })}
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};
