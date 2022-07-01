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
