import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import "@fontsource/noto-sans-jp";

const fonts = {
  heading: `"Noto Sans JP", noto-sans-jp`,
  body: `"Noto Sans JP", noto-sans-jp`,
};

const theme = extendTheme({ fonts });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
