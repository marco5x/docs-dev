import { useState } from "react";
import { docs } from "../config/api.json";
import style from "./Docs.module.css"

export const Docs = () => {
    const [link, setLink] = useState("https://andreasbm.github.io/web-skills/?compact");
    const [show, setShow] = useState(false);
    
    return (
        <div className={style.container}>
            <div>
                <button onClick={() => setShow(!show)} className={style.button}>DOCS</button>
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
