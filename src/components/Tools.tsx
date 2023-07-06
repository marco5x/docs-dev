import { useState } from "react";
import { tools } from "../config/api.json";

export const Tools = () => {
    const [link, setLink] = useState("https://github.com/");
    const [show, setShow] = useState(false);

    return (
        <div style={{ display: "flex" }}>
            <div>
                <button onClick={() => setShow(!show)} style={{position:"absolute"}}>TOOLS</button>
                {
                    tools.map((tool) => (
                        <div key={tool.id} style={{ width:"12rem", backgroundColor:"black"}}>
                            <button onClick={() => setLink(tool.link) } >
                                <h3>{tool.name}</h3>
                                <img src={tool.logo} alt={tool.name} width="45" height="auto" />
                           </button>
                        </div>
                    ))
                }
            </div>
            <iframe
                width="1920"
                src={link}
                title={"Tools web"}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share"
            >
            </iframe>
        </div>
    )
}
