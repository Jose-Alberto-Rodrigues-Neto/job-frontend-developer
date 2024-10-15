"use client"
import Image from "next/image"
import React from "react"

interface SearchBarProps {
  placeHolder: string
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export function SearchBar({...props}: SearchBarProps) {
  const [isClicked, setIsClicked] = React.useState(false)

  const handleClearInput = () => {
    props.setInputValue("")
  }

  return (
    <div className="relative w-[560px] items-center flex shadow-lg my-3">
      <input 
        value={props.inputValue}
        placeholder={props.placeHolder}
        onChange={props.handleInputChange}
        onKeyDown={props.handleKeyDown}
        onClick={() => setIsClicked(true)} 
        onBlur={() => setIsClicked(false)}
        className={`w-full p-5 ${isClicked ? "" : "px-16"} rounded-md text-black`}
      />

      <Image 
        src={"./search-line.svg"} 
        alt={"Lupa"} 
        height={24}
        width={24}
        className={`${isClicked ? "hidden" : "absolute left-5"}`}        
      />

      <Image
        src={"./close-circle.svg"} 
        alt={"Limpar"} 
        height={24}
        width={24}
        onClick={handleClearInput}
        className={`${props.inputValue ? "absolute cursor-pointer right-5 text-2xl" : "hidden"}`}   
      />
    </div>
  )
}
