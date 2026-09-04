import React, { useContext } from 'react'
import { NameContext } from '../../App'
import { ListIcon } from '@phosphor-icons/react'

function Navbar() {
  const { nama } = useContext(NameContext)
  return (
    <header className='px-5 h-14 flex justify-between items-center'>
      <h1 className='text-xl font-frank'>Selamat datang, <span className='font-bold'>{nama}</span>.</h1>
      <ListIcon size={24} weight='duotone' className='text-lime-400 cursor-pointer'/>
    </header>
  )
}

export default Navbar