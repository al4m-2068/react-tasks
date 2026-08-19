import React, { useState } from 'react'

function Task6() {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   return (
      <div className='h-screen flex flex-col items-center justify-center bg-radial-[circle_at_center] from-task6-blue to-task6-bluedark text-white'>
         <div className='flex flex-col items-center px-20 py-10 gap-10 bg-task6-bluelight/28 backdrop-blur-lg rounded-3xl border-2 border-zinc-300/18'>
            <h1 className='text-2xl font-bold uppercase'>ウエブサイト<sup>&reg;</sup></h1>
            <form className='flex flex-col text-sm gap-6 items-center' onSubmit={(e) => {
               e.preventDefault()
               console.log(`Your username: ${e.target.elements.username.value}`);
               console.log(`Save your password: ${e.target.elements.password.value}`);
               setPassword('')
               setUsername('')
            }}>
               <h1 className='font-bold text-2xl self-start'>Sign Up</h1>
               <fieldset className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-2'>
                     <label htmlFor="username">Username</label>
                     <input type="text" id='username' value={username} className='w-62.5 p-4 h-8 bg-white border border-zinc-300 rounded-sm placeholder:text-zinc-400 text-zinc-800' placeholder='UebuMaster12' onChange={(e) => {
                        setUsername(e.target.value)
                     }} />
                     <p>{username && (username == 'Fulan' || username == 'fulan' ? 'Username taken' : `It'll look like this: @${username}`)}</p>
                  </div>
                  <div className='flex flex-col gap-2'>
                     <label htmlFor="password">Password</label>
                     <input type="password" id='password' value={password} className='w-62.5 p-4 h-8 bg-white border border-zinc-300 rounded-sm placeholder:text-zinc-400 text-zinc-800' placeholder='••••••••' onChange={(e) => {
                        setPassword(e.target.value)
                     }} />
                     <p>{password && (password.length < 8 ? 'At least 8 chars' : `Check password: ${password}`)}</p>
                  </div>
               </fieldset>
               <div className='w-full '>
                  <button type="submit" className='h-10 text-base font-semibold w-full bg-task6-bluedark rounded-lg'>Sign up</button>
               </div>
               <p>or continue with</p>
               <fieldset className='self-stretch'>
                  <div className='flex gap-4'>
                     <button className='bg-white border border-zinc-300 h-10 w-full flex items-center justify-center rounded-sm'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/960px-Google_Favicon_2025.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" className='size-4' alt="" />
                     </button>
                     <button className='bg-white border border-zinc-300 h-10 w-full flex items-center justify-center rounded-sm'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS7gME06ln7Wb6cFIZayFk9C00QkhyjQJr1Eqqj3N5_Q&s=10" className='size-4' alt="" />
                     </button>
                     <button className='bg-white border border-zinc-300 h-10 w-full flex items-center justify-center rounded-sm'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZgR5V04K0-o5-ofGaTK3WwHdLI8OxCQRnoZol23WOg&s=10" className='size-4' alt="" />
                     </button>
                  </div>
               </fieldset>
               <p className='text-xs'>already have an account? <a href="#" className='font-bold'>Sign in</a>.</p>
            </form>
         </div>
      </div>
   )
}

export default Task6