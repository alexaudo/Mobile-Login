import React from "react";
import { createRoot } from "react-dom/client";
// eslint-disable-next-line

import GlobalStyle from "./styles/globalStyle";
import Routes from './routes'

createRoot(document.getElementById("root")).render(
<>
 <GlobalStyle />
 <Routes />
</>
);


