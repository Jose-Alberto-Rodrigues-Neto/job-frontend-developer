import { ArticleModal } from "@/services/ArticlesService";
import React from "react";
import ArticleCard from "./ArticleCard";

interface ArticleCardListProps{
    props: ArticleModal[] | undefined
    isLoading: boolean
    heading: string
    category: string
    page: number
}
export default function ArticleCardList({props, isLoading, heading, category, page}:ArticleCardListProps){
    if(isLoading){
        return(
            <div className="flex flex-col items-center gap-10">
                <ArticleCardSkeleton/>
                <ArticleCardSkeleton/>
                <ArticleCardSkeleton/>
                <ArticleCardSkeleton/>
                <ArticleCardSkeleton/>
                <ArticleCardSkeleton/>
            </div>
        )
    }

    if(props === undefined){
        return(
            <div className="self-center text-black">
                Não foi encontrado resultado com o tempo de pesquisa. Talvez você gostaria da nossa sugestão de notícias. Mudar essa mensagem dps, pq essa era pra ser a mensagem de erro e não de erro de pesquisa.
            </div>
        )
    }

    if(props.length === 0){
        return(
            <div className="self-center text-black">
                Não foi encontrado resultado com o tempo de pesquisa. Talvez você gostaria da nossa sugestão de notícias.
            </div>
        )
    }
    return(
        <div className="flex flex-col items-center gap-8">
            <p className="flex self-start px-32 text-start gap-2 -mb-4">
                <h1 className="font-poppins text-slate-800 text-xl">{heading}</h1>
            </p>
            {props.map((card, key) =>(
                <ArticleCard 
                    key={key}
                    props={card}
                    category={category}
                    page={page}
                />
            ))}
        </div>
    )
}

const ArticleCardSkeleton = () =>{
    return(
            <div className="w-4/5 h-72 rounded-md flex flex-row hover:bg-zinc-100 cursor-pointer gap-3">
                <div className="w-1/2 h-full object-fit rounded-md bg-slate-100 animate-pulse"/>
                <div className="flex flex-col w-full p-2 gap-4 animate-pulse">
                    <h2 className="h-2 w-2/4 bg-slate-100 animate-pulse"></h2>
                    <h1 className="h-6 w-3/4 bg-slate-100 animate-pulse"></h1>
                    <p className="h-4 w-3/4 bg-slate-100 animate-pulse"></p>
                    <p className="h-4 w-3/4 bg-slate-100 animate-pulse"></p>
                    <p className="h-4 w-3/4 bg-slate-100"></p>
                    <div className="flex flex-row gap-3 py-2">
                        <div className="rounded-full w-10 1/3 animate-pulse"></div>
                        <p className="h-3 w-1/3 animate-pulse"></p>
                        <p className="h-2 w-1/3 animate-pulse"></p>
                    </div>
                </div>
            </div>
    )
}