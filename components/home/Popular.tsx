import cup from '@/assets/cup (1).jpeg'
import cup2 from '@/assets/cup (2).jpeg'
import cap from '@/assets/cap (1).jpeg'

import cap2 from '@/assets/cap (2).jpeg'
import cap3 from '@/assets/cap (3).jpeg'
import bottle from '@/assets/bottle (1).jpeg'

import bottle2 from '@/assets/bottle (2).jpeg'
import bottle3 from '@/assets/bottle (3).jpeg'
import cloth from '@/assets/cloth (1).jpeg'
import cloth2 from '@/assets/cloth (2).jpeg'
import cloth3 from '@/assets/cloth (3).jpeg'

import Link from 'next/link'
import Image from "next/image"
import { drinks, non_teas, teas, fast_food, shrimps, soups, main_dishes, sauces, house } from '@/lib/constant/menu'
import { StarIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const Popular = () => {
    return (
        <div className="w-full h-full flex flex-col gap-5 bg-white pb-5">
            <p className="text-[10px] text-center text-[#F48E28] font-bold">Highlight</p>
            <h2 className="text-center font-bold text-sm">All Products Categories</h2>

            <div className="flex scrollbar-hide gap-5 md:max-w-[90%] 2xl:max-w-7xl  gap-5 w-full mx-auto overflow-x-auto">

                <Item img={cup} link='/merchandise' />
                <Item img={cap} link='/merchandise' />
                {house.map((p, index) => (
                    <Item key={p.name} img={p.img} link='/menu/house'  />
                ))}

                <Item img={bottle} link='/merchandise' />
                <Item img={cloth} link='/merchandise' />

                {drinks.map((drink, index) => (
                    <Item key={drink.name} img={drink.img} link='/menu/drink'  />
                ))}
                <Item img={cup2} link='/merchandise' />
                <Item img={cap2} link='/merchandise' />

                {non_teas.map((tea, index) => (
                    <Item key={tea.name} img={tea.img} link='/menu/tea' />
                ))}

                <Item img={bottle2} link='/merchandise' />
                <Item img={cap3} link='/merchandise' />

                {teas.map((tea, index) => (
                    <Item key={tea.name} img={tea.img} link='/menu/tea' />
                ))}

                <Item img={bottle3} link='/merchandise' />
                <Item img={cloth3} link='/merchandise' />

                {fast_food.map((p, index) => (
                    <Item key={p.name} img={p.img} link='/menu/fast-food' />
                ))}

                {shrimps.map((p, index) => (
                    <Item key={p.name}  img={p.img} link='/menu/shrimp' />
                ))}

                {sauces.map((p, index) => (
                    <Item key={p.name}  img={p.img} link='/menu/sauce' />
                ))}

                {soups.map((p, index) => (
                    <Item key={p.name}  img={p.img} link='/menu/soups' />
                ))}

                {main_dishes.map((p, index) => (
                    <Item key={p.name}  img={p.img} link='/menu/main-dishes' />
                ))}

            </div>
        </div>
    )
}

export default Popular

const Item = ({ img, link }: { img: any, link: string }) => {
    return <Link href={link} className="h-[100px] w-[100px] rounded-full overflow-hidden flex-shrink-0 flex">
        <Image src={img} loading='lazy' alt="cup" className="h-full w-full object-cover" />
    </Link>
}