


import React from 'react'

export default function Santri({nama, kelas, hobi, aktif}) {
  return (
    <>
      <h1>Nama: {nama}</h1>
      <h1>Kelas: {kelas}</h1>
      <h1>Hobi: {hobi}</h1>
      <h1>Status: {aktif ? 'Aktif' : 'Tidak Aktif'}</h1>
    </>
  )
}
