import React from 'react';

import NavBar from './NavBar';
// the App component should render out the GifListContainer component
import GifListContainer from './GifListContainer';

  const App = () => {
    return (
      <div>
          <div>
              <NavBar color='black' title="Giphy Search" />
          </div>
          <div>
            <GifListContainer />
          </div>
      </div>
    )
  }



    // render() {
    //   return (
    //     <div>
    //       < GifListContainer />
    //     </div>
    //   )
    // }


export default App
//In our app, the <GifListContainer /> will be responsible for fetching the data from the giphy API, storing the first 3 gifs from the response in its component state, and passing that data down to its child, the <GifList> component, as a prop.

//It will also render a <GifSearch /> component that renders the form. <GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.
