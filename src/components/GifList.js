import React from 'react';

class GifList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.photos.map((photo) => (
                    <li key={photo.id}><img src={photo.images.original.url} alt={photo.slug} key={photo.id} /></li>
                ))}
            </ul>
        )
    }
};

export default GifList