import { useState } from "react";
import { docs } from "../config/api.json";

export const Docs = () => {
    const [link, setLink] = useState("https://www.w3docs.com/learn-html.html");

    return (
        <div style={{ display: "flex" }}>
            <div>
                <h2>DOCUMENTATION</h2>
                {
                    docs.map((doc) => (
                        <div>
                            <button onClick={() => setLink(doc.link) } >
                                <h3>{doc.name}</h3>
                                <img src={doc.logo} alt={doc.name} width="45" height="auto" />
                           </button>
                        </div>
                    ))
                }
            </div>
            <iframe
                width="1920"
                src={link}
                title={"documentation for developers"}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share"
            >
            </iframe>
        </div>
    )
}
