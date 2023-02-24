import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Top from "./components/Top";
import SearchGamerTag from "./components/SearchGamerTag";

import Main from "./pages/Main";
import Error from "./pages/Error";

export default function App() {
  const [gamerTag, setGamerTag] = useState("");
  const [gamerTagInformation, setGamerTagInformation] = useState([1]);
  return (
    <BrowserRouter>
      <Top></Top>
      <SearchGamerTag
        gamerTag={gamerTag}
        setGamerTag={setGamerTag}
      ></SearchGamerTag>
      <Routes>
        <Route exact path="/*" element={<Error />}></Route>
        <Route
          exact
          path="/"
          element={<Main gamerTagInformation={gamerTagInformation} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
