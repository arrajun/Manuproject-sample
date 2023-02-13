<<<<<<< HEAD
import React, { useState } from'react';
export default function SearchInDropdown() {
const [dogs,setDogs]=useState(["rigatoni","dave","pumpernickel","reeses"]);

    const filterHandler=(e)=>{
const x=e.target.value;

}
    return (
    <div>        
        {dogs.map(item=>{        
        // <select name="dog-names" id="dog-names">
        // <select name="dog-names" >
        //     <option value="hii">{item}</option>
        // </select>
<ul>
    <li>item</li>
</ul>

    })}
        </div>
  );}
=======
import React, { useState } from'react';
export default function SearchInDropdown() {
const [dogs,setDogs]=useState(["rigatoni","dave","pumpernickel","reeses"]);

    const filterHandler=(e)=>{
const x=e.target.value;

}
    return (
    <div>        
        {dogs.map(item=>{        
        // <select name="dog-names" id="dog-names">
        // <select name="dog-names" >
        //     <option value="hii">{item}</option>
        // </select>
<ul>
    <li>item</li>
</ul>

    })}
        </div>
  );}
>>>>>>> 6c1a1d79f2675c7ef2ffa00f81e353e6b23dee41
