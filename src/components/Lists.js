import React from "react";
import Pagination from "./Pagination";
import { initialState } from "../context/AppContext";
import { useAppContext } from "../context/actions/useAppContext";
import DatePicker from "./DatePicker";
import CustomSelect from "./CustomSelect";
import Loader from "./Loader";
import Card from "./Card";
import { useManipulateInfo } from "../hook/useManipulateInfo";
import { useToast } from "../hook/useToast";
import Toast from "./Toast";

const Lists = () => {
    const {
        showToast,
        toastMessage,
        theme,
        handleCloseToast
    } = useToast()
    const {
        loading,
        handlePageChange,
        handleContentPerPageChange,
        handleStartDateChange,
        handleEndDateChange
    } = useManipulateInfo()
    const { state } = useAppContext();
    const { pagination } = state;
    const {
        assets,
        page,
        contentPerPage,
        totalPages,
        startDate,
        endDate
    } = pagination || initialState.pagination;

    return (
        <div className="lists-container">
            <div className="lists-wrapper">
                <h1 className="lists-title">
                    Busca una fecha para que
                    veas las imágenes enlistadas
                    de la NASA
                </h1>
                <Toast
                    show={showToast}
                    message={toastMessage}
                    onClose={handleCloseToast}
                    theme={theme}
                />
                <div className="asset-pickers">
                    <DatePicker
                        label='Fecha de inicio (o única)'
                        onChange={handleStartDateChange}
                        selectedDate={startDate}
                        dateToLimit={endDate}
                        type='start'
                    />
                    {startDate &&
                        <DatePicker
                            label='Fecha final'
                            onChange={handleEndDateChange}
                            selectedDate={endDate}
                            dateToLimit={startDate}
                            type='end'
                        />
                    }
                </div>
                {loading ?
                    <Loader /> :
                    <ul className="assets-list">
                        {assets?.length ? assets?.map((asset, index) => {
                            return (
                                <Card key={index} asset={asset} />
                            );
                        }) : null}
                    </ul>
                }

                {(!loading && assets?.length) ?
                    <div className="asset-pagination-container">
                        <CustomSelect
                            elementsPerPage={contentPerPage}
                            onChange={handleContentPerPageChange}
                        />
                        <div className="pagination-container">
                            <Pagination
                                totalPages={totalPages}
                                currentPage={page}
                                onPageChange={handlePageChange}
                                startDate={startDate}
                                endDate={endDate}
                            />
                        </div>
                    </div> : null
                }
            </div>
        </div>
    );
};

export default Lists;
