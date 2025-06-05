'use client'
import { useState, useEffect } from 'react'
import { drinks, non_teas, teas, fast_food, shrimps, soups, main_dishes, sauces, house } from '@/lib/constant/menu'
import Popup from '../menu/Popup'
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useDispatch } from 'react-redux'
import { StarIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { addProduct, removeProduct } from "@/context/cartSlice"

import axios from 'axios'

import { BASE_URL } from '@/lib/constant/api'

interface Menu {
    _id: string,
    name: string,
    description: string,
    price: string,
    type: string,
    category: string,
    image: string
}

const Product = ({ setShowAlert }: { setShowAlert: any }) => {
    const [popup, setPopup] = useState(false)
    const [popupState, setPopupState] = useState({
           _id:'',
           price: 0,
           title: '',
           img: '',
           category: '',
           // createdAt: createdAt?.toLocaleString() || '',
           description: '',
           type: ''
    })

    const close = () => {
        setPopup(false)
        setPopupState({
            _id:'',
            price: 0,
            title: '',
            img: '',
            category: '',
            // createdAt: createdAt?.toLocaleString() || '',
            description: '',
            type: ''
        })
    }
    const route = useRouter()
    const [menu, setMenu] = useState<Menu[]>([])

    useEffect(() => {
        const getData = async () => {
            await axios.get(`${BASE_URL}/products/menu/Menu`)
            .then(res => {
                console.log(res.data)
                setMenu(res.data)
            })
            .catch(err => console.log(err))
        }

        getData()
    }, [])

    return (
        <section id="menu" className="w-full h-full flex flex-col gap-5 bg-white pb-5 ">
            {popup && (
                <div className="bg-black/90 h-screen fixed z-50 w-full top-0 bottom-0 flex flex-col">
                    <div onClick={close} className='bg-black/50 flex-1 lg:h-full' />
                    <Popup popupState={popupState} close={close} />
                </div>
            )}

            <p className="text-[10px] text-center text-[#F48E28] font-bold">Menu</p>
            <h2 className="text-center font-bold text-sm">Most Popular Items</h2>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:max-w-[90%] 2xl:max-w-7xl gap-2 lg:gap-5 w-full mx-auto px-3 lg:px-0">
                {menu.map((drink, index) => (
                    <Items type={drink.type} index={index} cat={drink.category} desc={drink.description} setPopupState={setPopupState} setPopup={setPopup} img={drink.image} title={drink.name} price={drink.price} id={drink._id} setShowAlert={setShowAlert} />
                ))}
            </div>

            <div onClick={() => route.push("/menu")} className="flex gap-10 mx-auto max-w-[200px] w-full pl-3 cursor-pointer font-semibold my-5 justify-between items-center p-1 rounded-full shadow-md bg-[#F48E28] text-[10px] text-white">
                 <p>See More Products</p>
                 <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                    <ChevronRightIcon className='h-5 w-5 text-[#F48E28]' />
                 </div>
            </div>
        </section>
    )
}

export default Product

const Items = ({type, index, cat, desc, setPopupState, setPopup, img, title, price, id, setShowAlert }: {type: string, index: number, cat: string, desc: string, setPopupState: any, setPopup: any, img: any, title: string, price: string, id: string, setShowAlert: any }) => {
    const dispatch = useDispatch()
    const router = useRouter()

    const add = (img: any, title: string, price: string, id: string ) => {
        setShowAlert(true)
        dispatch(addProduct({
            _id: id || '',
            price: Number(price) || 0,
            title: title || '',
            img: img || '',
            category: cat,
            quantity: 1,
            type: type
//             createdAt: createdAt?.toLocaleString() || '',
        }))
    }

    const handlePopup = () => {
        setPopupState({
            _id: id || '',
            price: Number(price) || 0,
            title: title || '',
            img: img || '',
            category: cat,
            description: desc,
            type: type
            // createdAt: createdAt?.toLocaleString() || '',
        })
        setPopup(true)
    }

    return (
        <div className={`${index > 3 && 'hidden'} h-[190px] pb-2 lg:h-[290px] lg:w-[300px] bg-white shadow-md rounded-xl overflow-hidden flex flex-col gap-2`}>
            <Image src={img} loading='lazy' width={100} height={100} unoptimized={true} alt="product" className="h-[60%] lg:h-[70%] w-full object-cover" />
            <div className="w-full flex justify-between px-2 lg:px-5">
                <h2 className="text-sm font-semibold truncate">{title}</h2>
                <p className="text- font-semibold">${price}</p>
            </div>

            <div className="w-full flex justify-between px-2 lg:px-5 items-center gap-5">
                <button onClick={() => add(img, title, price, id)} className="bg-[#F48E28] border border-[#F48E28] text-white lg:w-fit w-full lg:px-5  text-[10px] font-bold rounded-full py-2">Cart</button>
                <button onClick={handlePopup} className="border-[#F48E28] border-dashed border lg:w-fit lg:px-5 w-full  text-[10px] font-bold rounded-full py-2">view</button>
            </div>
        </div>
    )
}

