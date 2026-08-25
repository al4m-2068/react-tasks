import React, { useEffect, useState } from 'react'

function Task7() {
  const [edit, setEdit] = useState(false)
  const [namaSantri, setNamaSantri] = useState('Ahmad')
  const [angka, setAngka] = useState(0)

  useEffect(() => {
    console.log('[INFO] Dashboard Santri berhasil dijalankan');
  }, [])
  
  useEffect(() => {
    console.log(`Angka sekarang: ${angka}`)
    document.title = `Angka: ${angka}`
  }, [angka])
  return (
    <div className='flex flex-col'>
      <header className='text-2xl font-bold px-6 h-12 items-center flex justify-between'>
        <h1>Dashboard Santri</h1>
      </header>
      <main className='px-8'>
        <section className='py-10'>
          <div className='mb-6'>
            <h1 className='text-sm uppercase flex flex-col'>Nama Santri{edit ? <span><input className='text-xl font-bold normal-case' type="text" autoFocus value={namaSantri} onChange={(e) => setNamaSantri(e.target.value)} /> <button className='px-4 py-2 bg-green-200 rounded-sm text-green-700' onClick={() => setEdit(false)}>Done</button></span> : <span className='text-xl font-bold normal-case' onClick={() => setEdit(true)}>{namaSantri}</span>}</h1>
            <p className='text-xs'>Click the name to Edit</p>
          </div>
          <div>
            <p className='text-sm uppercase'>Preview</p>
            <p className='text-2xl font-bold'>Halo, {namaSantri}!</p>
          </div>
        </section>
        <section className='border-t py-10'>
          <p className='text-sm uppercase'>Angka:</p>
          <p className='text-2xl font-bold'>{angka}</p>
          <button className='px-4 py-2 bg-green-200 rounded-sm text-green-700' onClick={() => {
            setAngka(angka + 1)
          }}>Tambah</button>
        </section>
        <section className='border-t py-10'>
          <p className='text-sm uppercase'>Status:</p>
          <p className={'font-bold font-mono px-2 bg-zinc-200 w-max'}>{angka > 0 ? 'Angka sudah berubah!' : 'Belum ada perubahan.'}</p>
        </section>
      </main>
    </div>
  )
}

export default Task7