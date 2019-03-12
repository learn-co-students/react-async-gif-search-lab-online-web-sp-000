import React from "react";

import NavBar from "./NavBar";
import GifListContainer from "./GifListContainer";

export default class App extends React.Component {
  render() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer />
    </div>
  )}
}

