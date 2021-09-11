import React from 'react';
import {withRouter} from 'react-router-dom';


const GalleryItem = ({history, match, ...otherProps}) => {
    const {id, title, technique,category} = otherProps;
    console.log(otherProps);
    return (
        <div>
            <h1>gallery item no:{id}</h1>
            <h3>category: {category}</h3>

            <h2>title: {title}</h2>
            <h3>technique: {technique}</h3>
            <button onClick={()=>history.push(`${match.url}/${category}/${id}`)}>Specific atrwork page</button> 
            {/* <Link to={`${match.url}/${id}`}>Specific atrwork page</Link>*/}
        </div>
    )
};

export default withRouter(GalleryItem);
