import React from "react";

function Childcomp(props){
    return(
        <>
        <h1>This is child</h1>
        <h2>Name:{props.Name}</h2>
        <h2>age:{props.age}</h2>
        </>
    )
}
export default Childcomp;