import React from "react";
import songJson from "../../song.json"
import AddSong from "../Button/AddSong";
import { Slide } from "react-awesome-reveal";


function Recommend(props) {
    let RandomSongJson = Object.assign([], songJson);
 
    return (
        <>
        <Slide triggerOnce>
        {RandomSongJson.sort((a,b) => Math.random() - Math.random()).slice(0,1).map((item, key) => (
            <AddSong key={key}  props={item} />
        ))}
        <Slide triggerOnce >
        {RandomSongJson.sort((a,b) => Math.random() - Math.random()).slice(0,1).map((item, key) => (
            <AddSong key={key} props={item}/>
        ))}
        <Slide triggerOnce >
        {RandomSongJson.sort((a,b) => Math.random() - Math.random()).slice(0,1).map((item, key) => (
            <AddSong key={key} props={item}/>
        ))}
        <Slide triggerOnce >
        {RandomSongJson.sort((a,b) => Math.random() - Math.random()).slice(0,1).map((item, key) => (
            <AddSong key={key} props={item}/>
        ))}
        <Slide triggerOnce >
        {RandomSongJson.sort((a,b) => Math.random() - Math.random()).slice(0,1).map((item, key) => (
            <AddSong key={key} props={item}/>
        ))}
        
        </Slide>
        </Slide>
        </Slide>
        </Slide>
        </Slide>
        </>
    );
}

export default Recommend;