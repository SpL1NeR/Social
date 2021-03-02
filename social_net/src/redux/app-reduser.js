import { getAuthUserData } from "./auth-reduser";

const SET_INITIALIZED_Success = 'SET_INITIALIZED_Success';


let initialState = {
    initialized: false
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED_Success:

            return {
                ...state,
               initialized: true
            }

        default:
            return state;
    }
}


export const initializedSuccess = (initialized) => ({
    type: SET_INITIALIZED_Success})

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData())

  Promise.all([ promise])
  .then(() => {
  dispatch(initializedSuccess)
   })
}

export default AppReducer;