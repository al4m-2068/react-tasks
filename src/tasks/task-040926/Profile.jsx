import React, { useContext } from 'react'
import { useState } from 'react'
import { NameContext } from '../../App'

function Profile() {
  const { nama, setNama } = useContext(NameContext)
  const [edit, setEdit] = useState(false)
  return (
    <div className='flex flex-col p-5 py-3 text-sm'>
      <div className="px-4 py-3 rounded-xl bg-linear-140 from-zinc-800 from-70% to-zinc-500 text-white gap-3 flex flex-col">
        <h1 className='uppercase tracking-widest'>Nama Santri</h1>
        <hr className='text-white/16 border-[1.16px]' />
        <span className="min-w-10 text-4xl font-bold text-lime-400 font-frank">
          {
            edit ?
            (<input value={nama} onChange={(e) => setNama(e.target.value)} onKeyUp={(e) => {e.key == 'Enter' && nama.length > 0 && setEdit(!edit)}} autoFocus className='w-full'/>) :
            (<h1 onClick={() => setEdit(!edit)}>{nama}</h1>)
          }
        </span>
        <p className='text-xs'>Click the name to edit value</p>
      </div>
    </div>
  )
}

export default Profile