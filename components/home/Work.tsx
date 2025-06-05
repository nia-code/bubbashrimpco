
import Image from "next/image"
import Link from "next/link"

import w from '@/assets/work (3).png'
import w2 from '@/assets/work (1).png'
import w3 from '@/assets/work (2).png'

import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'

const Work = () => {
    return (
        <section className="w-full h-full flex flex-col gap-5 bg-white pb-5">
            <p className="text-[10px] text-center text-[#F48E28] font-bold">How to work</p>
            <h2 className="text-center font-bold text-sm">Food Us An Important Part Of A Balanced Diet</h2>

            <div className="max-w-5xl mx-auto w-full p-5 flex flex-col gap-5 lg:flex-row border border-dashed rounded-xl">
                <div className="flex flex-1 flex-col gap-3">
                    <Image src={w} alt='work' className="lg:w-[150px] w-full lg:h-[100px] object-contain"  />
                    <h3 className="font-bold text-lg">CHOOSE</h3>
                    <p className="text-xs">Do you want to lose weight, exercise, <br /> adhere to a therapeutic diet? Our <br />
                        dietitian will help you with choosing the <br /> right program!
                    </p>
                </div>
                <div className="flex flex-1 flex-col gap-3 items-center">
                    <h3 className="font-bold text-lg">PREPARE FOOD</h3>
                    <p className="text-xs text-center">Do you want to lose weight, exercise, <br /> adhere to a therapeutic diet? Our <br />
                        dietitian will help you with choosing the <br /> right program!
                    </p>
                    <Image src={w2} alt='work' className="lg:w-[150px] w-full lg:h-[100px] object-contain"   />
                </div>
                <div className="flex flex-1  items-end justify-end flex-col gap-3">
                    <Image src={w3} alt='work' className="lg:w-[150px] w-full lg:h-[100px] object-contain "   />
                    <h3 className="font-bold text-lg text-end">DELIVER</h3>
                    <p className="text-xs text-end">Do you want to lose weight, exercise, <br /> adhere to a therapeutic diet? Our <br />
                        dietitian will help you with choosing the <br />right program!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Work
