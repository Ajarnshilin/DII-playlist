import React from 'react'

export const ListContext = React.createContext({})

const initialState = {
    song : []
}

function songReducer(state, action){
    switch (action.type){
        case "ADD_SONG" : 
            return {
                ...state, song: state.song.push(action.payload)
            }
        case "DELETE_SONG" :
            return {
                ...state, song: state.song.filter(arraySong => arraySong !== action.payload )
            }
        default : 
            return state
    }
}
export function ListProvider({ children }) {
    const [songState, songDispatch] = React.useReducer(songReducer, initialState)
    return (
      <ListContext.Provider value={{ songState, songDispatch }}>
        {children}
      </ListContext.Provider>
    );
  }

export function manageSong() {
    const {songState, songDispatch } = React.useContext(ListContext)
    
    const { song } = songState

    const addSong = React.useCallback((payload) => songDispatch({type: "ADD_SONG", payload}), [songDispatch])
    const deleteSong = React.useCallback((payload) => songDispatch({type: "ADD_SONG", payload}), [songDispatch])

    const state = React.useMemo(() => { song } )
    const dispatcher = React.useMemo(() => { addSong, deleteSong, song }, [addSong, deleteSong, song])

    return [state, dispatcher]
}

export default ListContext