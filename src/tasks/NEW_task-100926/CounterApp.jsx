import { ArrowClockwiseIcon, MinusIcon, PlusIcon } from '@phosphor-icons/react'
import React, { useReducer } from 'react'

function countRed(state, action) {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'sub':
      return state - 1
    case 'reset':
      return 0
  }
}
function CounterApp() {
  const [state, dispatch] = useReducer(countRed, 0)
  return (
    <div className='font-zld text-sm w-full h-screen flex flex-col items-center justify-center bg-amber-100'>
      <h1 className='text-[300px] text-trim mb-10 font-black font-sky text-amber-400'>{state}</h1>
      <div className='flex gap-1'>
        <button className='size-10 hover:bg-amber-400 transition-all duration-100 cursor-pointer border flex items-center justify-center rounded-full' onClick={() => dispatch({type: 'add'})}><PlusIcon/></button>
        <button className='size-10 hover:bg-amber-400 transition-all duration-100 cursor-pointer border flex items-center justify-center rounded-full' onClick={() => dispatch({type: 'sub'})}><MinusIcon/></button>
        <button className='size-10 hover:bg-amber-400 transition-all duration-100 cursor-pointer border flex items-center justify-center rounded-full' onClick={() => dispatch({type: 'reset'})}><ArrowClockwiseIcon/></button>
      </div>
    </div>
  )
}

export default CounterApp