import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";
import Spinner from "../../components/Spinner";
import PaginationBtn from "../../components/PaginationBtn";
import CatCard from "../../components/CatCard";

const Homepage = () => {
    const [cats, setCats] = useState([])
    const [page, setPage] = useState(0)
    const [isLoader, setIsLoader] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        axios(
            `https://api.thecatapi.com/v1/images/search?limit=15&page=${page + 1}&order=Desc`
        ).then((res) => {
            setCats(res.data);
            setIsLoader(false);
        });
    }, [page]);
    const addToFavorite = (cat) => {
        dispatch({type: "ADD_TO_FAVORITES", payload: cat})
    }
    if (isLoader) {
        return <Spinner />
    }
    return (
        <div>
            <PaginationBtn setPage={setPage}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6">
                {
                    cats.map(cat => (
                        <CatCard key={cat.id}
                                 cat={cat} action={addToFavorite}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Homepage;