import AuthForm from '@/components/AuthForm'
import React from 'react'

const Signup = () => {
  return (
    <section className='flex justify-center items-center px-4 py-4   overflow-x-hidden  min-h-screen'>
    <AuthForm type='signup' />
  </section>
  )
}

export default Signup
