import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Textarea,
  VStack,
  Text,
  Button,
  HStack,
  Switch,
  Spacer,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [participants, setParticipants] = useState<Array<string>>([]);
  const [shuffledResult, setShuffledResult] = useState<Array<string>>([]);
  const [selfGift, setSelfGift] = useState<boolean>(false);

  function shuffledArray(array: Array<string>): Array<string> {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function existSameIndexValue(
    array1: Array<string>,
    array2: Array<string>
  ): boolean {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        return true;
      }
    }
    return false;
  }

  function shuffled(
    array: Array<string>,
    selfGift: boolean = false
  ): Array<string> {
    while (1) {
      const tmp = shuffledArray(array.slice());
      if (!selfGift && existSameIndexValue(array, tmp)) {
        continue;
      }
      return tmp;
    }
    return [];
  }

  return (
    <Box w="100vw" h="100vh" px="20px" pb="50px">
      <VStack>
        <Text
          w="100vw"
          py="8px"
          align="center"
          fontWeight="bold"
          fontSize="32px"
          bg="green.500"
          color="red.500"
        >
          プレゼント🎁交換
        </Text>
        <Box h="8px" />
        <VStack align="left" w="100%" maxWidth="300px">
          <HStack align="end">
            <Text align="left">参加者</Text>
            <Spacer />
            <HStack fontSize="10px">
              <Text>自分との交換</Text>
              <Switch
                colorScheme="green"
                onChange={() => setSelfGift(!selfGift)}
              />
            </HStack>
          </HStack>
          <Textarea
            h="110px"
            placeholder={`太郎\n次郎\n花子\n...`}
            onChange={(text) => {
              const rows = text.target.value.split(/\n/);
              setParticipants(rows.filter((row) => row !== ""));
            }}
          />
        </VStack>
        <Button
          colorScheme="green"
          disabled={participants.length <= 1}
          onClick={() => {
            setShuffledResult(shuffled(participants.slice(), selfGift));
          }}
        >
          シャッフル
        </Button>
      </VStack>
      <Box h="50px" />
      <VStack>
        <Text fontWeight="bold" fontSize="24px">
          結果
        </Text>
        <VStack>
          <HStack fontSize="24px">
            <VStack>
              {participants.map((participant, index) => {
                return (
                  <HStack key={index}>
                    <Text>{participant}</Text>
                  </HStack>
                );
              })}
            </VStack>
            <VStack>
              {participants.map((_, index) => (
                <Text key={index}>→</Text>
              ))}
            </VStack>
            <VStack>
              {shuffledResult.map((result, index) => {
                return <Text key={index}>{result}</Text>;
              })}
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}

export default App;
