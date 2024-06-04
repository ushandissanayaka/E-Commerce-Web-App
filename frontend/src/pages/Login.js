import React from 'react'
import loginIcons from '../assest/profile logo.jpg'

const Login = () => {
  return (
    <section id='login'>
        <div className='mx-auto container p-4'>
            <div className='bg-white p-2 w-full max-w-md mx-auto '>
                <div>
                    <img src={loginIcons} alt='login icon'/>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Login