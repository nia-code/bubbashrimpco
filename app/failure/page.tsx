'use client'
import { useRouter } from 'next/navigation'

const page = () => {
const navigation = useRouter()
    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-100">
            <div className="p-5 rounded-md bg-white shadow-xl text-center flex flex-col gap-10 w-[90%] lg:w-[30%] py-10">
                <h2 className="font-bold text-2xl">Payment Failed</h2>
                <p>Unfortunately, Your transaction wasn't successful, try again.</p>
                <button onClick={() => navigation.replace('/')} className="bg-gray-900 text-white rounded-md p-5">Try Again</button>
            </div>
        </div>
    )
}

export default page