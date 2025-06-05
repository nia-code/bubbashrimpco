import s from "@/assets/service (1).png"
import s2 from "@/assets/service (2).png"
import s3 from "@/assets/service (3).png"

import Image from "next/image"

import { ClockIcon, MapPinIcon, PhoneArrowUpRightIcon } from '@heroicons/react/24/solid'

const Service = () => {
    return (
        <section id='services' className="w-full h-full flex flex-col gap-5 bg-white pb-5">
            <p className="text-[10px] text-center text-[#F48E28] font-bold">Services</p>
            <h2 className="text-center font-bold text-sm">Why Choose Bubba Shrimp Co</h2>

            <div className="w-full h-fit my-10 max-w-5xl mx-auto  p-5 flex flex-col lg:flex-row justify-between gap-5 bg-white">
                <div className='flex flex-1 flex-col gap-3 items-center justify-center lg:h-[300px] h-fit py-10 border rounded-xl px-5'>
                    <Image src={s} alt="bike" className="h-16 w-16 object-contain" />
                    <p className="text-xs font-semibold">Quality Food</p>
                    <p className="text-[10px] text-center">At Bubba Shrimp co., we pride ourselves on delivering top-quality, healthy meals that are as fresh as they are delicious</p>
                </div>
                <div className='flex flex-1 flex-col gap-3 items-center justify-center lg:h-[300px] h-fit py-10 shadow-xl rounded-xl px-5'>
                    <Image src={s3} alt="bike" className="h-16 w-16 object-contain" />
                    <p className="text-xs font-semibold">Healthy Food</p>
                    <p className="text-[10px] text-center">Our dishes are crafted using  only the finest, fresh harvested shrimp and locally sourced ingredient to ensure every bite is packed with flavor and nutrition. We're committed to providing our customers with meals that not only taste great but also support a healthy lifestyle.</p>
                </div>
                <div className='flex flex-1 flex-col gap-3 items-center justify-center border lg:h-[300px] h-fit py-10 rounded-xl px-5'>
                    <Image src={s2} alt="bike" className="h-16 w-16 object-contain" />
                    <p className="text-xs font-semibold">Fast & Reliable Delivery</p>
                    <p className="text-[10px] text-center">We understand the importance of getting your food fast, especially when you're hungry! That's why we offer swift and reliable delivery across Northwest Arkanses, ensuring your meal arrives fresh and on time, every time.</p>
                </div>
            </div>

            <p className="text-[10px] text-center text-[#F48E28] font-bold">WE ARE AVAILABLE FOR</p>

            <div className="w-full h-fit my-10 max-w-5xl mx-auto  p-5 flex flex-col lg:flex-row justify-between gap-5 bg-white font-bold uppercase">
                <div className='flex flex-1 flex-col gap-3 items-center justify-center h-[100px] py-10 border rounded-xl px-5'>
                    <p className="text-[10px] text-center">catering services</p>
                </div>
                <div className='flex flex-1 flex-col gap-3 items-center justify-center h-[100px] py-10 shadow-xl rounded-xl px-5'>
                    <p className="text-[10px] text-center">birthdays</p>
                </div>
                <div className='flex flex-1 flex-col gap-3 items-center justify-center border h-[100px]  py-10 rounded-xl px-5'>
                    <p className="text-[10px] text-center">events</p>
                </div>
                <div className='flex flex-1 flex-col gap-3 items-center justify-center h-[100px] py-10 shadow-xl rounded-xl px-5'>
                    <p className="text-[10px] text-center">weddings</p>
                </div>
            </div>

        </section>
    )
}

export default Service
