import { useState } from 'react';

import './App.css'

function App() {
 const [color, setcolor] = useState('olive')

//  function changeColor(color){
//   setcolor(color)
//  }
  return (
    <div className="w-full h-screen transition-colors duration-200" style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

<div className="flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-3xl">

        <button
        onClick={() => setcolor('red')}
        className="outline-none px-4 py-1 rounded-full bg-red-500 shadow-lg text-white"
       
        >
          Red</button>

    <button
     onClick={() => setcolor('green')}
        className='outline-none px-4 py-1 rounded-full bg-green-500 shadow-lg text-white'
        
        >
          green
          </button>

          <button
     onClick={() => setcolor('orange')}
        className='outline-none px-4 py-1 rounded-full bg-orange-500 shadow-lg text-white'
        
        >
          orange
          </button>


          <button
     onClick={() => setcolor('blue')}
        className='outline-none px-4 py-1 rounded-full bg-blue-500 shadow-lg text-white'
        
        >
          blue
          </button>

      </div>
    </div>
    </div>
  )
}

export default App;
