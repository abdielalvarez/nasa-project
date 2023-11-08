import { useContext, useEffect } from 'react';
import { AppContext, initialState } from '../AppContext';
import {
    SET_DATA,
    SET_PERSISTENCE,
    RESET_STATE,
    CALL_TOAST
} from '../actionTypes';
import ApiService from '../../services/ApiService';
import { paginateData } from '../../utils/converters';

export const useAppContext = () => {
    const { state, dispatch } = useContext(AppContext);
    const apiService = new ApiService()

    useEffect(() => {
        const state = localStorage.getItem('state');
        if (state) {
            const parsedState = JSON.parse(state);
            dispatch({ type: SET_PERSISTENCE, payload: parsedState });
        }
    }, []);

    const resetData = () => {
        dispatch({ type: RESET_STATE, payload: initialState });
    }

    const getData = async (page, contentPerPage, startDate, endDate) => {
        try {
            const data = await apiService.getInfo(startDate, endDate)
            const parsedData = paginateData(
                data,
                contentPerPage,
                page,
                startDate,
                endDate
            )
            dispatch({ type: SET_DATA, payload: parsedData });
            return parsedData
        } catch (error) {
            throw error
        }
    };

    const callToast = (showToast, toastMessage, theme) => {
        dispatch({
            type: CALL_TOAST,
            payload: {
                showToast,
                toastMessage,
                theme
            }
        });
    }

    return {
        state,
        getData,
        resetData,
        callToast
    };
};

