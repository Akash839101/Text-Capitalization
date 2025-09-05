import { React, useState } from 'react'
import './Output.css'

const Output = (p) => {
    
    function capitalizefunction(str) {
        return str
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
    }


    
   


    return (
        <div className='outputBox'>
            <h3>To Capitalize</h3>
            <textarea className='output' value={capitalizefunction(p.text)}/>
            {/* <p className='output'>
                {capitalizefunction(p.text)} */}
            {/* </p> */}
            <button onClick={()=>{
                p.setActive(true)
                p.setText("")
            }}>Clear</button>
        </div>
    )
}

export default Output