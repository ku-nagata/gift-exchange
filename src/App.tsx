import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Textarea,
  VStack,
  Text,
  Button,
  HStack,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import "./App.css";

function App() {
  return (
    <Box w="100vw" h="100vh" px="20px" pb="50px">
      <VStack>
        <Text fontWeight="bold" fontSize="32px">
          gift exchange app
        </Text>
        <VStack align="left" w="100%" maxWidth="300px">
          <Text align="left">参加者</Text>
          <Textarea h="110px" placeholder={`太郎\n次郎\n花子\n...`} />
        </VStack>
        <Button>シャッフル</Button>
      </VStack>
      <Box h="50px" />
      <VStack>
        <Text fontWeight="bold" fontSize="24px">
          結果
        </Text>
        <VStack>
          {/* TODO: map */}
          <HStack>
            <Text>太郎</Text>
            <ArrowForwardIcon />
            <Text>花子</Text>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}

export default App;
