import { useState } from "react";
import { docs } from "../config/api.json";
import style from "./Docs.module.css"

export const Docs = () => {
    const [link, setLink] = useState("https://www.w3docs.com/learn-html.html");
    const [show, setShow] = useState(false);
    
    return (
        <div className={style.container}>
            <div >
                <button className={style.button} onClick={() => setShow(!show)}>DOCS</button>
                {
                    show && docs.map((doc) => (
                        <div key={doc.id} className={style.card}>
                            <button onClick={() => setLink(doc.link)} className={style.docs }>
                                <h3>{doc.name}</h3>
                                <img src={doc.logo} alt={doc.name} width="45" height="auto" />
                           </button>
                        </div>
                    ))
                }
            </div>
            <iframe
                width="1920"
                height="789"
                src={link}
                title={"documentation for developers"}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share"
            >
            </iframe>
        </div>
    )
}
