import React from 'react';
import {NavLink} from "react-router-dom";

const PaginationBtn = ({setPage}) => {
    return (
            <div className="pagination">
                {Array(Math.ceil(10)).fill(0).map((btnNum, idx) => (
                        <NavLink
                            to={idx + 1}
                            key={idx}
                            className="pagination-btn"
                            onClick={() => setPage(idx)}>{idx + 1}
                        </NavLink>
                    ))}
            </div>
    );
};

export default PaginationBtn;