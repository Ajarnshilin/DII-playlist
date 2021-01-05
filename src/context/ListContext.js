import { useContext, useCallback, createContext, useMemo, useReducer } from 'react'

export const ListContext = createContext({})

const initialState = {
    song : [],
    time : 0
}

function songReducer(state, action){
    switch (action.type){
        case "ADD_SONG" : 
            return {
                ...state, song: state.song.push(action.payload), time: state.time + action.time
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
    const [songState, songDispatch] = useReducer(songReducer, initialState)
    return (
      <ListContext.Provider value={{ songState, songDispatch }}>
        {children}
      </ListContext.Provider>
    );
  }

export function SongManager() {
    const {songState, songDispatch } = useContext(ListContext)
    const { song, time } = songState

    const addSong = useCallback((payload, timeInput) => songDispatch({type: "ADD_SONG", payload: payload, time: timeInput}), [songDispatch])
    const deleteSong = useCallback((payload, timeInput) => songDispatch({type: "DELETE_SONG", payload: payload, time: timeInput}), [songDispatch])

    const state = useMemo(() => ({ song, time }), [song, time])
    const dispatcher = useMemo(() => ({ addSong, deleteSong, song }), [addSong, deleteSong, song])

    return [ state, dispatcher]
}

export default ListContext