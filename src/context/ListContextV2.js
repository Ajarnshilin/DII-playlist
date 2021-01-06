import { createContext , useEffect, useState} from 'react'

export const ListContextV2 = createContext({})

export function ListProvider({ children }) {

    const [ idSong, setIdSong] = useState([])
    const [ dogwow, setDogwow ] = useState(0)


    const doge = { idSong: idSong, setIdSong: setIdSong, dogwow: dogwow, setDogwow: setDogwow   }

    return (
      <ListContextV2.Provider value={ {doge} }>
        {children}
      </ListContextV2.Provider>
    );
  }

export default ListContextV2