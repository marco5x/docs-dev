import React, { useState } from "react";
import { useParams } from "react-router-dom"
import { docs } from "../config/api.json";

export const Docs = () => {
    const params = useParams()
    console.log(params )
    let docFind = docs.find((doc) => doc.link); 
    const [link, setLink] = useState(docFind.link);

    return (
    <iframe
        width="1920"
        src={link}
        title={"docFind.name"}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share"
        >
    </iframe>
    )
}



