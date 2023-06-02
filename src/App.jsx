import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Top from "./components/Top";
import SearchGamerTag from "./components/SearchGamerTag";
import Main from "./pages/Main";
import Error from "./pages/Error";

export default function App() {
  const [gamerTag, setGamerTag] = useState("");
  const [achievementsList, setAchievementsList] = useState([]);
  const [gamerTagInformation, setGamerTagInformation] = useState({});

  return (
    <BrowserRouter>
      <Top></Top>
      <SearchGamerTag
        gamerTag={gamerTag}
        setGamerTag={setGamerTag}
        setGamerTagInformation={setGamerTagInformation}
        setAchievementsList={setAchievementsList}
      ></SearchGamerTag>
      <Routes>
        <Route path="/*" element={<Error />}></Route>
        <Route
          path="/"
          element={
            <Main
              gamerTagInformation={gamerTagInformation}
              achievementsList={achievementsList}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
