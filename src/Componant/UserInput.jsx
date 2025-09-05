import {React,useState }from 'react'
import './UserInput.css'

const UserInput = (p) => {
   
    function takeInput(e){
        p.setText(e.target.value)

    }

  return (
    <div className='Inputbox'>
        <h3>Enter Your Text</h3>
        <textarea onChange={(e)=>{
            takeInput(e)
        }} className='input' value={p.text}/>

       
         <button onClick={()=>{
            
            p.setActive(false)
        }}>Convert</button>
        
    </div>
  )
}

export default UserInput