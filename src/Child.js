import React from "react";


export default function Child(props){
    return(
<div>
<h1>Child</h1>
<button onClick={()=>{props.changeWord('hii')}}>Click here pls</button>
</div>


)}

