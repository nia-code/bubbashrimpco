
import { ClockIcon, MapPinIcon, PhoneArrowUpRightIcon } from '@heroicons/react/24/solid'

const WorkingHours = () => {
    return (
        <div id="about" className="w-full p-2 lg:p-0">
            <p className="text-[10px] text-center text-[#F48E28] font-bold">About Us</p>
            <h2 className="text-center font-bold text-sm">Working Hours</h2>
            <div className="w-full h-fit my-10 max-w-5xl mx-auto shadow-2xl border rounded-2xl p-5 flex flex-col lg:flex-row justify-between gap-5 bg-white">
                <div className='flex flex-1 flex-col gap-3 items-center justify-center border-b lg:border-b-0 lg:border-r pb-5 lg:px-5'>
                    <div className="h-8 w-8 bg-[#F48E28] rounded-full flex items-center justify-center">
                        <ClockIcon className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-[10px] font-semibold">Today 10:00am - 10:00pm</p>
                    <p className="text-[8px]">Working time</p>
                </div>
                <div className='flex flex-1 flex-col gap-3 items-center justify-center border-b lg:border-b-0 lg:border-r pb-5 lg:px-5'>
                    <div className="h-8 w-8 bg-[#F48E28] rounded-full flex items-center justify-center">
                        <MapPinIcon className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-[10px] font-semibold">Today 10:00am - 10:00pm</p>
                    <p className="text-[8px]">Working time</p>
                </div>
                <div className='flex flex-1 flex-col gap-3 items-center justify-center px-5'>
                    <div className="h-8 w-8 bg-[#F48E28] rounded-full flex items-center justify-center">
                        <PhoneArrowUpRightIcon className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-[10px] font-semibold">Today 10:00am - 10:00pm</p>
                    <p className="text-[8px]">Working time</p>
                </div>
            </div>
        </div>
    )
}

export default WorkingHours
