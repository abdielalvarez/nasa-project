import React from "react";

const Pagination = ({
    totalPages,
    currentPage,
    onPageChange
}) => {

    const pageButtons = [];

    for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(
            <button
                key={i}
                className={`${i === currentPage ? "active" : ""} pagination-pages`}
                onClick={() => onPageChange(i)}
            >
                {i}
            </button>
        );
    }

    return (
        <div className="pagination-container">
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="pagination-button"
            >
                Previous
            </button>
            <div className="page-buttons">
                {pageButtons}
            </div>
            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="pagination-button"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
