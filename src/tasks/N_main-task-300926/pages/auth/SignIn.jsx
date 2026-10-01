import { useForm } from "react-hook-form"
import { dataStore } from "../../data/dataStore"
import { Navigate, useNavigate } from "react-router"

function SignIn() {
  const error = dataStore((state) => state.error)
  const user = dataStore((state) => state.user)
  const login = dataStore((state) => state.login)
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: 'onChange',
    defaultValues: { email: '', password: '', tac: true },
  })

  if (user) return <Navigate to="/" replace />

  const onSubmit = (data) => {
    const isSuccess = login(data.email, data.password)
    if (isSuccess) navigate('/')
  }

  return (
    <div className="w-[85%]">
      <form className='p-6 border border-b-0 rounded-t-4xl flex flex-col w-full h-[70vh] gap-6'
            onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="w-full space-y-4">
          <div className='flex flex-col text-sm uppercase font-bold'>
            <label htmlFor="email" className="border-b">email</label>
            <input {...register('email', {
              required: 'Email harus diisi!',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email tidak valid"
              }
            })} type="email" className={`mt-2 text-2xl w-full ${errors.email && 'border border-red-400'}`}
              id='email' placeholder='Fulanow' />
            {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
          </div>

          <div className='flex flex-col text-sm uppercase font-bold'>
            <label htmlFor="password" className="border-b">password</label>
            <input {...register('password', { required: 'Masukkan password!' })}
              type="password" className={`mt-2 text-2xl w-full ${errors.password && 'border border-red-400'}`}
              id='password' placeholder='••••••••' />
            {errors.password && <p className="text-sm text-red-400">{errors.password.message}</p>}
          </div>
        </fieldset>

        <div className="w-full flex flex-col">
          <label htmlFor="tac" className="text-sm flex gap-2 select-none">
            <input {...register('tac', { required: 'You must agree with the TaC!' })}
              id="tac" type="checkbox" name="tac" />
            I have read and agree with the terms & conditions
          </label>
          {errors.tac && <p className="text-sm text-red-400">{errors.tac.message}</p>}
        </div>

        {error && <div className="p-3 text-red-400">{error}</div>}

        <button disabled={!isValid} type="submit"
          className="border rounded-3xl text-sm font-bold uppercase py-4 cursor-pointer disabled:cursor-not-allowed">
          Sign in
        </button>
      </form>
    </div>
  )
}

export default SignIn