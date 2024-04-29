import React from 'react';

const Institution = ({name, date, details}) =>{
return (
    <div style= {{background:"#C2543D", border:"10px solid #ccc", margin:"10px", padding:"100px"}}>
        <h2>{name}</h2>
        <h3>{date}</h3>
        <p>{details}</p>
    </div>
);
};

export default Institution;