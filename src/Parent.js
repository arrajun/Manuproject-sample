<<<<<<< HEAD
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

=======
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

>>>>>>> 6c1a1d79f2675c7ef2ffa00f81e353e6b23dee41
