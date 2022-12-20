import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Textarea, VStack, Text, Button, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [participants, setParticipants] = useState<Array<string>>([]);
  const [shuffled, setShuffled] = useState<Array<string>>([]);

  function shuffle(array: Array<string>) {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <Box w="100vw" h="100vh" px="20px" pb="50px">
      <VStack>
        <Text fontWeight="bold" fontSize="32px">
          gift exchange app
        </Text>
        <VStack align="left" w="100%" maxWidth="300px">
          <Text align="left">参加者</Text>
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
          onClick={() => {
            const tmp = participants.slice();
            setShuffled(shuffle(tmp));
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
          <HStack>
            <VStack>
              {participants.map((participant, index) => {
                return (
                  <HStack key={index}>
                    <Text>{participant}</Text>
                    <ArrowForwardIcon />
                  </HStack>
                );
              })}
            </VStack>
            <VStack>
              {shuffled.map((result, index) => {
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
