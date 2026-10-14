import { dataStore } from '../data/dataStore'

function Dashboard() {
  const user = dataStore((state) => state.user)

  return (
    <>
    <section>
      <p>Welcome, {user.name}!</p>
    </section>
    </>
  )
}

export default Dashboard