import Image from 'next/image'

import Header from '../menu/Header'
import nachos from "@/assets/product/n (3).jpeg"
import garlic from "@/assets/product/n (6).jpeg"

import cap from '@/assets/cap (3).jpeg'
import bottle from '@/assets/bottle (1).jpeg'
import cloth from '@/assets/cloth (1).jpeg'
import crawfish_broil from '@/assets/product/broil (3).jpeg'

const Notifications = () => {
    return (
        <div className="h-screen lg:flex flex-col gap-5 lg:gap-3 lg:w-[80%] px-2 lg:p-5">
            <Header />
            <h3 className="px-2 lg:px-5 text-sm font-semibold my-5 lg:my-0">Notifications</h3>
            <div className="flex flex-col gap-3 py-5 px-2 lg:p-5 flex-1 h-[90%] overflow-y-auto scrollbar-hide">
                {Array(4).fill(0).map((_, index) => (
                    <ul key={index} className={`flex items-center justify-between text-[10px] py-2 font-semibold rounded-md bg-gray-100 rounded-md px-2 ${index !== 9 && 'border'}`}>
                        <li className='flex-1 flex gap-1 flex-shrink-0'>
                            {[nachos, garlic, crawfish_broil].map((product, index) => (
                                <Image key={index} src={product} alt='product' className='h-[30px] w-[30px] flex-shrink-0 flex rounded-full object-cover' />
                            ))}
                        </li>
                        <li className='lg:w-[150px] flex-1 flex-shrink-0 text-center flex-shrink-0'>3</li>
                        <li className='lg:w-[150px] flex-1 flex-shrink-0 text-center flex-shrink-0'>$500</li>
                        <li className={`lg:w-[150px] flex-1 flex-shrink-0 text-center flex-shrink-0  py-2 rounded-md text-green-700 font-semibold`}>
                            updated
                        </li>
                    </ul>
                ))}

                {Array(4).fill(0).map((_, index) => (
                    <ul key={index} className={`flex items-center justify-between text-[10px] py-2 font-semibold rounded-md bg-gray-100 rounded-md px-2 ${index !== 9 && 'border'}`}>
                        <li className='flex-1 flex gap-1 flex-shrink-0'>
                            {[cap, bottle, cloth].map((product, index) => (
                                <Image key={index} src={product} alt='product' className='h-[30px] w-[30px] flex-shrink-0 flex rounded-full object-cover' />
                            ))}
                        </li>
                        <li className='lg:w-[150px] flex-1 flex-shrink-0 text-center flex-shrink-0'>3</li>
                        <li className='lg:w-[150px] flex-1 flex-shrink-0 text-center flex-shrink-0'>$500</li>
                        <li className={`lg:w-[150px] flex-1 flex-shrink-0 text-center flex-shrink-0  py-2 rounded-md text-green-700 font-semibold`}>
                            updated
                        </li>
                    </ul>
                ))}

            </div>
        </div>
    )
}

export default Notifications