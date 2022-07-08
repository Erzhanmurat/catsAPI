import React, {} from 'react';
import ReactPaginate from "react-paginate";

const PaginationBtn = ({setPage, pageCount}) => {
    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={setPage}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
            />
        </>
    );
};

export default PaginationBtn;