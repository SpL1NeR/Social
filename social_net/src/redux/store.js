import postReduser from "./post-reduser";
import messanegesReduser from "./messanges-reduser";
import sidebarReduser from "./sidebar-reduser";

let store = {
  _state: {

    postsPage: {
      posts: [
        { id: 1, message: "hi people", likeCount: 12 },
        { id: 2, message: "hi people", likeCount: 13 }
      ],
      newPostText: '1'
    },
    messangesPage: {
      messanges: [
        { id: 1, message: "hi people" },
        { id: 2, message: "hello" },
        { id: 3, message: "what`s up?" }
      ],
      dialog: [
        { name: "Olexsij", id: 1 },
        { name: "Bohdan", id: 2 },
        { name: "Misha", id: 3 },
        { name: "Vitalik", id: 4 },
        { name: "Andryy", id: 5 },
        { name: "Oleh", id: 6 }
      ],
      newMessageBody: ""
    },
    sidebar:{}
  },
  _callSubscriber(observer) {
  },
  getState() {
    return this._state;
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },


  dispatch(action) {

    this._state.postsPage = postReduser(this._state.postsPage, action);
    this._state.messangesPage = messanegesReduser( this._state.messangesPage, action);
    this._state.sidebar = sidebarReduser(this._state.sidebar, action);
  this._callSubscriber(this._state);
  }
}

export default store;