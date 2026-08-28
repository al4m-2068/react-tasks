import React from 'react'
import { NavLink } from 'react-router'

function Tentang() {
  return (
    <div className='h-screen flex flex-col'>
      <header className='text-2xl font-bold px-6 h-12 items-center flex justify-between'>
        <h1>Dashboard Santri</h1>
        <nav>
          <ul className='flex text-base font-normal gap-4'>
            <li><NavLink className={({isActive}) => isActive ? 'text-green-700' : 'text-black'} to={'/'}>Dashboard</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'text-green-700' : 'text-black'} to={'/santri'}>Daftar Santri</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'text-green-700' : 'text-black'} to={'/about'}>Tentang</NavLink></li>
          </ul>
        </nav>
      </header>
      <div className='px-8 py-10 flex flex-col justify-end h-full'>
        <h1 className="text-5xl font-bold">Tentang Pondok</h1>
        <h2>Website Dashboard Santri dibuat sebagai latihan React Router.</h2>
      </div>
    </div>
  )
}

export default Tentang