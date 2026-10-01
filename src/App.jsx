// import { RouterProvider } from "react-router"
// import Santri, { santri } from "./tasks/task-130826/Santri"
// import Task from "./tasks/task-180826/Task"
// import Task6 from "./tasks/task-190826/Task6"
// import Task7 from "./tasks/task-250826/Task7"
// import { pages } from "./tasks/task-280826/router"
// import Dashboard from "./tasks/task-280826/Dashboard"
// import { createContext, useState } from "react"
// import Navbar from "./tasks/task-040926/Navbar"
// import Profile from "./tasks/task-040926/Profile"
import { RouterProvider } from "react-router"
import CounterApp from "./tasks/task-100926/CounterApp"
import { routes } from "./tasks/N_main-task-300926/router/router"

// 04/09/26 - useContext
// export const NameContext = createContext('');

function App() {
  // 04/09/26 - useContext
  // const [nama, setNama] = useState('Fulan')
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
      {/* <RouterProvider router={pages}/> */}
      {/* <NameContext.Provider value={{nama, setNama}}>
        <div className="flex flex-col w-85 h-200 overflow-clip rounded-2xl bg-zinc-900 text-white font-sora">
          <Navbar/>
          <Profile/>
        </div>
      </NameContext.Provider> */}

      {/* -----> 10/09/26 - useReducer <----- */}
      {/* <CounterApp/> */}

      {/* -----> NEW: 30/09/26 - React Hook Form <----- */}
      <RouterProvider router={routes} />
    </>
  )
}

export default App
