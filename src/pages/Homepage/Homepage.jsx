import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";

const Homepage = () => {
    const [cats, setCats] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        axios("https://api.thecatapi.com/v1/images/search?limit=20&page=0")
            .then(({data}) => setCats(data))
    },[])
    const addToFavorite = (cat) => {
        dispatch({type: "ADD_TO_FAVORITES", payload: cat})
    }
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6">
                {
                    cats.map(cat => (
                        <div key={cat.id}
                             className="cat-card relative w-full h-48 bg-red-400 rounded-lg flex flex-col justify-center items-center">
                            <img className="object-center object-cover h-full w-full"
                                 src={cat.url}
                                 alt={cat.url}/>
                            <div className="favorite" onClick={() => addToFavorite(cat)}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Homepage;