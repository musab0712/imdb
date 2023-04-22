import Link from 'next/link';
import MenuItems from './MenuItems';
import {AiTwotoneHome} from 'react-icons/ai';
import {BsInfoCircleFill} from 'react-icons/bs';
import DrakModeSwitch from './DarkModeSwitch';

export default function Header(){
    return (
        <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
             <div className="flex">
                <MenuItems 
                    title = "HOME"
                    adrs = "/"
                    Icon = {AiTwotoneHome}
                />
                <MenuItems 
                    title = "ABOUT"
                    adrs = "/about"
                    Icon = {BsInfoCircleFill}
                />
             </div>
             <div className="flex items-center space-x-5">
                <DrakModeSwitch />
                <Link href="/">
                    <h2 className='text-2'>
                        <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMDb</span>
                        <span className='text-xl px-1 hidden sm:inline'>Clone</span>
                    </h2>
                </Link>
             </div>
        </div>
    );
 }