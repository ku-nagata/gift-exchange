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
  const [shuffledResult, setShuffledResult] = useState<Array<string>>([]);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

  const handleSelfGiftToggle = () => {
    setIsSelfGift(!isSelfGift);
    setShuffledResult([]);
    stopShuffle();
  };

  const handleTextareaWithPlaceholder = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const rows = e.target.value.split(/\n/);
    setParticipants(rows.filter((row) => row !== ""));
    setShuffledResult([]);
    stopShuffle();
  };

  function startShuffle() {
    setIntervalId(setInterval(() => updateShuffle(), 50));
  }
  function stopShuffle() {
    clearInterval(intervalId);
    setIntervalId(undefined);
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
            <SelfGiftToggle onChange={() => handleSelfGiftToggle()} />
          </HStack>
          <TextareaWithPlaceholder
            input={participants}
            onChange={(e) => handleTextareaWithPlaceholder(e)}
          />
        </VStack>
        <Button
          w="150px"
          colorScheme={intervalId === undefined ? "green" : "red"}
          disabled={participants.length <= 1}
          onClick={() => {
            intervalId === undefined ? startShuffle() : stopShuffle();
          }}
        >
          {intervalId === undefined ? "抽選スタート" : "ストップ"}
        </Button>
      </VStack>
      <Result originals={participants} results={shuffledResult} />
    </>
  );
}

export default App;
