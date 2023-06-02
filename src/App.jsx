import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Top from "./components/Top";
import SearchGamerTag from "./components/SearchGamerTag";

import Main from "./pages/Main";
import Error from "./pages/Error";

export default function App() {
  const [gamerTag, setGamerTag] = useState("");
  const [achievementsList, setAchievementsList] = useState([
    // {
    //   titleId: "1667881927",
    //   name: "Redfall",
    //   type: "Game",
    //   displayImage:
    //     "http://store-images.s-microsoft.com/image/apps.5939.14091188428798620.2f105d2c-1b7f-4fd0-b12e-5483087f47d1.57847b73-9461-4b45-b70e-8cb1e89da909",
    //   achievement: {
    //     currentAchievements: 33,
    //     totalAchievements: 0,
    //     currentGamerscore: 425,
    //     totalGamerscore: 1000,
    //     progressPercentage: 42,
    //   },
    //   isGamePass: true,
    //   lastTimePlayed: "2023-06-01T01:03:04.4621299Z",
    //   xboxLiveTier: "Full",
    // },
    // {
    //   titleId: "724369121",
    //   name: "Saints Row",
    //   type: "Game",
    //   displayImage:
    //     "http://store-images.s-microsoft.com/image/apps.2667.70569220189490890.4a89e742-c178-463b-9a39-dec7d28e538f.6b2a69bd-d890-4a4b-9dc6-895d95aae3dd",
    //   achievement: {
    //     currentAchievements: 13,
    //     totalAchievements: 0,
    //     currentGamerscore: 165,
    //     totalGamerscore: 1075,
    //     progressPercentage: 15,
    //   },
    //   isGamePass: false,
    //   lastTimePlayed: "2023-05-26T00:51:03.7134298Z",
    //   xboxLiveTier: "Full",
    // },
  ]);
  const [gamerTagInformation, setGamerTagInformation] = useState({
    // displayPicRaw:
    //   "https://images-eds-ssl.xboxlive.com/image?url=wHwbXKif8cus8csoZ03RW_ES.ojiJijNBGRVUbTnZKvlHqqbdJfZWiFtiClZ7rrQayt5_o4eXU3ic46F1h426ULwzYYSGvC0kehXvUOPvFpIWW0jS3BILHGt.efjuOZ3Z38zr9cBxYdUP3gIlEo_lQhcFQZfYplAKboi_.d2Ew7jYHzXW6LPvb7tcbpT6uGr&format=png",
    // gamertag: "xFeLiPexTKC",
    // gamerScore: "320815",
    // accountTier: "Silver",
    // hasGamePass: false,
    // followerCount: 1178,
    // followingCount: 446,
  });
  return (
    <BrowserRouter>
      <Top></Top>
      <SearchGamerTag
        gamerTag={gamerTag}
        setGamerTag={setGamerTag}
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
