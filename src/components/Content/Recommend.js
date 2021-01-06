import React from "react";
import songJson from "../../song.json"
import AddSong from "../Button/AddSong";
import { Slide } from "react-awesome-reveal";


function Recommend(props) {
    let RandomSongJson = Object.assign([], songJson);
 
    return (
        <>

        {RandomSongJson.sort((a,b) => Math.random() - Math.random()).slice(0,5).map((item, key) => (
            <Slide delay={10}>
              <AddSong key={key}  props={item} />  
            </Slide>
        ))}

     
        </>
    );
}

export default Recommend;