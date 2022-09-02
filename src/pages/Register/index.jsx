import React, { useState } from 'react'
import { RegisterForm } from '../../components/RegisterForm'
import { RegistrationCompleted } from '../../components/RegistrationCompleted'

export const Register = () => {
  const [success, setSuccess] = useState(false)

  return (
    <section className='grid-center' style={{ minHeight: `calc(${window.innerHeight}px - var(--header-height)`, display: 'grid', placeContent: 'center' }}>
      {!success &&
        <>
          <h2 style={{ textAlign: 'center' }}>Register</h2>
          <RegisterForm setSuccess={setSuccess} />
        </>}
      {success &&
        <RegistrationCompleted />}
    </section>
  )
}
