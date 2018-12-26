import React, { Component } from "react";

// class GifList extends Component {
//   render(props) {
//     return (
//       <React.Fragment>
//         <ul>
//           {props.gifs.map(gif => (
//             <li>{gif.images.original.url}</li>
//           ))}
//         </ul>
//       </React.Fragment>
//     );
//   }

const GifList = props => {
  debugger;
  return (
    <ul>
      {props.gifs.map(gif => (
        <li>{gif.images.original.url}</li>
      ))}
    </ul>
  );
};

export default GifList;

{
  /* <GifList /> is a presentational component.It receives data from it's props 
and renders html given the input data. It can render a top level <ul> with each gif 
as an <li>. */
}
