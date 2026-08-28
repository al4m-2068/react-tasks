import { RouterProvider } from "react-router"
import Santri, { santri } from "./tasks/task-130826/Santri"
import Task from "./tasks/task-180826/Task"
import Task6 from "./tasks/task-190826/Task6"
import Task7 from "./tasks/task-250826/Task7"
import { pages } from "./tasks/task-280826/router"
import Dashboard from "./tasks/task-280826/Dashboard"
function App() {
  return (
    <>
      {/* {santri.map((person) => (
        <>
          <h1>======================</h1>
          <div key={person.id}>
            <Santri nama={person.nama} kelas={person.kelas} hobi={person.hobi} aktif={person.aktif}/>
          </div>
          <h1>======================</h1>
        </>
      ))} */}
      <RouterProvider router={pages}/>
    </>
  )
}

export default App
