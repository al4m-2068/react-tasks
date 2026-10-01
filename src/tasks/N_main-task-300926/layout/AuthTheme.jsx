import React from 'react'
import { useForm } from 'react-hook-form'
import { Outlet } from 'react-router'

function AuthTheme() {
  return (
    <>
    <div className='flex w-full h-full items-end px-6 py-5'>
      <h1 className="text-9xl/[90%] uppercase font-bold tracking-tighter">Wel<br/>come!</h1>
    </div>
    <div className='flex w-full h-full items-end justify-center'>
      <Outlet/>
    </div>
    </>
  )
}

export default AuthTheme