import { format, parseISO } from 'date-fns';
import Image from "next/image"

interface AuthorProps{
    authorName: string
    publishedAt: string
    className?: string
}
export default function Author({authorName, publishedAt, className}:AuthorProps){
    const date = parseISO(publishedAt)
    const formattedDate = format(date, "MMMM dd',' yyyy")
    return(
        <div className="flex flex-row gap-2 text-slate-600 items-center py-2">
            <Image 
                src={"/image.png"} 
                alt={authorName || "Author"}
                height={40}
                width={40}
                className={`${className}`}
            />
            <h1 className="font-poppins text-base truncate max-w-72">{authorName || "Author"}</h1>
            <h2 className="font-poppinsthin text-base">{formattedDate}</h2>
            
        </div>
    )
}