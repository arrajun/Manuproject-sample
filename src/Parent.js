import React, { useState } from "react";
import Child from "./Child";

export default function Parent(){
const[word,setWord]=useState('Parent');
    return(
<div>
<h1>Parent</h1>
<h1>{word}</h1>
<Child changeWord={word=>setWord(word)}/>
</div>
)}

