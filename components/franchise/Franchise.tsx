import Link from 'next/link'
import Image from 'next/image'
import f from "@/assets/franchise/f-1.jpg"
import f2 from "@/assets/franchise/f-2.jpg"

const Franchise =() => {
    return (
        <div className="max-w-7xl mx-auto w-full p-5 h-full flex gap-5">
           <div className="lg:flex flex-col gap-4 p-5 sticky top-20 w-[300px] z-28 border-r h-screen hidden">
               <p className="p-2 text-base font-semibold">Bubba Shrimp Co</p>
               <Link href='/franchise' className=" p-2 text-sm hover:bg-gray-100 rounded-md cursor-pointer">Welcome</Link>
               <Link href='#about' className=" p-2 text-sm hover:bg-gray-100 rounded-md cursor-pointer">About Bubba Shrimp Co</Link>
               <Link href='#why' className=" p-2 text-sm hover:bg-gray-100 rounded-md cursor-pointer">Why Franchise with Us</Link>
               <Link href='#contact' className="p-2 text-sm hover:bg-gray-100 rounded-md cursor-pointer">Contact Us</Link>
           </div>
            <div className="h-full flex flex-col gap-10 flex-1 lg:px-5">
                <div className="flex flex-col  gap-5 lg:flex-row">
                    <div id='welcome' className='flex flex-col gap-3'>
                        <h2 className='text-3xl font-bold'>FRANCHISE WITH BUBBA SHRIMP CO</h2>
                        <p className="text-sm text-gray-500">Welcome to Bubba Shrimp Co., where our passion for fresh, high-quality dishes meet the entrepreneurial spirit of America.</p>
                        <p className="text-sm text-gray-500">Based in the heart of Arkanses, we've built a brand that blends the rich culinary traditions of shrimp with a unique, savory twist. Now we are offering you the opportunity to join our growing family by becoming a Bubba Shrimp Co. franchise.</p>
                    </div>
                    <Image src={f} alt='franchise' className="w-full lg:w-1/2 h-[300px] rounded-md object-cover" />
                </div>
                <div id='about' className='flex flex-col gap-3'>
                    <h2 className='text-3xl font-bold'>ABOUT BUBBA SHRIMP CO.</h2>
                    <p className="text-sm text-gray-500">At Bubba Shrimp Co., we specialize in crafting delicious shrimp dishes that bring people together. Our menu is designed to cater to divers palates, incorporating flavors from various cultures to create a truly unforgettable dining experience.</p>
                    <p className="text-sm text-gray-500">Alongside our seafood offerings, we also provide a selection of quality merchandise that allows our customers to take a piece of Bubba Shrimp Co. home with them.</p>
                </div>
                <div className="flex flex-col  gap-5 lg:flex-row">
                    <div id='why' className='flex flex-col gap-3'>
                        <h2 className='text-3xl font-bold'>WHY FRANCHISE WITH US?.</h2>
                        <p className="text-sm text-gray-500"><span className='font-semibold text-lg'>Proven Business Model:</span> <br /> Our Success in Arkanses speaks for itself. With our comprehensive support and guidance, you'll be set up to replicate that success in your location.</p>
                        <p className="text-sm text-gray-500"><span className='font-semibold text-lg'>Brand Recognition:</span> <br /> Bubba Shrimp Co. is rapidly becoming a household name, and as a franchise, you'll benefit from our growing reputation.</p>
                        <p className="text-sm text-gray-500"><span className='font-semibold text-lg'>Comprehensive Training & Support:</span> <br /> We provide you with the all the tools and training you need to run a successful franchise, from operational guidance to marketing strategies.</p>
                        <p className="text-sm text-gray-500">Get started if you're passionate about food and entrepreneurship, we'd love to talk to you about bringing Bubba Shrimp Co. to your community.</p>
                        <p className="text-sm text-gray-500">For inquires, please schedule a consultation with our CEO directly. To ensure that we prioritize serious inquires and avoid spam calls, a $100 consultation fee will be required.</p>
                    </div>
                    <Image src={f2} alt='franchise' className="w-full lg:w-1/2 h-[300px] rounded-md object-cover" />
                </div>

                <div id='contact' className='flex flex-col gap-3'>
                    <h2 className='text-3xl font-bold'>CONTACT US</h2>
                    <p className="text-sm text-gray-500">Ready to explore this exciting opportunity? Schedule your consultation today and take the first step toward owning a Bubba Shrimp Co. franchise.</p>
                    <p className="text-sm text-blue-800"><span className='font-semibold text-lg text-black'>Email:</span> <Link href="mailto:support@bubbashrimpco.com">support@bubbashrimpco.com</Link></p>
                    <p className="text-sm text-blue-800"><span className='font-semibold text-lg text-black'>Phone:</span> <Link href="tel:+1 (479) 287-0016">+1 (479) 287-0016</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Franchise