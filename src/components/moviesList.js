import React from 'react';

const moviesList = (props) => {
    console.log(props)
    
    const renderMovies = (movies) => (
        movies ?
        movies.map((item,i) =>(
            <div key={i}>
                {item.name}
            </div>
        )):
        null
    )

    return (
        <div>
            {renderMovies(props.data.movies)}
        </div>
    );
};

export default moviesList;