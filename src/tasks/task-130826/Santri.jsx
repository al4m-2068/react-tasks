export const santri = [
  {
    id: 1,
    nama: "Ahmad",
    kelas: "XI",
    hobi: "Coding",
    aktif: true
  },
  {
    id: 2,
    nama: "Ali",
    kelas: "XII",
    hobi: "Membaca",
    aktif: false
  },
  {
    id: 3,
    nama: "Umar",
    kelas: "X",
    hobi: "Futsal",
    aktif: true
  }
];
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
