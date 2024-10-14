import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function NavBar(){
    return (
      <header className="flex w-full items-center">
        <BackButton title={"Home"} href={"#"} icon={<div></div>}/>
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
}

function BackButton({...props}:BackButtonProps){
    return(
        <Link href={props.href}>
            <div>{props.icon}</div>
            <p>{props.title}</p>
        </Link>
    )
}
