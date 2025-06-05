
import Image from "next/image"
import Link from "next/link"

import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'

import man from '@/assets/test (2).png'
import food from '@/assets/product/n (1).jpeg'

const Testimony = () => {
    return (
        <section className="w-full h-full flex flex-col gap-5 bg-white pb-5">
            <p className="text-[10px] text-center text-[#F48E28] font-bold">Testimonials</p>
            <h2 className="text-center font-bold text-sm">Our Happy Client Says</h2>

            <div className="flex flex-col lg:flex-row gap-5 max-w-5xl mx-auto p-5 w-full">
                <div className="flex-1 p-5">
                    <div className="relative h-[300px] shadow-2xl rounded-2xl border p-5 flex flex-col gap-5 items-center justify-center">
                        <div className="flex gap-5">
                            <Image src={man} alt="man" className="h-8 w-8 object-contain" />
                            <div>
                                <h3 className="font-bold text-xs">Willians Jhone</h3>
                                <p className="text-[10px] text-gray-500">CEO & Co-Founder</p>
                            </div>
                        </div>
                        <p className="text-xs text-center text-gray-500">“Great service, Delicious food.”</p>

                        <div className="absolute -left-5 top-[45%] bg-[#F48E28] h-10  w-10 flex items-center justify-center rounded-full z-10">
                            <ArrowLeftIcon className="h-4 w-5 text-white" />
                        </div>
                        <div className="absolute -right-5 top-[45%] bg-[#F48E28] h-10  w-10 flex items-center justify-center rounded-full z-10">
                            <ArrowRightIcon className="h-4 w-5 text-white" />
                        </div>
                    </div>
                </div>

                <div className="flex-1 p-5">
                    <Image src={food} alt="food" className="" />
                </div>
            </div>
        </section>
    )
}

export default Testimony
