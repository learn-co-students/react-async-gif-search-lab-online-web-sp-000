import React from "react";

const GifList = props => {
  console.log(props.gifs);
  return (
    <ul>
      {props.gifs.map(gif => (
        <li key={gif.id}>
          <img src={gif.images.original.url} alt="gif" />
        </li>
      ))}
    </ul>
  );
};

export default GifList;

/* <GifList /> is a presentational component.It receives data from it's props 
and renders html given the input data. It can render a top level <ul> with each gif 
as an <li>. */

// Note: Notice there are many URL keys on each image object.The first url key, just
// below type, id, and slug will bring you to the images page on[giphy.com][giphy.com].
// We only want the path to the actual image, which found at images.original.url.
// Using other url keys may cause CORS issues.
