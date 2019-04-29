const initialState = {
    username: '',
    id: '',
    profilePic: ''
}

const UPDATE_USER = 'UPDATE_USER';

export function updateUser(username, id, profilePic) {
    return {
        type: UPDATE_USER,
        payload: {
            username,
            id,
            profilePic
        }
    }
}

export default function reducer ( state = initialState, action ) {
    const { type, payload } = action
    switch ( type ) {
        case UPDATE_USER:
        const { username, id, profilePic } = payload;
        return{...state, username, id, profilePic}

        default:
            return state
    }
}