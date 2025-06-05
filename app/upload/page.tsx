'use client'
import { useState } from 'react'
import { storage, bucketId } from '@/lib/appwrite'
import { ID } from 'appwrite';
import Image from 'next/image'
import axios from 'axios'
import { BASE_URL } from '@/lib/constant/api'

const page = () => {
    const [file, setFile] = useState<File | null>(null)
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [desc, setDesc] = useState('')
    const [type, setType] = useState('')

    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false)

    const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files){
            const files = e.target.files[0]

            setFile(files);
            console.log(files)
        }
    }

//     const upload = () => {
//         if (!name || !file || !price) return
//
//         setLoading(true)
//
//         const id = ID.unique()
//         const promise = storage.createFile(
//             bucketId,
//             id,
//             file
//         );
//
//         promise.then(async function  (response) {
//             const result = storage.getFileDownload(bucketId, id);
//
//             await axios.post(`${BASE_URL}/products/upload`, {
//                 name, type, category, price, description: desc, image: result.href
//             })
//
//             .then((res) => {
//                 console.log(res.data)
//                 setLoading(false)
//
//                 setName('')
//                 setDesc('')
//                 setType('')
//                 setPrice('')
//                 setCategory('')
//             })
//             .catch(err => console.log(err))
//
//
//         }, function (error) {
//             console.log(error); // Failure
//         });
//
//
//
//     }

    return (
        <div className='text-black flex flex-col gap-5 p-5'>



        </div>
    )
}

export default page