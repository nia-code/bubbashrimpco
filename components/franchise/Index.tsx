'use client'

import { useState, useEffect } from "react"

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '@/context/store'

import Navbar from "../header/Navbar"
import Footer from "../header/Footer"
import Cart from "../header/Cart"

import Franchise from './Franchise'
const Index = () => {
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
                <div className="w-full h-full flex flex-col gap-5 bg-white">
                    {showCart && (
                        <div className="fixed z-50 top-0 h-screen w-full flex bg-black/50">
                            <div onClick={() => setSetShowCart(false)} className="lg:w-[70%] w-[10%] h-full" />
                            <Cart setSetShowCart={setSetShowCart} />
                        </div>
                    )}
                    <Navbar setSetShowCart={setSetShowCart} />
                    <Franchise />
                    <Footer />
                </div>
            </PersistGate>
        </Provider>
    )
}

export default Index