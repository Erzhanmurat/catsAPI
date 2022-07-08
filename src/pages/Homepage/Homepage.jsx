import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";
import Spinner from "../../components/Spinner";
import PaginationBtn from "../../components/PaginationBtn";
import CatCard from "../../components/CatCard";
import {toast, ToastContainer, Zoom} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Homepage = () => {
    const [cats, setCats] = useState([])
    const [pageCount, setPageCount] = useState(null);
    const [page, setPage] = useState(0)
    const [isLoader, setIsLoader] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        axios(
            `https://api.thecatapi.com/v1/images/search?limit=15&page=${page + 1}&order=Desc`, {
                headers: {
                    "x-api-key": "1cf74370-62fe-4b4b-b576-5db0ddecc56f"
                }
            }
        ).then((res) => {
            setCats(res.data)
            setIsLoader(false)
            setPageCount(res.headers["pagination-count"] / res.headers["pagination-limit"])
        });
    }, [page]);
    const addToFavorite = (cat) => {
        dispatch({type: "ADD_TO_FAVORITES", payload: cat})
        toast.success("liked")
    }
    if (isLoader) {
        return <Spinner/>
    }
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6">
                {
                    cats.map(cat => (
                        <CatCard key={cat.id}
                                 cat={cat} action={addToFavorite}/>
                    ))
                }
            </div>
            <PaginationBtn setPage={setPage} pageCount={pageCount}/>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition={Zoom}
            />
        </div>
    );
};

export default Homepage;