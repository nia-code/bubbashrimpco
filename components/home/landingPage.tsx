import Image from 'next/image'
import bike from '@/assets/Mask.png'
import { PlayIcon, ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'

import food from '@/assets/shrimp-salad.jpg'
import food2 from '@/assets/shrimp-red-chillie.jpg'
import food3 from '@/assets/shrimp-tempura.jpg'
import food4 from '@/assets/shrimp-cocktail.jpg'

import cup from '@/assets/cup (2).jpeg'
import cap from '@/assets/cap (2).jpeg'


import abstract from "@/assets/Abstract.png"

const LandingPage = () => {
    return (
        <section className=" flex flex-col gap-5 lg:flex-row md:max-w-[90%] 2xl:max-w-7xl  w-full mx-auto h-full">
            <div className="flex flex-col gap-5 lg:gap-16 w-full lg:w-[40%] lg:px-5 px-2">
                <div className="flex gap-10 w-fit justify-between items-center p-1 rounded-full shadow-md bg-[#F5DDC4] text-xs text-[#F48E28]">
                    <p>Fast Delivery</p>
                    <Image src={bike} loading='lazy' alt="bike" className="h-5 w-5 object-contain" />
                </div>

                <div className="flex flex-col gap-2 lg:gap-4">
                    <h2 className="text-4xl lg:text-5xl font-bold capitalize">Coming soon to</h2>
                    <h2 className="text-4xl lg:text-5xl font-bold"></h2>
                    <h2 className="text-4xl font-bold capitalize text-[#F48E28]">Northwest Arkansas</h2>
                    <p className="text-xs lg:text-base font-semibold text-gray-500 w-[350px]">Welcome to Bubba Shrimp Co, your go-to spot for fresh dishes and unique merchandise to Northwest Arkansas. Enjoy our flavorful
                        menu and explore our exclusive products, all infused with Southern Charm. Interested in bringing our concept to your community? Explore our exciting franchise opportunity today!
                    </p>
                </div>

                <div className="flex gap-5 lg:gap-8 items-center">
                    <button className="bg-[#F48E28] p-3 rounded-md shadow-sm text-white w-[150px] text-xs font-semibold">Order Now</button>
                    <div className="bg-white shadow-xl h-10 w-10 rounded-full flex items-center justify-center cursor-pointer active:scale-95 transition-all duration-500 ease-in-out">
                        <PlayIcon className='h-5 w-5 text-[#F48E28]' />
                    </div>
                    <h3 className="text-xs lg:text-lg font-bold">Order Process</h3>
                </div>
            </div>
            <div className='w-full lg:w-[60%] flex gap-5 h-fit'>
                <div className="flex-1 lg:flex items-center justify-center hidden ">
                    <Image src={abstract} loading='lazy' alt="food" className="h-[300px] w-[200px] object-contain rounded-md " />
                </div>

                <div className="flex-1 bg-[#D9D9D9] hidden lg:inline-block rounded-md w-[300px] lg:pt-10">
                    <div className="relative lg:-left-28 flex flex-col gap-5 py-5 flex-shrink-0 lg:w-[400px] flex-1">
                        <div className="flex flex-col lg:flex-row gap-5 p-5 w-full">
                            <div className="bg-white shadow-md rounded-md p-5 lg:w-[200px] flex-1 lg:h-[190px] h-[200px] flex-shrink-0 relative ">
                                <div className="lg:absolute lg:-top-10 left-0 right-0 flex flex-col items-center gap-2">
                                    <Image src={food} loading='lazy' alt="food" className="h-[130px] w-[180px] object-cover rounded-t-md " />
                                    <div className="flex flex-col gap-2 items-center  justify-center">
                                        <h3 className="font-bold text-base text-sm">Shrimp Burger</h3>
                                        <p className="text-xs text-gray-500">Mushroom Sauce</p>
                                        <p className="text-[10px]"><span className="text-red-500">$</span>5.15</p>
                                    </div>

                                    <div className="flex gap-5">
                                        <button className="h-7 w-7 p-1 flex items-center justify-center bg-black rounded-full shadow-md">
                                            <ArrowRightIcon className='h-4 w-4 text-white' />
                                        </button>
                                        <button className="h-7 w-7 p-1 flex items-center justify-center bg-white rounded-full shadow-md">
                                            <ArrowLeftIcon className='h-4 w-4 text-black' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white shadow-md rounded-md p-5 lg:w-[200px] flex-1 lg:h-[190px] h-[200px] flex-shrink-0 relative ">
                                <div className="lg:absolute lg:-top-10 left-0 right-0 flex flex-col items-center gap-2">
                                    <Image src={food2} loading='lazy' alt="food" className="h-[130px] w-[180px] object-cover rounded-t-md " />
                                    <div className="flex flex-col gap-2 items-center  justify-center">
                                        <h3 className="font-bold text-base text-sm">Food Combo</h3>
                                        <p className="text-xs text-gray-500">Mushroom Sauce</p>
                                        <p className="text-[10px]"><span className="text-red-500">$</span>9.15</p>
                                    </div>

                                    <div className="flex gap-5">
                                        <button className="h-7 w-7 p-1 flex items-center justify-center bg-black rounded-full shadow-md">
                                            <ArrowRightIcon className='h-4 w-4 text-white' />
                                        </button>
                                        <button className="h-7 w-7 p-1 flex items-center justify-center bg-white rounded-full shadow-md">
                                            <ArrowLeftIcon className='h-4 w-4 text-black' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row flex-1 gap-5 p-5 w-full flex-1">
                            <div className="bg-white shadow-md rounded-md p-5 lg:w-[200px] flex-1 lg:h-[190px] h-[200px] relative ">
                                <div className="lg:absolute lg:-top-10 left-0 right-0 flex flex-col items-center gap-2">
                                    <Image src={cup} loading='lazy' alt="food" className="h-[130px] w-[180px] object-cover rounded-t-md " />
                                    <div className="flex flex-col gap-2 items-center  justify-center">
                                        <h3 className="font-bold text-base text-sm">Tea Mug</h3>
                                        <p className="text-xs text-gray-500">From Bubba Shrimp</p>
                                        <p className="text-[10px]"><span className="text-red-500">$</span>3.15</p>
                                    </div>

                                    <div className="flex gap-5">
                                        <button className="h-7 w-7 p-1 flex items-center justify-center bg-black rounded-full shadow-md">
                                            <ArrowRightIcon className='h-4 w-4 text-white' />
                                        </button>
                                        <button className="h-7 w-7 p-1 flex items-center justify-center bg-white rounded-full shadow-md">
                                            <ArrowLeftIcon className='h-4 w-4 text-black' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white shadow-md rounded-md p-5 lg:w-[200px] flex-1 lg:h-[190px] h-[200px] relative ">
                                <div className="lg:absolute lg:-top-10 left-0 right-0 flex flex-col items-center gap-2">
                                    <Image src={cap} loading='lazy' alt="food" className="h-[130px] w-[180px] object-cover rounded-t-md " />
                                    <div className="flex flex-col gap-2 items-center  justify-center">
                                        <h3 className="font-bold text-base text-sm">Head Warmer</h3>
                                        <p className="text-xs text-gray-500">From Bubba Shrimp</p>
                                        <p className="text-[10px]"><span className="text-red-500">$</span>4.25</p>
                                    </div>

                                    <div className="flex gap-5">
                                        <button className="h-7 w-7 p-1 flex items-center justify-center bg-black rounded-full shadow-md">
                                            <ArrowRightIcon className='h-4 w-4 text-white' />
                                        </button>
                                        <button className="h-7 w-7 p-1 flex items-center justify-center bg-white rounded-full shadow-md">
                                            <ArrowLeftIcon className='h-4 w-4 text-black' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default LandingPage
