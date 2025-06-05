'use client'
import { useRouter, useParams } from 'next/navigation'
import { BellIcon } from '@heroicons/react/24/outline'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '@/lib/constant/api'

interface Orders {
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

interface Products {

            name: string,
            image: string,
            price: string,
            category: string,
            description: string,
            type: string,

}

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

    const [orders, setOrders] = useState<Orders[]>([])
    const [menus, setMenus] = useState<Products[]>([])
    const [merch, setMerch] = useState<Products[]>([])
   const [userId, setUserId] = useState(() => {
        if (typeof window !== 'undefined'){
            return localStorage.getItem('userId')
        }
   })

   useEffect(() => {
        const getOrders = async () => {
            await axios.get(`${BASE_URL}/orders/get-all-orders/${userId}`)
            .then(res => {
                const items: Orders[] = res.data
                setOrders(items)

                const menu: Products[] = items[0]?.products?.map(item => {
                    if (item?.type === 'menu' || item?.type === 'Menu') return item;
                }).filter(Boolean) as Products[];



                const merchandise: Products[] = items[0]?.products?.map(item => {
                    if (item?.type === 'merchandise' || item?.type === 'Merchandise') return item;
                }).filter(Boolean) as Products[];
                setMenus(menu)
                setMerch(merchandise)
            })
            .catch(err => console.log(err))
        }

        const getUser = async () => {
            await axios.get(`${BASE_URL}/users/user/${userId}`)
            .then(res => {
                setUser(res.data.user)
                console.log(res.data)
            })
            .catch(err => console.log(err))
        }

        getUser()
        getOrders()
   }, [])


    return (
        <header className="lg:flex flex-col gap-5 lg:h-[50%]">
            <div className="flex justify-between items-center">
                <div className="flex justify-between flex-1 lg:px-5 items-center">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl font-bold">Welcome Back {user?.fullname}!</h2>
                        <p className="text-[10px] text-gray-500">Here's what is happening in your dashboard today</p>
                    </div>

                    <div className="h-6 w-6 relative flex items-center justify-center cursor-pointer">
                        <BellIcon   className="h-5 w-5" />
                        <div className="h-[1px] w-[1px] rounded-full bg-red-500 absolute z-50 top-0 p-1 right-0" />
                    </div>
                </div>
                <div className="lg:px-5 border-l hidden lg:flex">
                   <p className="text-[10px] font-bold">{user?.fullname}</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between lg:px-5 gap-5 my-5 lg:my-0">
                <div className="p-5 bg-blue-200 flex-1 rounded-xl h-[200px] flex flex-col gap-3">
                    <p className="text-xs font-semibold">Total Purchase</p>
                    <h1 className="text-4xl font-bold">{orders.length > 0 ? orders[0]?.products?.length : 0}</h1>
                    <p className="text-xs font-semibold">Amount</p>
                    <h1 className="text-2xl font-bold">${orders.length > 0 ? orders[0]?.totalPrice : 0.00}</h1>
                </div>
                <div className="p-5 bg-green-200 flex-1 rounded-xl h-[200px] flex flex-col gap-3">
                    <p className="text-xs font-semibold">Menu Purchase</p>
                    <h1 className="text-6xl font-semibold">{orders.length > 0 ? menus?.length : 0}</h1>
                </div>
                <div className="p-5 bg-blue-200 flex-1 rounded-xl h-[200px] flex flex-col gap-3">
                    <p className="text-xs font-semibold">Merchandise Purchase</p>
                    <h1 className="text-6xl font-semibold">{orders.length > 0 ? merch?.length : 0}</h1>
                </div>
            </div>
        </header>
    )
}

export default Header