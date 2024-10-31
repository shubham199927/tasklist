import React from "react";
import Modification from "./Modification";

function Tasklist({tasks}){


    return(
        <div className="tasklist">
           <ul className="list"> 
           {tasks.map((task, index) => (
          <li key={index} className="listitem">
            {task} <Modification />
          </li>
        ))}
           </ul>
        </div>
    )
}

export default Tasklist;