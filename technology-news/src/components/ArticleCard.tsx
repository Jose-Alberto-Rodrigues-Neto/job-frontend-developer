import { ArticleModal } from "@/services/ArticlesService";
import Image from "next/image";
import Author from "./Author";

interface ArticleCardProps{
    props: ArticleModal
}

export default function ArticleCard({props}:ArticleCardProps){
    return(
        <section className="w-4/5 h-72 rounded-md flex flex-row hover:bg-zinc-100 cursor-pointer gap-3">
            <Image 
                src={props.urlToImage} 
                alt={props.title}
                width={1080}
                height={120}
                className="w-80 h-auto object-fit rounded-md"
            />
            <div className="flex flex-col w-full p-2 gap-2">
                <h2 className="text-lg text-[#008B8B] font-black">{props.source.name}</h2>
                <h1 className="text-3xl font-playfair text-slate-800">{props.title}</h1>
                <p className="text-xl text-slate-600">{props.description}</p>
                <Author authorName={props.author} publishedAt={props.publishedAt} />
            </div>
        </section>
    )
}