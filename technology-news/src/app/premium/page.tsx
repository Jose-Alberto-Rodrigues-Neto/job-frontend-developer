"use client"
import Popup from "@/components/PopUp";
import { PremiumProvider, usePremium } from "@/components/PremiumContext";
import { useRouter } from "next/navigation";

export default function Premium(){
    const router = useRouter()
    const { setIsPremium } = usePremium()

    const handleClosePopUp = () =>{
        router.push('/')
    }

    const handleGoPremium = () =>{
        setIsPremium(true)
        router.push('/')
    }

    return(
        <>
                <Popup 
                    title="Torne-se Premium!" 
                    content={"Basta cliclar no botão 'Virar Premium'!"} 
                    textBack={"Voltar"} 
                    textNext={"Virar Premium"} 
                    onClose={handleClosePopUp} 
                    onClick={handleGoPremium}
                    isOpen={true}
                />
        </>
    )    
}