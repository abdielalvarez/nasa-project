import { useState } from 'react'
import { useAppContext } from '../context/actions/useAppContext';
import { initialState } from '../context/AppContext';
import { useToast } from './useToast';

export const useManipulateInfo = () => {
    const { state, getData } = useAppContext();
    const {
        handleSuccesfulToast,
        handleErrorToast
    } = useToast()
    const { pagination } = state;
    const {
        contentPerPage,
        startDate,
        endDate
    } = pagination || initialState.pagination;
    const [loading, setLoading] = useState(false)

    const handlePageChange = async (page) => {
        try {
            setLoading(true)
            await getData(page, contentPerPage, startDate, endDate);
            setLoading(false)
            handleSuccesfulToast()
        } catch (error) {
            setLoading(false)
            handleErrorToast()
            throw error
        }
    };

    const handleContentPerPageChange = async (event) => {
        const contentPerPage = Number(event.target.value)
        try {
            setLoading(true)
            await getData(1, contentPerPage, startDate, endDate);
            setLoading(false)
            handleSuccesfulToast()
        } catch (error) {
            setLoading(false)
            handleErrorToast()
            throw error
        }
    };

    const handleStartDateChange = async (event) => {
        try {
            setLoading(true)
            await getData(1, contentPerPage, event.target.value, endDate);
            setLoading(false)
            handleSuccesfulToast()
        } catch (error) {
            setLoading(false)
            handleErrorToast()
            throw error
        }
    };

    const handleEndDateChange = async (event) => {
        try {
            setLoading(true)
            await getData(1, contentPerPage, startDate, event.target.value);
            setLoading(false)
            handleSuccesfulToast()
        } catch (error) {
            setLoading(false)
            handleErrorToast()
            throw error
        }
    };

    return {
        loading,
        handlePageChange,
        handleContentPerPageChange,
        handleStartDateChange,
        handleEndDateChange
    }
}