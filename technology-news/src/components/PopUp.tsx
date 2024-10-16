"use client"
import React from "react"
import { CgClose } from "react-icons/cg"

interface PopupProps {
  title: string
  content: string
  textBack: string
  textNext: string
  isOpen: boolean
  onClose: () => void
  onClick: () => void
}

export default function Popup({ title, content, onClose, onClick, textBack, textNext, isOpen }: PopupProps){
  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 ${isOpen === false? "hidden" : ""}`}>
      <div className="bg-white rounded-lg p-8 w-5/12 h-1/2 shadow-lg relative">
        <h2 className="text-2xl mb-4 font-poppins text-[#1E293B]">{title}</h2>
        <p className="mb-6 text-[#475569]">{content}</p>
        <CgClose className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl cursor-pointer" onClick={onClose}/>
        <div className="absolute flex bottom-4 right-4 gap-4">
            <button
            className="mt-4 bg-slate-300 hover:bg-slate-500 text-white py-2 px-6 rounded"
            onClick={onClose}
            >
            {textBack}
            </button>
            <button
            className=" mt-4 bg-green-400 hover:bg-green-600 text-white py-2 px-6 rounded"
            onClick={onClick}
            >
            {textNext}
            </button>
        </div>
        
      </div>
    </div>
  )
}

