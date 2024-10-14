import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface NavBarProps{
    backButtonIsVisible: boolean
}

export default function NavBar({backButtonIsVisible}:NavBarProps){
    return (
      <header className="flex w-full items-center h-20 px-6">
        <BackButton 
        title={"Home"} 
        href={"/"} 
        icon={<Image src={"./arrow-left-line.svg"} alt={"go-back-icon"} width={24} height={24}/>} 
        isVisible={backButtonIsVisible}
        />
        <h1 className="flex w-full justify-center">
            
            <Image 
                src={"./Logo.svg"} 
                alt={"Logo"}
                width={306.08}
                height={38.84}
            />
        </h1>
      </header>
    )
  }

interface BackButtonProps{
    title: string
    href: string
    icon: ReactNode
    isVisible: boolean
}

function BackButton({...props}:BackButtonProps){
    return(
        <Link href={props.href} className={`flex flex-row items-center gap-2 ${props.isVisible? "flex" : "hidden"}`}>
            <div>{props.icon}</div>
            <p className="text-black font-poppins">{props.title}</p>
        </Link>
    )
}
