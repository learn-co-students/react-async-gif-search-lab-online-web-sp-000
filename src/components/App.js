import React from "react";
import GifListContainer from "../containers/GifListContainer";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer />
    </div>
  );
};
export default App;

// m1gj75VMX4u5lIn7cx7WVwGKtCtbB99c
// https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=m1gj75VMX4u5lIn7cx7WVwGKtCtbB99c&rating=g
