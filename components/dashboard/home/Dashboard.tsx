import { BellIcon } from '@heroicons/react/24/outline'
import Header from './Header'
import Orders from './Orders'

const Dashboard = () => {
    return (
        <div className="h-screen lg:flex flex-col gap-5 lg:w-[80%] px-2 lg:p-5">
            <Header />
            <Orders />
        </div>
    )
}

export default Dashboard