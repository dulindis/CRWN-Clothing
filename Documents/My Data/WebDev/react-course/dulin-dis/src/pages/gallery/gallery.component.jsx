import React, { Component } from 'react';
// import Artwork from '../artwork/artwork.component'
import GalleryItem from '../../components/gallery-item/gallery-item.component';



class Gallery extends Component {
    constructor(props){
        super(props);
        this.state={
            artworkList:[
                {title:'suflower',
                workId:1,
                technique:'oil on canvas',
                category:'painting'
                },
                {title:'violet',
                workId:2,
                technique:'acrylix on canvas',
                category:'painting'
                },
                {title:'burgoundy day',
                technique:'pencil',
                workId:3,
                category:'drawing'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>gallery</h1>
                { this.state.artworkList.length ? 
                (
                    this.state.artworkList.map(({workId, ...otherArtworkProps})=><GalleryItem key={workId} id={workId}
                     {...otherArtworkProps}/>)
                )
                : 'no artworks to diplay'}
            </div>
        )
    }
}

// const Gallery = (props) =>  {
//     console.log('gallery match url:', props.match.url);
//     console.log('gallery match param deailid:', props);
//     return (
//         <div>
//             <h1>gallery</h1>
//             <Link to={`${props.match.url}/5`}>Specific atrwork page</Link>
//         </div>
// );
// }

export default Gallery;
