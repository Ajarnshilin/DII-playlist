import React, { useEffect } from "react";
import songJson from "../../songV2.json"
import AddSong from "../Button/AddSong";


function Recommend(props) {
 
    return (
        <>
        {songJson.sort((a,b) => Math.random() - Math.random()).slice(0,5).map((item, key) => (
            <AddSong key={key} props={item}/>
        ))}
        </>
    );
}

export default Recommend;