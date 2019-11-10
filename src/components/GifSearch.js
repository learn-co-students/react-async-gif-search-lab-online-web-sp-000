import React from 'react';

const GifSearch = ({ handleSubmit, onChange }) => {
  return (
    <div>
      <form onSubmit={event => handleSubmit(event)}>
        <label htmlFor="text">Enter a serach term:</label>
        <br></br>
        <input
          type="text"
          onChange={event => onChange(event)}
        />
        <br></br>
        <button type="submit" className="btn btn-success">Find Gifs</button>
      </form>
    </div>
  );
}

export default GifSearch;
