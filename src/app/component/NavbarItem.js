"use client"; 
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({title, param}){
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
    console.log(genre);
    return (
        <div>
            <Link 
            className={`m-4 hover:text-amber-600 font-bold p-2 ${
                genre && genre === param ? "underline underline-offset-4 decoration-4  decoration-amber-500 rounded-lg" : null
            }`}
             href={`/genre=${param}`}>
                {title}
            </Link>
        </div>
    );
}