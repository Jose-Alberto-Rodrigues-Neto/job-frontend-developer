"use client"
import Image from "next/image"
import React from "react"

interface PaginationProps{
    pages: number
    selectedPage: number
    onClick: (number:number) => void
    nextNumber: () => void
    prevNumber: () => void
}

export default function Pagination({...props}:PaginationProps){
    const pagesNumber = Math.ceil(props.pages / 20)
    return(
        <ul className="flex flex-row gap-4 self-center m-10">
            <button onClick={props.prevNumber}>
                <Image 
                        src={`${props.selectedPage === 1? "/pagination-left.svg" : "/pagination-left-selected.svg"}`} 
                        alt={"arrow-right"}
                        height={24}
                        width={24}
                    />
            </button>
            {
                Array.from({ length: pagesNumber }, (_, index) => (//colocar lógica de pular páginas
                        <Page 
                            key={index+1} 
                            pageNumber={index + 1} 
                            isSelected={props.selectedPage === index+1} 
                            onClick={() => {props.onClick(index + 1)}}
                        />
                    )
                )
            }
             <button onClick={props.nextNumber}>
                <Image 
                    src={`${props.selectedPage === 5? "/pagination-right.svg" : "/pagination-right-selected.svg"}`} 
                    alt={"arrow-right"}
                    height={24}
                    width={24}
                />
            </button>
        </ul>
    )
}

interface Page{
    pageNumber: number
    isSelected: boolean
    onClick: (number:number) => void
}

function Page({...props}:Page){
    return(
        <li onClick={() => props.onClick(props.pageNumber)} className={`text-lg cursor-pointer ${props.isSelected? "text-[#008B8B]" : "text-slate-800"}`}>
            {props.pageNumber}
        </li>
    )
}