import React from 'react';

export default class GifList extends React.Component {

    render() {
        const createList = this.props.gifsList.map(gif => <li>{gif}</li>)

        return(
            <div>
                <ul>
                    {createList}
                </ul>
            </div>
        )
    }

}