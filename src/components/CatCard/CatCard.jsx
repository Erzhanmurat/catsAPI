import React from 'react';

const CatCard = ({cat, action}) => {
    return (
        <div>
            <div
                className="cat-card relative w-full h-48 bg-red-400 rounded-lg flex flex-col justify-center items-center">
                <img className="object-center object-cover h-full w-full"
                     src={cat.url}
                     alt={cat.url}/>
                <div className="favorite" onClick={() => action(cat)}/>
            </div>
        </div>
    );
};

export default CatCard;