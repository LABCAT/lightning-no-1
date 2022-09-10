export default function Reducer(state, action) {
    switch (action.type) {
        case "UPDATE_AUDIO_STATE": {
            return {
                ...state,
                audioIsPlaying: action.payload
            }
        }
        case "UPDATE_NOTES": {
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        }
         case "UPDATE_CAMERA_ZPOS": {
            return {
                ...state,
                cameraZPos: state.cameraZPos + 75
            }
        }
        case "RESET_NOTES": {
            return {
                ...state,
                notes: []
            }
        }
        default:
            throw new Error('Action type does not exist!')
    }
}