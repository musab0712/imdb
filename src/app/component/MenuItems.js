import Link from "next/link";

export default function MenuItems({title, adrs, Icon}){
    return (
        <div className="">
            <Link href={adrs} className="mx-4 lg:mx-6 hover:text-amber-600">
                <Icon className="text-2xl sm:hidden mx-4" />
                <p className="font-bold hidden sm:inline my-2 text-sm ">{title}</p>
            </Link>
        </div>
    );
}