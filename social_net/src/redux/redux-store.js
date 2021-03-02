import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./messanges-reduser";
import sidebarReducer from "./sidebar-reduser";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reduser";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer } from "redux-form"
import AppReducer from "./app-reduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    messangesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: AppReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;