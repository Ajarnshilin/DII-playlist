import React from "react";
import songJson from "../../song.json"
import AddSong from "../Button/AddSong";


function Recommend() {
    return (
        <>
        {songJson.slice(0,5).sort((a,b) => Math.random() - Math.random()).map((item, key) => (
            <AddSong props={item}/>
        ))}
        </>
    );
}

export default Recommend;