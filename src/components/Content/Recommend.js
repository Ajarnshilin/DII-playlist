import React from "react";
import songJson from "../../song.json"
import AddSong from "../Button/AddSong";


function Recommend(props) {
    let RandomSongJson = Object.assign([], songJson);
 
    return (
        <>
        {RandomSongJson.sort((a,b) => Math.random() - Math.random()).slice(0,5).map((item, key) => (
            <AddSong key={key} props={item}/>
        ))}
        </>
    );
}

export default Recommend;