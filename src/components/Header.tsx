import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <Box h="64px">
      <Text
        position="fixed"
        zIndex="banner"
        top={0}
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
    </Box>
  );
};
