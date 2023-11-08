import { initialState } from '../context/AppContext';
import { useAppContext } from '../context/actions/useAppContext';

export const useToast = () => {
    const { state, callToast } = useAppContext()
    const { toast } = state
    const {
        showToast,
        toastMessage,
        theme
    } = toast || initialState.toast
    const toastMessageError = 'Hubo un error en el servicio'
    const toastMessageSuccessful = 'Petición exitosa'
    const themeSuccessful = 'successful'
    const themeError = 'error'

    const handleShowToast = (message, theme) => {
        callToast(true, message, theme)
    };

    const handleCloseToast = () => {
        callToast(false, '', '')
    };

    const handleSuccesfulToast = () => {
        handleShowToast(toastMessageSuccessful, themeSuccessful)
    }

    const handleErrorToast = () => {
        handleShowToast(toastMessageError, themeError)
    }

    return {
        showToast,
        toastMessage,
        theme,
        handleCloseToast,
        handleSuccesfulToast,
        handleErrorToast
    }
}