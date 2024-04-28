import React from 'react'
import { useDispatch } from 'react-redux'
import { inc } from './action'

import { dec } from './action'
function Counter() {
    const dispatch = useDispatch
  return (
    <div><h1>Redux Counter
        </h1>
        
        <button onClick={()=>dispatch((inc))}>
Increment
        </button>
        <span></span>
        <button onClick={()=>dispatch((dec))}>

        </button>

        </div>
  )
}

export default Counter