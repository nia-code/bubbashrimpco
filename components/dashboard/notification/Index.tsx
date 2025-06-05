'use client'
import { useState } from 'react'
import Sidebar from '../home/Sidebar'
import Notifications from './Notifications'
import Link from 'next/link'
import { usePathname, useParams, useRouter } from 'next/navigation'
import { Bars3Icon, XMarkIcon, BellIcon, ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid'

const Index = () => {
    const [toggle, setToggle] = useState(false)
    const pathname = usePathname()
    const { id } = useParams()
    const router = useRouter()

    const logout = () => {
        localStorage.clear()
        sessionStorage.clear()

        router.replace('/')
    }

    return (
        <div className="h-full flex flex-col lg:flex-row gap-5">
            {toggle && (
                <div className="flex fixed z-50 min-h-screen w-full lg:hidden">
                    <div className="min-h-screen lg:hidden bg-white flex flex-col justify-between gap-5 w-[40%] border-r flex-1">
                        <div className='flex flex-col gap-5'>
                            <div className="p-5 border-b">
                                <h2 className="text-xs font-bold">Bubba Shrimp</h2>
                            </div>
                            <div className="p-3 flex flex-col gap-5">
                               <Link href={`/dashboard/${id}`} className={`${pathname === `/dashboard/${id}` ? 'bg-black p-4 text-white' : 'text-gray-600 py-2' } text-xs px-4 font-semibold cursor-pointer hover:bg-gray-300 rounded-md`}>Home</Link>
                               <Link href={`/dashboard/${id}/menu`} className={`${pathname === `/dashboard/${id}/menu` ? 'bg-black p-4 text-white' : 'text-gray-600 py-2' } text-xs px-4 font-semibold  cursor-pointer hover:bg-gray-300  rounded-md`}>Menu</Link>
                               <Link href={`/dashboard/${id}/merchandise`} className={`${pathname === `/dashboard/${id}/merchandise` ? 'bg-black p-4 text-white' : 'text-gray-600 py-2' } text-xs px-4 font-semibold  cursor-pointer hover:bg-gray-300  rounded-md`}>Merchandise</Link>
                               {/*<Link href={`/dashboard/${id}/notification`} className={`${pathname === `/dashboard/${id}/notification` ? 'bg-black p-4 text-white' : 'text-gray-600 py-2' } text-xs px-4 font-semibold  cursor-pointer hover:bg-gray-300  rounded-md`}>Notification</Link>*/}
                               <button onClick={logout}  className={`${pathname === `/logout` ? 'bg-black p-4 text-white' : 'text-gray-600 py-2' } lg:hidden text-xs px-4 font-semibold cursor-pointer hover:bg-gray-300 rounded-md`}>logout</button>

                            </div>
                        </div>


                        <div className='border-t p-5 hidden lg:flex'>
                            <button onClick={logout}  className="flex gap-1 items-center hover:bg-gray-300 p-4 rounded-md cursor-pointer">
                                <ArrowLeftEndOnRectangleIcon className="h-5 w-5" />
                                <p className='text-xs font-bold'>logout</p>
                            </button>
                        </div>
                    </div>

                    <div onClick={() => setToggle(false)} className="flex-1 bg-black/50 min-h-screen " />
                </div>
            )}
            <Sidebar setToggle={setToggle} />
            <Notifications />
        </div>
    )
}

export default Index

