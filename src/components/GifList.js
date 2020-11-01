import React from 'react'

export default class GifList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <img src={this.props.url} /><br></br><br></br>
            </div>
            
            
        )
    }
}