import React from "react";
import Childcomp from "./Childcomp";

function Parentcomp(){
    return(
        <>
        <Childcomp Name="angle" age="25"/>
        <h1>This is parent</h1>
        </>
    )
}
export default Parentcomp;