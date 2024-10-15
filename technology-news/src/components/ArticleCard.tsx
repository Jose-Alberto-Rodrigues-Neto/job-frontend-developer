import { ArticleModal } from "@/services/ArticlesService";
import Image from "next/image";
import Author from "./Author";
import Link from "next/link";

interface ArticleCardProps{
    props: ArticleModal
    category: string
}

export default function ArticleCard({props, category}:ArticleCardProps){
    let defaultImage = "/article-image.png"

    const handleArticleId = () => {
        if(props.source.id === null){
            return props.url
        }
        return props.source.id
    }

    if(props.urlToImage && props.urlToImage !== ""){
        defaultImage = props.urlToImage
    }

    return(
        <Link href={`/${category}/${handleArticleId()}`} className="w-4/5 h-auto rounded-md flex flex-row hover:bg-zinc-100 cursor-pointer gap-3">
            <Image 
                src={defaultImage} 
                alt={defaultImage}
                width={1080}
                height={120}
                className="w-80 h-72 object-fit rounded-md"
            />
            <div className="flex flex-col w-full p-2 gap-2">
                <h2 className="text-lg text-[#008B8B] font-black">{props.source.name}</h2>
                <h1 className="text-3xl font-playfair text-slate-800">{props.title}</h1>
                <p className="text-xl text-slate-600">{props.description}</p>
                <Author authorName={props.author} publishedAt={props.publishedAt} className="h-8 w-auto" />
            </div>
        </Link>
    )
}