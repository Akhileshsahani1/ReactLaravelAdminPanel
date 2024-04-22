import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

export const UserPagination = ({user}) => {

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 5;
    
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    const currentItems = user.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(user.length / 5);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * 5) % user.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    return (
        <>
            <user currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    );
}