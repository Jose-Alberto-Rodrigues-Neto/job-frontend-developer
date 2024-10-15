"use client"
interface HeadingIdProps{
    params: { 
        category: string
        headingid: string 
    }
}
export default function HeadingId({params:{ headingid }}: HeadingIdProps){
    return(
        <h1 className="text-black text-3xl">olaa {headingid.toString()}</h1>
    )
}