import React from "react";

const Final = (props) => (
    
    <div>
        <hr/>
        <h3> This Fianl.js with some props coming from Section.js and Main.js also 
            coming from App.js </h3>
           
        <h2> Name:{props.name} </h2>
        <h3> Age:{props.age} </h3>
        <button onClick={props.getOld}>Happy Birtday</button>
        
    </div>
);

export default Final;