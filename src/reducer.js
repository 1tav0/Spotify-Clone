export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    // token: 'BQAsISNzD5Osxfk34Gc81cwqWCwqRu3mejMnMtc-NMnhZkSisv…aFC7G6-8YwvzObFFqZ76IPaguD-SmoLT3SzB-bce28j3WjALw'
}
//reducer sits there listening waiting for an action depending on the action then it helps change the state
const reducer = (state, action) => {
    // console.log(action)

    //action -> type, [payload]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state, //keep old state but update the user slice with the user from the action that was dispatched 
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state, //keep old state but update the user slice with the user from the action that was dispatched 
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state, //keep old state but update the user slice with the user from the action that was dispatched 
                playlists: action.playlists
            }
       case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state //if nothing changes return the state how it was 
    }
}

export default reducer