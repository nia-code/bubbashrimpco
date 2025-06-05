'use client'

import Image from "next/image"
import { useState, useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

import { useRouter } from "next/navigation"

import { addProduct, removeProduct, clearCart } from "@/context/cartSlice"
import { useDispatch } from 'react-redux'
import Popup from './Popup'

import axios from 'axios'

import { BASE_URL } from '@/lib/constant/api'

type Menu = {
  name: string;
  image: string; // Ensure the image property exists
  price: string;
  category: string;
  description: string;
  type: string;
  _id: string;
};

const Menus = ({ setShowAlert }: { setShowAlert: any }) => {
    const [name, setName] = useState("")
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
        <section id="menu" className="w-full h-full flex flex-col gap-5 bg-white pb-5">
            {popup && (
                <div className="bg-black/90 h-screen fixed z-50 w-full top-0 bottom-0 flex flex-col">
                    <div onClick={close} className='bg-black/50 flex-1 lg:h-full' />
                    <Popup popupState={popupState} close={close} />
                </div>
            )}

            <div className="flex flex-col gap-4 md:max-w-[90%] 2xl:max-w-7xl gap-5 w-full mx-auto lg:px-5 px-3 ">
                <h2 className="font-semibold ">Search Food Menu Below</h2>
                <div className="flex gap-2 w-full items-center">
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="search by product name" className="border text-xs font-semibold px-2 py-2 outline-none w-full shadow-sm" />
                    {name.length > 0 && <XMarkIcon onClick={() => setName("")} className="h-5 w-5 cursor-pointer" /> }
                </div>
            </div>

            <p className="text-[10px] text-center text-[#F48E28] font-bold">Menu</p>
            <h2 className="text-center font-bold text-sm">Most Popular Items</h2>

            {name.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:max-w-[90%] 2xl:max-w-7xl gap-2 lg:gap-5 w-full mx-auto px-3 lg:px-0">
                    {menu.map((drink, index) => (
                        <>
                        {drink.name.toLowerCase().includes(name.toLowerCase()) && (
                            <Items
                              type={drink.type}
                              key={index}
                              cat={drink.category}
                              desc={drink.description}
                              setPopupState={setPopupState}
                              setPopup={setPopup}
                              img={drink.image}
                              title={drink.name}
                              price={drink.price}
                              id={drink._id}
                              setShowAlert={setShowAlert}
                            />
                        )}
                        </>
                    ))}
                </div>
            ): (
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:max-w-[90%] 2xl:max-w-7xl gap-2 lg:gap-5 w-full mx-auto px-3 lg:px-0">
                    {menu.map((drink, index) => (
                        <Items
                          type={drink.type}
                          key={index}
                          cat={drink.category}
                          desc={drink.description}
                          setPopupState={setPopupState}
                          setPopup={setPopup}
                          img={drink.image}
                          title={drink.name}
                          price={drink.price}
                          id={drink._id}
                          setShowAlert={setShowAlert}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

export default Menus

const Items = ({ type,  cat, desc, setPopupState, setPopup, img, title, price, id, setShowAlert }: {type: string,  cat: string, desc: string, setPopupState: any, setPopup: any, img: any, title: string, price: string, id: string, setShowAlert: any }) => {
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
        <div className="h-[200px] pb-2 lg:h-[290px] lg:w-[300px] bg-white shadow-md rounded-xl overflow-hidden flex flex-col justify-between gap-2">
            <div className="relative h-[60%] lg:h-[70%] w-full">
                <Image src={img} loading='lazy' width={100} height={100} unoptimized={true} alt="product" className="w-full h-full object-cover" />

            </div>
            <div className="w-full flex justify-between px-2 lg:px-5">
                <h2 className="text-xs truncate">{title}</h2>
                <p className="text-xs font-bold text-[#F48E28] flex items-center">${price}</p>
            </div>

            <div className="w-full flex justify-between px-2 lg:px-5 items-center gap-5">
                <button onClick={() => add(img, title, price, id)} className="bg-[#F48E28] border border-[#F48E28] text-white lg:w-fit w-full lg:px-5  text-[10px] font-bold rounded-full py-2">Cart</button>
                <button onClick={handlePopup} className="border-[#F48E28] border-dashed border lg:w-fit lg:px-5 w-full  text-[10px] font-bold rounded-full py-2">view</button>
            </div>
        </div>
    )
}
