'use client'
import Image from 'next/image'
import Link from 'next/link'
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


const Orders  = () => {
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

        getOrders()
   }, [])

    return (
        <div className="py-5 px-2 lg:p-5 flex flex-col gap-2 flex-1 h-[90%]">
            <h3 className="text-sm font-bold border-b pb-2">All Merchandise</h3>
            <ul className="flex justify-between text-xs py-2 font-semibold border-b">
                <li className='flex-1 flex-1'>product</li>
                <li className='lg:w-[150px] flex-1 flex-shrink-0 text-center'>quantity</li>
                <li className='lg:w-[150px] flex-1 flex-shrink-0 text-center'>price</li>
                <li className='lg:w-[150px] flex-1 flex-shrink-0 text-center'>status</li>
            </ul>
            <div className="lg:overflow-y-auto lg:h-[100%] scrollbar-hide">
                {orders.length > 0 ? merch?.map((order, index) => (
                    <ul key={index} className="flex items-center justify-between text-[10px] py-5 font-semibold border-b">
                        <li className='flex-1 flex gap-1 flex-shrink-0'>
                                <Image src={order.image} alt='product' className='h-[40px] w-[40px] flex-shrink-0 flex rounded-full object-cover' />

                        </li>
                        <li className='lg:w-[150px] flex-1 flex-shrink-0 text-center flex-shrink-0'>{orders[0]?.quantity}</li>
                        <li className='lg:w-[150px] flex-1 flex-shrink-0 text-center flex-shrink-0'>${orders[0]?.totalPrice}</li>
                        <li className={`lg:w-[150px] flex-1 flex-shrink-0 text-center flex-shrink-0 ${orders[0]?.status === 'delivered' ? 'text-green-800 bg-green-500' : 'text-yellow-800 bg-yellow-500'}  py-2 rounded-md`}>
                            {orders[0]?.status === 'delivered' ? 'delivered' : 'pending'}
                        </li>
                    </ul>
                )) : (
                    <p className='text-xs text-center'>No orders available <Link className='text-blue-800 underline' href='/'>make an order</Link></p>
                )}
            </div>
        </div>
    )
}

export default Orders