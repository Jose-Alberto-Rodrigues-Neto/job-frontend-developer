import Image from "next/image";
import BackButton from "./BackButton";
import React from "react";
import { SearchBar } from "./SearchBar";
import SaveButton from "./SaveButton";
import { FaBookBookmark } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface NavBarProps {
  backButtonIsVisible: boolean
  articleSavedIsVisible?: boolean
  searchInputValue: string
  bgColor?: string
  title?: string
  subtitle?: string
  searchSetInputValue: React.Dispatch<React.SetStateAction<string>>
  searchHandleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  searchHandleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onSave?: () => void
}

export default function NavBar({...props}: NavBarProps) {
  const router = useRouter()
  const goToSavedArticles = () => {
    return router.push("/my-articles")
  }

  const handleBgColor = () => {
    switch (props.bgColor) {
        case "ia":
            return "bg-[#6366F1]";
        case "cybersecurity":
            return "bg-[#14B8A6]";
        case "blockchain":
            return "bg-[#F59E0B]";
        case "cloud":
            return "bg-[#38BDF8]";
        case "startup":
            return "bg-[#A855F7]";  
        default:
            return "bg-slate-100";
    }
  }

  return (
    <header className={`h-full  flex flex-col items-center ${props.bgColor? handleBgColor(): "bg-slate-100"}`}>
      <div className={`flex w-full items-center h-20 p-6`}>

        <BackButton 
          title={"Home"} 
          href={"/"} 
          icon={<Image src={"/arrow-left-line.svg"} alt={"go-back-icon"} width={24} height={24} />} 
          isVisible={props.backButtonIsVisible}
        />

        <div className="flex w-full justify-center">
          <Image 
            src={"/Logo.svg"} 
            alt={"Logo"}
            width={306.08}
            height={38.84}
          />
        </div>
        {props.onSave && <SaveButton onClick={props.onSave} /> }

        {props.articleSavedIsVisible && <FaBookBookmark onClick={goToSavedArticles} className="text-3xl text-black hover:animate-pulse cursor-pointer"/>}
      </div>
      
      <div className={`"flex flex-col gap-[12px] w-[920px] mt-10"`}>
        <h1 className="flex flex-col font-playfair text-center text-[64px] text-[#1E293B] leading-none">
          {props.title}
        </h1>
        <h2 className="flex flex-col font-poppinsthin text-center text-[24px] text-[#475569]">
          {props.subtitle}
        </h2>
      </div>

      <SearchBar 
        placeHolder="O que você deseja encontrar?"
        inputValue={props.searchInputValue}
        setInputValue={props.searchSetInputValue}
        handleInputChange={props.searchHandleInputChange}
        handleKeyDown={props.searchHandleKeyDown}
      />
    </header>
  )
}
