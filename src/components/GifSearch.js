import React from 'react'

export default class GifSearch  extends React.Component {


 

    render(){
        return(
            <div>
            <form onSubmit={e => this.props.setKeyword(e)}>
                <input type="text" ></input>
                <button type="submit">Log in</button>
            </form>
            </div>
       
        )
    }
}