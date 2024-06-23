import React, { useState } from 'react'
import loginIcons from '../assest/profile logo.jpg'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Login = () => {

  const [showPassword, setShowPassword] = useState(false)
 const [data, setData] = useState({
  email : "",
  password : ""
 })

 const handleOnChange = (e) => {
  const { name, value } = e.target

  setData((preve)=>{
    return{
      ...preve,
      [name] : value
    }
  })

 }
const handleSubmit = (e) =>{
  e.preventDefault()
}

 
 console.log("data login", data)

  return (
    <section id='login'>
        <div className='mx-auto container p-4'>
            <div className='bg-white p-5 w-full max-w-sm mx-auto '>
                <div className='w-20 h-20 mx-auto'>
                    <img src={loginIcons} alt='login icon'/>
                </div>


               <form className='pt-7  flex flex-col gap-2' onSubmit={handleSubmit}>

                <div className='grid'>
                  <label>Email :</label>
                  <div className='bg-slate-100 p-2'>
                  <input 
                  type='email' 
                  placeholder='Enter email' 
                  name='email'
                  value={data.email}
                  onChange={handleOnChange}
                  className='w-full h-full outline-none bg-transparent'></input>
                  </div>
                </div>

                <div>
                  <label>Password :</label>
                  <div className='bg-slate-100 p-2 flex'>
                  <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder='Enter password' 
                  name='password'
                  value={data.password}
                  onChange={handleOnChange}
                  className='w-full h-full outline-none bg-transparent'></input>
                  <div className='cursor-pointer text-xl' onClick={() =>setShowPassword((preve)=>!preve)}  /*on click time eye open and close */>
                    <span>
                            {
                              showPassword ? (
                                <FaEyeSlash/>
                              )
                              :
                              (
                                <FaEye/>

                              )
                            }

                     
                      
                    </span>
                  </div>

                  </div>
                  
                   <Link  to={'forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>Forgot Password ?</Link>

                </div>
                <button  className='bg-black hover:bg-red-800 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>

               </form>

               <p className='my-4'>Dont't have account? <Link to={'/sign-up'} className='text-red-600 hover:text-red-700 hover:underline'>Sign up</Link></p>
            </div>

        </div>

    </section>
  )
}

export default Login