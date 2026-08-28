import React from 'react'
import { santri } from './DaftarSantri'
import { NavLink, useNavigate, useParams } from 'react-router'

function DetailSantri() {
  const { id } = useParams()
  const data = santri.find(el => el.id == id)
  const navigate = useNavigate()
  const nama = data.nama
  const kelas = data.kelas
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
        <div className='border border-green-200 p-4 flex flex-col items-start'>
          <h1 className='text-sm font-semibold'>ID: {id}</h1>
          <h1 className='text-xl font-semibold'>Nama: {nama}</h1>
          <h1 className='text-xl font-semibold'>Kelas: {kelas}</h1>
          <button onClick={() => navigate(-1)} className='px-4 py-2 bg-green-200 rounded-sm text-green-700 cursor-pointer'>Kembali</button>
        </div>
      </div>
    </div>
  )
}

export default DetailSantri