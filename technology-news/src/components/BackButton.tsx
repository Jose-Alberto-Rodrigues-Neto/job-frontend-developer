import Link from "next/link"
import { ReactNode } from "react"

interface BackButtonProps{
    title: string
    href: string
    icon: ReactNode
    isVisible: boolean
}

export default function BackButton({...props}:BackButtonProps){
    return(
        <Link href={props.href} className={`flex flex-row items-center gap-2 ${props.isVisible? "flex" : "hidden"}`}>
            <div>{props.icon}</div>
            <p className="text-black font-poppins">{props.title}</p>
        </Link>
    )
}
