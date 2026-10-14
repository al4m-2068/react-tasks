import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { dataStore } from '../data/dataStore'

function AccountTheme() {

  const user = dataStore(state => state.user)

  if (!user) return <Navigate to={'/sign-in'}/>

  return (
    <>
    <header className='h-full p-3 pl-0 w-60 shrink-0'>
      <div className='flex flex-col w-full h-full p-4 border border-l-0'>
        <p>Welcome</p>
      </div>
    </header>
    <main className='w-full h-full py-4'>
      <div className="mx-auto w-220"><Outlet/></div>
    </main>
    </>
  )
}

export default AccountTheme