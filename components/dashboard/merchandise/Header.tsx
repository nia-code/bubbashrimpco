'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '@/lib/constant/api'

import { useRouter, useParams } from 'next/navigation'
import { BellIcon } from '@heroicons/react/24/outline'

interface User {
    fullname: string,
    email: string,
    _id: string,
    orders: {
        _id: string
        totalPrice: string,
        quantity: string,
        userId: string,
        status: string,
        address: string,
        phone: string,
        products: [
            {
                name: string,
                image: string,
                price: string,
                category: string,
                description: string,
                type: string,
            }
        ]
    }
}


const Header = () => {
    const router = useRouter()
    const { id } = useParams()

    const [user, setUser] = useState<User>()

    useEffect(() => {
        const getUser = async () => {
            await axios.get(`${BASE_URL}/users/user/${id}`)
            .then(res => setUser(res.data.user))
            .catch(err => console.log(err))
        }

        getUser()
    }, [])

    return (
        <header className="lg:flex flex-col gap-5 lg:h-[10%]">
            <div className="flex justify-between items-center">
                <div className="flex justify-between flex-1 lg:px-5 items-center">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl font-bold">Welcome Back {user?.fullname}!</h2>
                        <p className="text-[10px] text-gray-500">Here's what is happening in your dashboard today</p>
                    </div>

                    <div className="h-6 w-6 cursor-pointer relative flex items-center justify-center">
                        <BellIcon className="h-5 w-5" />
                        <div className="h-[1px] w-[1px] rounded-full bg-red-500 absolute z-50 top-0 p-1 right-0" />
                    </div>
                </div>
                <div className="lg:px-5 border-l hidden lg:flex">
                   <p className="text-[10px] font-bold">{user?.fullname}</p>
                </div>
            </div>


        </header>
    )
}

export default Header