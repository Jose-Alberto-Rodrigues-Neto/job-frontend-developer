import {  FaRegBookmark } from "react-icons/fa";

interface SaveButtonProps{
    onClick?: () => void
}
export default function SaveButton({...props}: SaveButtonProps){
    return(
        <FaRegBookmark onClick={props.onClick} className="text-3xl text-black hover:animate-pulse cursor-pointer"/>
    )
}