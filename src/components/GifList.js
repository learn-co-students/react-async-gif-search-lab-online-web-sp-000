import React from 'react'

class GifList extends React.Component {

    render() {
        return (
            <React.Fragment>
                <ul>
                    {this.props.pulledGiphs.map((giph) => {
                        return (
                            <li>
                                <img src={giph} alt=""></img>
                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
         
        )
    }
}

export default GifList 

