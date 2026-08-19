import React, { useRef, useState } from 'react'

function Task() {
  const [nama, setNama] = useState('Tulis Namamu!')
  const inputRef = useRef(null)
  const headingRef = useRef(null)
  return (
    <div className={`h-screen flex flex-col items-center justify-center font-mono gap-2 ${(nama == 'Albar' || nama == 'Abdul Malik') && 'bg-zinc-800 text-red-700'}`}>
      <h2 className={`text-7xl mb-10 ${(nama == 'Albar' || nama == 'Abdul Malik') && 'italic uppercase'}`} ref={headingRef}>{(nama == 'Albar' || nama == 'Abdul Malik') ? `Welcome, master ${nama}` : nama}</h2>
      <input type="text" ref={inputRef} className='border text-center' />
      <button className='px-5 border py-1' onClick={() => {
        setNama(inputRef.current.value)
      }}>Tampilkan Nama</button>
    </div>
  )
}

export default Task