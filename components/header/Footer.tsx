import logo from "@/assets/logo.jpeg"

import Image from 'next/image'

import facebook from "@/assets/Facebook.png"
import instagram from "@/assets/Instagram.png"
import twitter from "@/assets/Twitter.png"
import linkedIn from "@/assets/Linkind.png"

const Footer = () => {
    return (
        <div className="w-full">
            <div className="md:max-w-[90%] 2xl:max-w-7xl mx-auto rounded-t-xl border-t w-full lg:h-[50vh] lg:px-2 py-5 lg:p-5 flex flex-col lg:flex-row justify-between">
                <div className="flex-1 flex flex-col gap-10  p-5">
                    <Image src={logo} alt="logo" className="h-[100px] w-[100px]" />
                    <p className="text-xs">Welcome to Bubba Shrimp Co, your go-to spot for fresh dishes and unique merchandise to Northwest Arkansas. Enjoy our flavorful menu and explore our exclusive products, all infused with Southern Charm. Interested in bringing our concept to your community? Explore our exciting franchise opportunity today!.</p>
                    <div className='flex gap-5'>
                        <Image src={facebook} alt="logo" className="h-8 w-8 object-contain" />
                        <Image src={instagram} alt="logo" className="h-8 w-8 object-contain" />
                        <Image src={twitter} alt="logo" className="h-8 w-8 object-contain" />
                        <Image src={linkedIn} alt="logo" className="h-8 w-8 object-contain" />
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-10 p-5">
                    <h2 className="text-md font-bold">Opening Restaurant</h2>
                    <p className="text-xs">Sat-Wed: 09:00am-10:00PM</p>
                    <p className="text-xs">Thursday: 09:00am-11:00PM</p>
                    <p className="text-xs">Friday: 09:00am-8:00PM</p>
                </div>
                <div className="flex-1 flex flex-col gap-5  p-5">
                    <h2 className="text-md font-bold">User Link</h2>
                    <p className="text-xs">About Us</p>
                    <p className="text-xs">Contact Us</p>
                    <p className="text-xs">Order Delivery</p>
                    <p className="text-xs">Payment & Tax</p>
                    <p className="text-xs">Terms of Services</p>
                </div>
                <div className="flex-1 flex flex-col gap-10  p-5">
                    <h2 className="text-md font-bold">Contact Us</h2>
                    <p className="text-xs">Bubba Shrimp Company LLC</p>
                    <p className="text-xs">3133 Silverton Street</p>
                    <p className="text-xs">72762</p>
                </div>
            </div>
        </div>
    )
}

export default Footer