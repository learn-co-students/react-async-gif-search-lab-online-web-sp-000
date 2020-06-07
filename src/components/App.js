import React from "react";
import GifListContainer from "../containers/GifListContainer";
import NavBar from "./NavBar";

// Your top level component will be the <App /> component-- no surprises there! It will be responsible for rendering the <NavBar /> component (this component is already provided for you, note the project has bootstrap loaded in) and the <GifListContainer /> component
// the App component should render out the GifListContainer component

const App = () => {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer />
    </div>
  );
};

export default App;
