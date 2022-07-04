import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Favorites = () => {
    const {favorites} = useSelector((store) => store)
    const dispatch = useDispatch()
    const removeFromFavorites = (id) => {
        dispatch({type: "REMOVE_FROM_FAVORITES", payload: id})
    }
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6">
            {
                favorites.map((cat) => (
                    <div key={cat.id} className="cat-card relative w-full h-48 bg-red-400 rounded-lg flex flex-col justify-center items-center">
                        <img className="object-center object-cover h-full w-full"
                             src={cat.url}
                             alt={cat.url} />
                        <div className="favorite_added" onClick={() => removeFromFavorites(cat)}/>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Favorites;