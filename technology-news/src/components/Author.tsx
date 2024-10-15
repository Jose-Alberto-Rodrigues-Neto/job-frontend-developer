import Image from "next/image"

interface AuthorProps{
    authorName: string
    publishedAt: string
}
export default function Author({authorName, publishedAt}:AuthorProps){
    return(
        <div className="flex flex-row gap-2 text-slate-600 items-center py-2">
            <Image 
                src={"./author-default.svg"} 
                alt={authorName}
                height={40}
                width={40}
            />
            <h1 className="font-poppins text-base">{authorName}</h1>
            <h2 className="font-poppinsthin text-base">{publishedAt}</h2>
            
        </div>
    )
}