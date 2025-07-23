import React, { useState } from 'react'
import image from '../images/nasser-eledroos-20fmGtxKs_I-unsplash.jpg'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate ()

  const handleLogin = (e) => {
      e.preventDefault();
      navigate('/dashboard')
  }

  return (
    <div className='bg-stone-50 h-[100vh] flex items-center justify-center'>
        <div className='flex w-full max-w-6xl h-[80vh]'>
        <div className='w-1/2 p-8  shadow-lg rounded-l-lg flex flex-col justify-between items-center'>
              <h2 className='font-semibold text-2xl text-center'>Hello! Welcome Back</h2>
      <form className='flex flex-col w-100 ' onSubmit={handleLogin}> 
        <label className='text-gray-400'>Name</label>
        <input className='bg-white rounded-lg p-1 shadow-sm' type='text' value={name} placeholder='Your Name' onChange={(e) => setName(e.target.value)}/><br/>
        <label className='text-gray-400'>Email</label>
        <input className='bg-white rounded-lg p-1' type='email' value={email} placeholder='Your Email' onChange={(e) => setEmail(e.target.value)}/><br/>
        <label className='text-gray-400'>Password</label>
        <input className='bg-white rounded-lg p-1 mb-5' type='password' value={password} placeholder='Your Password' onChange={(e) => setPassword(e.target.value)}/>
        <button className='text-white bg-custom-gold-100 rounded-2xl pt-1 pb-1 cursor-pointer hover:opacity-25 transition-opacity duration-150' style={{backgroundColor: 'rgb(166, 139, 51)'}} type='submit'>Log In</button> 
      </form>
      <p>Forgot Password?</p>
      <p>Or Sign in with</p>
      <div className='flex flex-col gap-2'>
        <GoogleLogin className='bg-white pl-2 pr-2 pb-2 pt-1 border border-stone-950 rounded-full' onSuccess={(credentialResponse) =>{
            console.log(credentialResponse)
            navigate("/dashboard")
        } } onError={()=> console.log("Login failed")} 
        auto_select={true}/>        
      </div>

      <div className='flex gap-2 w-70 items-center'>
        <p>Don't have an account?</p>
        <Link to='/signup'><p className='cursor-pointer' style={{color: 'rgb(166, 139, 51)'}}>Sign Up</p></Link>
      </div>
        </div>
        <div className='w-1/2 shadow-lg'>
            <img src={image} className='rounded-l-none rounded-r-lg h-[80vh]'/>
        </div>
        </div>
    </div>
  )
}

export default Login