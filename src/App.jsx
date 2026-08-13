import Santri from "./tasks/task-130826/Santri"

const santri = [
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
function App() {
  return (
    <>
      {santri.map((person) => (
        <>
          <h1>======================</h1>
          <div key={person.id}>
            <Santri nama={person.nama} kelas={person.kelas} hobi={person.hobi} aktif={person.aktif}/>
          </div>
          <h1>======================</h1>
        </>
      ))}
    </>
  )
}

export default App
