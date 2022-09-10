import React, { createContext, useReducer } from 'react';

import Reducer from "./Reducer";

const initialState = {
    audioIsPlaying: false,
    notes: [],  
    cameraZPos: -1200
}

export const Context = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

     const updateIsAudioPlaying = (playing) => {
        dispatch({ type: "UPDATE_AUDIO_STATE", payload: playing });
    }

    const updateNotes = (newNote) => {
        dispatch({ type: "UPDATE_NOTES", payload: newNote });
    }

    const updateCameraZPos = () => {
        dispatch({ type: "UPDATE_CAMERA_ZPOS" });
    }

    const resetNotes = () => {
        dispatch({ type: "RESET_NOTES" });
    }

    return <Context.Provider
        value={
            {
                audioIsPlaying: state.audioIsPlaying,
                updateIsAudioPlaying,
                notes: state.notes,
                updateNotes,
                cameraZPos: state.cameraZPos,
                updateCameraZPos,
                resetNotes,
            }
        }
    >
        {children}
    </Context.Provider>
};
