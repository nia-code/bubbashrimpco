'use client'

import { useState, useEffect } from "react"

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '@/context/store'

import LandingPage from "./landingPage"
import WorkingHours from "./WorkingHours"
import Popular from "./Popular"
import Product from "./Product"
import Merchandise from "./Merchandise"
import Service from "./Service"
import Work from "./Work"
import Testimony from "./Testimony"

import Navbar from "../header/Navbar"
import Footer from "../header/Footer"
import Cart from "../header/Cart"

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
                    {showAlert && (
                        <div className="fixed top-5 right-5 z-50">
                            <Added />
                        </div>
                    )}
                    <Navbar setSetShowCart={setSetShowCart} />
                    <LandingPage />
                    <Product setShowAlert={setShowAlert} />
                    <Merchandise setShowAlert={setShowAlert} />
                    <WorkingHours />
                    <Service />
                    <Testimony />
                    <Footer />
                </div>
            </PersistGate>
        </Provider>
    )
}

export default Index

const Added = () => {
    return (
        <div className="w-[200px] font-bold bg-green-500 p-5 rounded-md shadow-xl text-white flex items-center justify-center text-[10px]">
            <p>Added to Cart</p>
        </div>
    )
}


