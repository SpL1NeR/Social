const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
  ]
}



const messanegesReduser = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody
      return {
        ...state,
        messanges: [...state.messanges, { d: 7, message: body }]
      }

    default:
      return state;
  }
}


export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default messanegesReduser;