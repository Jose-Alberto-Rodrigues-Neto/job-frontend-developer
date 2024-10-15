"use client"
import Image from "next/image";
import BackButton from "./BackButton";
import React from "react";
import { SearchBar } from "./SearchBar";

interface NavBarProps {
  backButtonIsVisible: boolean
  searchInputValue: string
  searchSetInputValue: React.Dispatch<React.SetStateAction<string>>
  searchHandleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function NavBar({...props}: NavBarProps) {
  return (
    <header className="h-[460px] bg-slate-100 flex flex-col items-center">
      <div className="flex w-full items-center h-20 px-6">

        <BackButton 
          title={"Home"} 
          href={"/"} 
          icon={<Image src={"./arrow-left-line.svg"} alt={"go-back-icon"} width={24} height={24} />} 
          isVisible={props.backButtonIsVisible}
        />

        <div className="flex w-full justify-center">
          <Image 
            src={"./Logo.svg"} 
            alt={"Logo"}
            width={306.08}
            height={38.84}
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-[12px] w-[920px] my-16">
        <h1 className="flex flex-col font-playfair text-center text-[64px] text-[#1E293B] leading-none">
          Explore as últimas notícias sobre tecnologia da web
        </h1>
        <h2 className="flex flex-col font-poppinsthin text-center text-[24px] text-[#475569]">
          Selecionamos todas as notícias sobre tecnologia 
          produzidas na web para você. Aproveite, foi tudo feito com dedicação.
        </h2>
      </div>

      <SearchBar 
        placeHolder="O que você deseja encontrar?"
        inputValue={props.searchInputValue}
        setInputValue={props.searchSetInputValue}
        handleInputChange={props.searchHandleInputChange}
      />
    </header>
  )
}
