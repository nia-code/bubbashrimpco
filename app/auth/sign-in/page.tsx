'use client'
import Image from 'next/image'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import logo from '@/assets/logo.jpeg'
import { PropagateLoader } from 'react-spinners'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '@/context/store'

import Navbar from "@/components/header/Navbar"
import Footer from "@/components/header/Footer"
import Cart from "@/components/header/Cart"

import { BASE_URL } from '@/lib/constant/api'

type Props = {}

const SignIn = (props: Props) => {
    const [cartToggle, setCartToggle] = useState(false)
    const [error, setError] = useState('')
    const navigation = useRouter()
    const [toggle, setToggle] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async () => {
      // handle auth
      if(!email || !password){
        return alert('Please fill the form')
      }
        setIsLoading(true)
     await axios.post(`${BASE_URL}/users/login`, {email, password})
      .then((user) => {


        localStorage.setItem('email', user.data.email)
        localStorage.setItem('userId', user.data._id)
        localStorage.setItem('fullname', user.data.fullname)
        sessionStorage.setItem('token', user.data.token)
        console.log(user);

        navigation.replace(`/`)

     }).catch(err => {
      setError(err?.response?.data?.message)

      console.log(err);

     })
     .finally(() => {
      setIsLoading(false)
     })
    }

    const [showCart, setSetShowCart] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false)
        }, 1000)
    }, [showAlert])

  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <div className='w-full h-full flex flex-col'>
                {showCart && (
                    <div className="fixed z-50 top-0 h-screen w-full flex bg-black/50">
                        <div onClick={() => setSetShowCart(false)} className="lg:w-[70%] w-[10%] h-full" />
                        <Cart setSetShowCart={setSetShowCart} />
                    </div>
                )}
                {showAlert && (
                    <div className="fixed top-5 right-5 z-50">
                        <Added />
                    </div>
                )}
                <Navbar setSetShowCart={setSetShowCart} />

                <div className='h-screen w-full flex items-center justify-center'>
                  <div className='flex flex-col flex-1 items-center justify-center h-full lg:max-w-[30%] mx-auto w-full max-w-[90%]'>
                    <div className='w-full px-5 flex-col  flex gap-3 items-center'>
                      <Image src={logo} alt='logo' className='h-[100px] w-[150px] rounded-full object-contain' />
                      <p className='text-sm font-semibold text-[#6A6A6A] mb-5 text-center'>Please enter your log in details</p>

                      {error && <p className='text-xs text-[#FD6B6B] text-center'>{error}</p>}

                      <div className='text-sm w-full  flex flex-col gap-2'>
                        <label className='font-semibold' htmlFor="email">Email</label>
                        <div className={`w-full px-5 py-5 rounded-md border ${error ? 'border-[#FD6B6B]' : 'border-[#6A6A6A]'}`}>
                          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name='email' id='email' placeholder='Email ' className={`bg-transparent border-none outline-none w-full text-sm ${error ? 'text-[#FD6B6B]': 'text-black'}`} />
                        </div>

                      </div>
                      <div className='text-sm  w-full flex flex-col gap-2'>
                        <label className='font-semibold' htmlFor="Password">Password</label>
                        <div className='w-full px-5 py-5 rounded-md border border-[#6A6A6A] flex'>
                          <input value={password} onChange={(e) => setPassword(e.target.value)} type={toggle ? 'text': "password"} name='Password' id='Password' placeholder='Password ' className='bg-transparent border-none outline-none w-full text-sm flex-1 text-black' />
                          {toggle ? <EyeSlashIcon onClick={()=> setToggle(prev => !prev)}  className='h-5 w-5 cursor-pointer'/> :
                          <EyeIcon  onClick={()=> setToggle(prev => !prev)} className='h-5 w-5 cursor-pointer'/>}
                        </div>
                      </div>

                      <Link href='/auth/sign-up' className='text-blue-800 underline text-xs'>Don't have an account? Sign Up</Link>
                      <button disabled={isLoading} onClick={handleSubmit} type="button" className={`bg-yellow-700 hover:bg-yellow-800 ${isLoading && 'cursor-not-allowed'} text-white w-full py-5 rounded-2xl text-sm `}>
                          {isLoading ? <PropagateLoader size={5} color="#fff" className='py-2' />: 'Sign In'}
                      </button>

                    </div>
                  </div>
                </div>
                <Footer />
            </div>
        </PersistGate>
    </Provider>
  )
}

export default SignIn

const Added = () => {
    return (
        <div className="w-[200px] font-bold bg-green-500 p-5 rounded-md shadow-xl text-white flex items-center justify-center text-[10px]">
            <p>Added to Cart</p>
        </div>
    )
}
