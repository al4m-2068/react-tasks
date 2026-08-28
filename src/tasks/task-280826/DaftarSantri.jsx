import React from 'react'
import { Link, NavLink } from 'react-router';

export const santri = [
  {
    id: 1,
    nama: "Ahmad",
    kelas: "XI",
  },
  {
    id: 2,
    nama: "Ali",
    kelas: "X",
  },
  {
    id: 3,
    nama: "Umar",
    kelas: "XII",
  },
];
function DaftarSantri() {
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
      <div className='px-8 py-10 flex flex-col h-full gap-6'>
        <h1 className="text-5xl font-bold">Daftar Santri</h1>
        <ul className='grid grid-cols-3 gap-4'>
          {santri.map((el) => (
            <li key={el.id} className='border border-green-200 p-4 flex flex-col items-start'>
              <h1 className='text-xl font-semibold'>{el.nama}</h1>
              <h1 className='text-sm mb-2'>Kelas {el.kelas}</h1>
              <Link to={`/santri/${el.id}`} className='px-4 py-2 bg-green-200 rounded-sm text-green-700'>Detail</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DaftarSantri