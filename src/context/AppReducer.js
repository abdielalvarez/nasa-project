import {
  CALL_TOAST,
  RESET_STATE,
  SET_DATA,
  SET_PERSISTENCE
} from "./actionTypes";

const handlePersistence = (stateToStringify) => {
  localStorage.setItem('state', JSON.stringify(stateToStringify));
}

const AppReducer = (state, action) => {
  switch (action.type) {
    case SET_PERSISTENCE:
      return action.payload
    case RESET_STATE:
      handlePersistence(action.payload)
      return action.payload
    case SET_DATA:
      const payloadData = {
        ...state,
        pagination: action.payload
      }
      handlePersistence(payloadData)
      return payloadData
    case CALL_TOAST:
      const payloadToast = {
        ...state,
        toast: {
          showToast: action.payload.showToast,
          toastMessage: action.payload.toastMessage,
          theme: action.payload.theme
        },
      }
      handlePersistence(payloadToast)
      return payloadToast
    default:
      return state;
  }
};

export default AppReducer;
