'use client'
import logo from "@/assets/logo.jpeg"
import Image from "next/image"
import Link from "next/link"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"

import { MagnifyingGlassIcon, ShoppingBagIcon, Bars2Icon, XMarkIcon, UserIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid'

import { cartProducts } from "@/context/cartSlice"
import { useSelector } from 'react-redux'

const Navbar = ({ setSetShowCart }: { setSetShowCart: any }) => {
    const [toggle, setToggle] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const productsQty = useSelector(cartProducts);

    const [userId, setUserId] = useState(() => {
        if (typeof window !== 'undefined'){
            return localStorage.getItem('userId')
        }
    })

    const router = useRouter()
    const pathName = usePathname()

    return (
        <header className="w-full py-3 lg:py-5 bg-white shadow-sm sticky top-0 z-30">
            <div className="flex relative items-center justify-between md:max-w-[90%] 2xl:max-w-7xl mx-auto px-2 lg:px-0">
                <Image onClick={() => router.push("/")} src={logo} alt="logo" className="h-[40px] cursor-pointer w-[40px] lg:w-[100px] object-contain" />

                <nav className="hidden lg:flex items-center gap-10 text-xs font-semibold">
                   <Link href="/" className={`hover:text-[#F48E28] ${pathName === '/' ? 'text-[#F48E28]' : ''}`}>Home</Link>
                   <Link href="#about" className={`hover:text-[#F48E28] ${pathName === '/menu' && 'hidden'} ${pathName === '/merchandise' && 'hidden'}`}>About</Link>
                   <Link href="#services" className={`hover:text-[#F48E28] ${pathName === '/menu' && 'hidden'} ${pathName === '/merchandise' && 'hidden'}`}>Service</Link>
                   <p onMouseOver={() => setShowMenu(true)} onClick={() => setShowMenu(prev => !prev)} className={`hover:text-[#F48E28] cursor-pointer ${pathName === '/menu' ? 'text-[#F48E28]' : ''} `}>Menu</p>
                   <Link href="/merchandise" className={`hover:text-[#F48E28] ${pathName === '/merchandise' ? 'text-[#F48E28]' : ''}`}>Merchandise</Link>
                   <Link href="/franchise" className={`hover:text-[#F48E28] ${pathName === '/franchise' ? 'text-[#F48E28]' : ''}`}>Franchise</Link>
                </nav>


                <div className="flex gap-5 items-center">
                    {userId === null ? (
                        <Link href='/auth/sign-in' className="p-2 text-[8px] hidden lg:flex border rounded-md shadow-sm text-[#F48E28]">Sign In</Link>
                    ): (
                        <Link href={`/dashboard/${userId}`} className="p-2 text-[8px] hidden lg:flex border rounded-md shadow-sm text-[#F48E28]">Dashboard</Link>
                    )}
                    <div onClick={() => setSetShowCart(true)} className="relative lg:flex items-center justify-center h-6 w-6 hidden cursor-pointer">
                        <ShoppingBagIcon className='h-5 w-5 ' />
                        <div className="absolute -top-2 bg-red-500 h-4 w-4 flex items-center justify-center rounded-full right-0">
                            <p className="text-white text-[8px]">{productsQty}</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 items-center lg:hidden">
                    <div onClick={() => setSetShowCart(true)} className="relative flex items-center justify-center h-6 w-6">
                        <ShoppingBagIcon className='h-5 w-5' />
                        <div className="absolute -top-2 bg-red-500 h-4 w-4 flex items-center justify-center rounded-full right-0">
                            <p className="text-white text-[8px]">{productsQty}</p>
                        </div>
                    </div>

                    {toggle ? (
                        <XMarkIcon onClick={() => setToggle(false)} className='h-8 w-8 text-gray-500 lg:hidden transition-all ease-in-out duration-500' />
                    ): (
                        <Bars2Icon onClick={() => setToggle(true)} className='h-8 w-8 text-gray-500 lg:hidden transition-all ease-in-out duration-500' />
                    )}
                </div>

                {toggle && <div className='bg-white absolute z-40 top-10 right-5 p-5 rounded-xl shadow-xl w-1/2'>
                    <nav className="lg:hidden flex flex-col gap-5 text-xs font-semibold ">
                       <Link href="/" className="border-b shadow-sm p-2 rounded-md">Home</Link>
                       <Link href="#about" className="border-b shadow-sm p-2 rounded-md">About</Link>
                       <Link href="#services" className="border-b shadow-sm p-2 rounded-md">Service</Link>
                       <p onClick={() => setShowMenu(prev => !prev)} className="border-b shadow-sm p-2 rounded-md">Menu</p>
                       <Link href="/merchandise" className="border-b shadow-sm p-2 rounded-md">Merchandise</Link>
                       <Link href="/franchise" className="border-b shadow-sm p-2 rounded-md">Franchise</Link>

                       <Link href="/auth/sign-in" className="p-2 text-[8px] border rounded-md shadow-sm text-[#F48E28]">sign in</Link>
                   </nav>
                </div>}

                {showMenu && (
                    <div className=" fixed z-50 top-16 w-full h-screen overflow-y-auto scrollbar-hide lg:overflow-none">
                        <div className='w-full bg-white p-5 h-fit flex flex-col gap-5 rounded-md shadow-2xl'>
                           <div className="flex justify-between items-center lg:pr-10 md:max-w-[90%]">
                                <h2 className='text-base font-bold'>Menu Category</h2>
                                <div className="flex gap-5 items-center">
                                    <Link href="/menu" className="text-xs hover:text-[#F48E28] flex items-center gap-2 border p-2 shadow-sm rounded-md">View All <ArrowLongRightIcon className="h-5 w-5" /></Link>
                                    <XMarkIcon onClick={() => setShowMenu(false )} className="h-5 w-5 cursor-pointer" />
                                </div>
                           </div>
                           <div className=" flex flex-col md:flex-row gap-5 flex-wrap">
                                <div className='flex flex-col gap-5'>
                                    <ul className=" flex flex-col gap-4 w-[200px] h-fit">
                                        <li className='text-sm text-[#F48E28] font-thin border-b pb-1 w-fit border-[#F48E28]'>Drinks</li>
                                        <Link href='/menu/drink' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Coke</Link>
                                        <Link href='/menu/drink' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Pepsi</Link>
                                    </ul>
                                    <ul className="flex flex-col gap-4 w-[200px] h-fit">
                                        <Link href='/menu/tea' className='text-sm font-thin text-[#F48E28] border-b pb-1 w-fit border-[#F48E28]'>Non Sweet Teas</Link>
                                        <Link href='/menu/tea' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Green Tea</Link>
                                        <Link href='/menu/tea' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Peppermint Tea</Link>
                                        <Link href='/menu/tea' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>White Tea</Link>
                                    </ul>
                                </div>
                                <ul className=" flex flex-col gap-4 w-[200px] h-fit">
                                    <Link href='/menu/tea' className='text-sm font-thin text-[#F48E28] border-b pb-1 w-fit border-[#F48E28]'>Teas</Link>
                                    <Link href='/menu/tea' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Sweet Teas</Link>
                                    <Link href='/menu/tea' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Raspberry iced Tea</Link>
                                    <Link href='/menu/tea' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Southern sweet tea</Link>
                                    <Link href='/menu/tea' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Peach iced tea</Link>
                                    <Link href='/menu/tea' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Honey green tea</Link>
                                    <Link href='/menu/tea' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Jasmine milk tea</Link>
                                    <Link href='/menu/tea' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Chai tea</Link>
                                    <Link href='/menu/tea' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Lemon iced tea</Link>
                                </ul>

                                <ul className="flex flex-col gap-4 w-[200px] h-fit">
                                    <Link href='/menu/sauce' className='text-sm font-thin text-[#F48E28] border-b pb-1 w-fit border-[#F48E28]'>Sauces (Sides)</Link>
                                    <Link href='/menu/sauce' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Lemon pepper Buffalo Sauce</Link>
                                    <Link href='/menu/sauce' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Kegian Buffalo sauce</Link>
                                    <Link href='/menu/sauce' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Cajun Buffalo sauce</Link>
                                    <Link href='/menu/sauce' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Sriracha Garlic Buffalo sauce</Link>
                                    <Link href='/menu/sauce' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Habanero mango Buffalo sauce</Link>
                                    <Link href='/menu/sauce' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>BBQ Sauce </Link>
                                    <Link href='/menu/sauce' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Garlic butter sauce</Link>

                                    <Link href='/menu/sauce' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Corn</Link>
                                    <Link href='/menu/sauce' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Boiled Egg</Link>
                                    <Link href='/menu/sauce' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Side Bread</Link>
                                    <Link href='/menu/sauce' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Potatoes</Link>
                                    <Link href='/menu/sauce' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>1/2 Sausage</Link>
                                </ul>
                                <div className="flex flex-col gap-5">
                                    <ul className="flex flex-col gap-4 w-[200px] h-fit">
                                        <Link href='/menu/fast-food' className='text-sm font-thin text-[#F48E28] border-b pb-1 w-fit border-[#F48E28]'>Fast Food & Snacks</Link>
                                        <Link href='/menu/fast-food' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Shrimp Popcorn</Link>
                                        <Link href='/menu/fast-food' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Beef Sliders</Link>
                                        {/* <Link href='/menu/fast-food' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Chicken Tenders</Link> */}
                                        <Link href='/menu/fast-food' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Nachos Supreme</Link>
                                    </ul>
                                    <ul className="flex flex-col gap-4 w-[200px] h-fit">
                                        <li className='text-sm font-thin text-[#F48E28] border-b pb-1 w-fit border-[#F48E28]'>Shrimp Specialties</li>
                                        <Link href='/menu/shrimp' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Shrimp Burger</Link>
                                        <Link href='/menu/shrimp' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Shrimp & Grits</Link>
                                       {/* <Link href='/menu/shrimp' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Shrimp Fried Rice</Link> */}
                                        <Link href='/menu/shrimp' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Cajun Shrimp Pasta</Link>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <ul className="flex flex-col gap-4 w-[200px] h-fit">
                                        <li className='text-sm font-thin text-[#F48E28] border-b pb-1 w-fit border-[#F48E28]'>Soups & Bowls</li>
                                        <Link href='/menu/soups' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Shrimp Gumbo</Link>
                                        {/* <Link href='/menu/soups' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Chicken Tortilla Soup</Link> */}
                                        <Link href='/menu/soups' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Vegetable Stir-Fry Bowl</Link>
                                        <Link href='/menu/soups' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Shrimp Chowder</Link>
                                    </ul>
                                    <ul className="flex flex-col gap-4 w-[200px] h-fit">
                                        <li className='text-sm font-thin text-[#F48E28] border-b pb-1 w-fit border-[#F48E28]'>Main Dishes</li>
                                       <Link href='/menu/main-dishes' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Classic Shrimp Po' Boy</Link>
                                        {/*<Link href='/menu/main-dishes' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Grilled Chicken Sandwich</Link> */}
                                        <Link href='/menu/main-dishes' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Steak Fajitas</Link>
                                       {/* <Link href='/menu/main-dishes' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Southern Fried Chicken</Link> */}
                                    </ul>

                                </div>
                                <div className="flex flex-col gap-5">
                                    <ul className="flex flex-col gap-4 w-[200px] h-fit">
                                        <li className='text-sm font-thin text-[#F48E28] border-b pb-1 w-fit border-[#F48E28]'>House Special</li>
                                       <Link href='/menu/house' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Grilled Shrimp and Rice</Link>
                                    </ul>
                                    <ul className="flex flex-col gap-4 w-[200px] h-fit">
                                        <li className='text-sm font-thin text-[#F48E28] border-b pb-1 w-fit border-[#F48E28]'>Broils</li>
                                       <Link href='/menu/broils' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Shrimp Broil</Link>
                                       <Link href='/menu/broils' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Crab Broil</Link>
                                       <Link href='/menu/broils' className='text-[10px] font-bold cursor-pointer hover:text-[#F48E28] hover:underline'>Crawfish Broil</Link>
                                    </ul>
                                </div>

                           </div>
                        </div>
                        <div onClick={() => setShowMenu(prev => !prev)} className="flex-1 flex h-full" />
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar
