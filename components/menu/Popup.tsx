import Image from 'next/image'

import { useDispatch } from 'react-redux'
import { addProduct, removeProduct, clearCart } from "@/context/cartSlice"
import { XMarkIcon } from '@heroicons/react/24/solid'

interface PopupProps {
  popupState: {
    _id: string;
    price: number;
    title: string;
    img: string;
    category: string;
    description: string;
    type: string
  };
  close: () => void
}


const Popup = ({ popupState, close }: PopupProps) => {
    const dispatch = useDispatch()
    const add = () => {
        dispatch(addProduct({
            _id: popupState._id || '',
            price: Number(popupState.price) || 0,
            title: popupState.title || '',
            img: popupState.img || '',
            category: popupState.category,
            quantity: 1,
            type: popupState.type
//             createdAt: createdAt?.toLocaleString() || '',
        }))
    }

    return (
        <div className="h-fit bg-white rounded-t-2xl  pb-5 flex flex-col gap-5 md:flex-row overflow-hidden">
            <div className="flex-1 md:px-4 h-[400px] relative">
                <Image src={popupState.img} unoptimized={true} width={100} height={100} alt="image" className="h-full w-full  object-cover" />

                <XMarkIcon onClick={close} className="absolute z-10 top-5 right-5 text-white h-8 w-8 cursor-pointer shadow-sm bg-black rounded-full" />
            </div>
            <div className="flex-1 md:px-4 h-full flex flex-col gap-5 px-2 lg:px-5">
                <h2 className="text-xl font-bold">{popupState.title}</h2>
                {popupState.description.length > 0  && <p className="text-xs">{popupState.description}</p> }
                 <div className='flex gap-5 capitalize justify-between items-center'>
                    <p>Type: {popupState.type.length > 0 && popupState.type}</p>
                    <p className="text-xl font-bold">Price: ${popupState.price}</p>
                 </div>
                <div className='mt-auto flex gap-5 justify-between'>
                    <button onClick={add} className='active:scale-95 transition-all ease-in-out duration-300 bg-[#F48E28] text-white border p-3 rounded-md w-[200px]'>Add to Cart</button>
                    <button className='border border-dotted border-[#F48E28] p-3 rounded-md w-[200px] '>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Popup