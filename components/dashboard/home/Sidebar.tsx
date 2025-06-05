'use client'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, BellIcon, ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid'
import { useParams, usePathname, useRouter } from 'next/navigation'
const Sidebar = ({ setToggle }: { setToggle: any }) => {
    const { id } = useParams()
    const pathname = usePathname()
    const router = useRouter()

    const logout = () => {
        localStorage.clear()
        sessionStorage.clear()

        router.replace('/')
    }
    return (
        <div className="lg:w-[20%]">
            <div className="min-h-screen hidden lg:flex flex-col justify-between gap-5 w-full  border-r">
                <div className='flex flex-col gap-5'>
                    <div className="p-5 border-b">
                        <h2 className="text-xs font-bold">Bubba Shrimp</h2>
                    </div>
                    <div className="p-3 flex flex-col gap-5">
                       <Link href={`/dashboard/${id}`} className={`${pathname === `/dashboard/${id}` ? 'bg-black p-4 text-white' : 'text-gray-600 py-2' } text-xs px-4 font-semibold cursor-pointer hover:bg-gray-300 rounded-md`}>Home</Link>
                       <Link href={`/dashboard/${id}/menu`} className={`${pathname === `/dashboard/${id}/menu` ? 'bg-black p-4 text-white' : 'text-gray-600 py-2' } text-xs px-4 font-semibold  cursor-pointer hover:bg-gray-300  rounded-md`}>Menu</Link>
                       <Link href={`/dashboard/${id}/merchandise`} className={`${pathname === `/dashboard/${id}/merchandise` ? 'bg-black p-4 text-white' : 'text-gray-600 py-2' } text-xs px-4 font-semibold  cursor-pointer hover:bg-gray-300  rounded-md`}>Merchandise</Link>
                       {/*<Link href={`/dashboard/${id}/notification`} className={`${pathname === `/dashboard/${id}/notification` ? 'bg-black p-4 text-white' : 'text-gray-600 py-2' } text-xs px-4 font-semibold  cursor-pointer hover:bg-gray-300  rounded-md`}>Notification</Link>*/}
                       <button onClick={logout} className={`${pathname === `/logout` ? 'bg-black p-4 text-white' : 'text-gray-600 py-2' } lg:hidden text-xs px-4 font-semibold cursor-pointer hover:bg-gray-300 rounded-md`}>logout</button>

                    </div>
                </div>


                <div className='border-t p-5 hidden lg:flex'>
                    <button onClick={logout} className="flex gap-1 items-center hover:bg-gray-300 p-4 rounded-md cursor-pointer">
                        <ArrowLeftEndOnRectangleIcon className="h-5 w-5" />
                        <p className='text-xs font-bold'>logout</p>
                    </button>
                </div>
            </div>


            <div className="lg:hidden flex justify-between items-center p-5 px-2 border-b shadow-sm sticky top-0 z-40">
                <h2 className="text-xs font-bold">Bubba Shrimp</h2>

                <div className='flex items-center gap-5'>
                    <Bars3Icon onClick={() => setToggle(true)} className='h-5 w-5 cursor-pointer' />
                    <button onClick={logout} className='text-sm'>logout</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar