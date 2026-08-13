import Santri, { santri } from "./tasks/task-130826/Santri"
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
