import { useState } from 'react'
import UserInput from './Componant/UserInput'
import Output from './Componant/Output'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [active, setActive] = useState(true)
 

  return (
    
    <div className='body'>
    {active
    ?<UserInput setActive={setActive} setText={setText}/>
    :<Output text={text} setActive={setActive} setText={setText}/>
    }
    
   
    


    </div>
  )
}

export default App
