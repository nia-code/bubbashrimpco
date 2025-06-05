'use client'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon, TrashIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { cartProducts, selectTotal, selectProductItems, clearCart, addProduct, removeProduct } from "@/context/cartSlice"
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '@/lib/constant/api'

const Cart = ({ setSetShowCart }: { setSetShowCart: any }) => {
    const productsQty = useSelector(cartProducts);
    const total = useSelector(selectTotal)
    const products = useSelector(selectProductItems)
    const dispatch = useDispatch()
    const router = useRouter()

    const clear = () => {
        dispatch(clearCart())
    }

    const order = async () => {
        let id;
        if (typeof window !== 'undefined'){
            id = localStorage.getItem('userId')
        }

        if (!id) router.push('/auth/sign-in')

       await axios.post(`${BASE_URL}/orders/payment`, {
            totalPrice: total,
            quantity: productsQty,
            products,
            userId: id
       })
       .then(res => {
            router.push(res.data.url)
       })
       .catch(err => console.log(err))
    }

    return (
        <div className="w-[90%] lg:w-[30%] bg-white h-screen p-5 flex flex-col">
            <div className="h-[80vh] lg:h-[90vh] overflow-y-auto scrollbar-hide flex flex-col gap-2">
                <div className="flex justify-between items-center font-bold text-xs border-b pb-2">
                    <h2>Cart</h2>
                    <XMarkIcon onClick={() => setSetShowCart(false)} className="h-5 w-5 cursor-pointer" />
                </div>

                {products?.map((product) => (
                    <Item cat={product.category}  key={product._id} img={product.img} title={product.title} price={product.price} qty={product?.quantity} id={product._id} type={product.type} />
                ))}
            </div>

            <div className="h-[20vh] lg:h-[10vh] bg-white text-xs font-bold border-t p-2 flex flex-col gap-2 text-center">
                <div className="flex justify-between w-full items-center">
                    <p>Total Price: ${total?.toFixed(2)}</p>
                    <TrashIcon onClick={clear} className="h-5 w-5 cursor-pointer" />
                </div>
                <div className="flex items-center justify-center">
                    <button onClick={order} className="p-2 rounded-md border shadow-sm active:scale-90 hover:bg-gray-100 transition-all duration-500 ease-in-out">Order ${total?.toFixed(2)}</button>
                </div>
            </div>
        </div>
    )
}

export default Cart

const Item = ({ cat, img, title, price, qty, id, type }: { cat: string, img: any, title: string, price: number, qty: number, id: string, type: string }) => {

    const dispatch = useDispatch()

    const add = (img: any, title: string, price: number, id: string ) => {
        dispatch(addProduct({
            _id: id || '',
            price: price || 0,
            title: title || '',
            img: img || '',
            category: cat,
            quantity: 1,
            type: type
//             createdAt: createdAt?.toLocaleString() || '',
        }))
    }

    const remove = (id: string ) => {
        dispatch(removeProduct(id));
    }

    return (
        <div className='flex gap-4 items-center'>
            <div className="h-[50px] w-[50px] overflow-hidden rounded-full shadow-sm">
                <Image src={img} width={100} height={100} unoptimized={true} alt="product" className="h-full w-full object-cover" />
            </div>
            <div className="flex gap-5 justify-between flex-1">
                <div className="text-xs">
                    <h3 className="font-semibold">{title}</h3>
                    <p className="font-bold text-sm">{price}</p>
                </div>
                <div className="flex gap-5 items-center text-[10px]">
                    <ChevronLeftIcon onClick={() => remove(id)} className="h-5 w-5 cursor-pointer" />
                    <p className="border p-2 px-5">{qty}</p>
                    <ChevronRightIcon onClick={() => add(img, title, price, id)} className="h-5 w-5 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}