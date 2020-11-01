import React from 'react'

export default class GifSearch extends React.Component {

    formHandler = (event) => {

        event.preventDefault()

        this.setState({
            search: event.target['search'].value
        })

        this.props.query(event.target['search'].value)
        //console.log(event);
        //debugger
    }

    render () {
        return (
            <div class="search">
                <form onSubmit={event => this.formHandler(event)}>

                    <input type="text" name="search"></input>

                    <input type="submit"></input>
                </form><br></br>
            </div>
        )
    }

}