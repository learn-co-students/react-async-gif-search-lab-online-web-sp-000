import React from 'react'

const SearchBar = (props) => {

return (
    <form onSubmit={props.handleSubmit}>
        <input name={props.searchName} value={props.searchValue} onChange={props.handleChange}></input>
        <button type="submit">Search</button>
    </form>
)
}

export default SearchBar
