import { VStack, Text, Button, HStack, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Result } from "./components/Result";
import { shuffled } from "./utils";
import { TextareaWithPlaceholder } from "./components/TextareaWithPlaceholder";
import { SelfGiftToggle } from "./components/SelfGiftToggle";

function App() {
  const [isSelfGift, setIsSelfGift] = useState<boolean>(false);
  const [participants, setParticipants] = useState<Array<string>>([]);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();
  const [shuffledResult, setShuffledResult] = useState<Array<string>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const rows = e.target.value.split(/\n/);
    setParticipants(rows.filter((row) => row !== ""));
  };

  function startShuffle() {
    setIntervalId(setInterval(() => updateShuffle(), 50));
  }
  function stopShuffle() {
    clearInterval(intervalId);
  }
  function updateShuffle() {
    setShuffledResult(shuffled(participants.slice(), isSelfGift));
  }

  return (
    <>
      <Header />
      <VStack px="20px" mt="16px" mb="36px">
        <VStack align="left" w="100%" maxWidth="300px" mb="16px">
          <HStack align="end">
            <Text align="left">参加者</Text>
            <Spacer />
            <SelfGiftToggle onChange={() => setIsSelfGift(!isSelfGift)} />
          </HStack>
          <TextareaWithPlaceholder
            input={participants}
            onChange={(e) => handleChange(e)}
          />
        </VStack>
        <Button
          w="150px"
          colorScheme="green"
          disabled={participants.length <= 1}
          onClick={() => {
            isShuffling ? stopShuffle() : startShuffle();
            setIsShuffling(!isShuffling);
          }}
        >
          {isShuffling ? "ストップ" : "抽選スタート"}
        </Button>
      </VStack>
      <Result originals={participants} results={shuffledResult} />
    </>
  );
}

export default App;
