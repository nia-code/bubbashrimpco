'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'

import { useRouter, useParams } from 'next/navigation'

import { BASE_URL } from '@/lib/constant/api'

import { PropagateLoader } from 'react-spinners'
import Confetti from 'react-confetti'

const page = () => {
    const [id, setId] = useState(() => {
        if (typeof window !== 'undefined'){
            return localStorage.getItem('_id')
        }
    })

    const [token, setToken] = useState(() => {
        if (typeof window !== 'undefined'){
            return sessionStorage.getItem('token')
        }
    })

    const params = useParams()
    const navigation = useRouter()

    useEffect(() => {
        proceedToOrder()
    }, [])

    const proceedToOrder = async () => {
        await axios.post(`${BASE_URL}/orders/place-order`, {
            session_id: (params.sessionId as string).split('session_id%3D')[1],
            userId: id
        }, {
            headers: { token: `Bearer ${token}` }
        })
        .then((res) => {
            navigation.replace(`/dashboard/${res.data.order.userId}`)

        })
        .catch((err) => {
            console.log(err)
        })
    }


    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-100 ">
            <Confetti
              width={typeof window !== undefined ? window.innerWidth : 300}
              height={typeof window !== undefined ? window.innerHeight : 1024}
            />
            <div className="p-5 rounded-md bg-white shadow-xl text-center flex flex-col items-center gap-10 w-[90%] lg:w-[50%] py-10">
                <h2 className="font-bold text-2xl">Payment Successful</h2>
                <p>Processing your orders, please wait...</p>
                <PropagateLoader size={5} color="#000" />
            </div>
        </div>
    )
}

export default page