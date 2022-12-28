import { Box, VStack, Text, Button, HStack, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Result } from "./components/Result";
import { shuffled } from "./utils";
import { TextareaWithPlaceholder } from "./components/TextareaWithPlaceholder";
import { SelfGiftToggle } from "./components/SelfGiftToggle";

function App() {
  const [selfGift, setSelfGift] = useState<boolean>(false);
  const [participants, setParticipants] = useState<Array<string>>([]);
  const [shuffledResult, setShuffledResult] = useState<Array<string>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const rows = e.target.value.split(/\n/);
    setParticipants(rows.filter((row) => row !== ""));
  };

  return (
    <>
      <Header />
      <VStack px="20px" pt="8px" mb="50px">
        <VStack align="left" w="100%" maxWidth="300px">
          <HStack align="end">
            <Text align="left">参加者</Text>
            <Spacer />
            <SelfGiftToggle onChange={() => setSelfGift(!selfGift)} />
          </HStack>
          <TextareaWithPlaceholder
            input={participants}
            onChange={(e) => handleChange(e)}
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
      <Result originals={participants} results={shuffledResult} />
    </>
  );
}

export default App;
