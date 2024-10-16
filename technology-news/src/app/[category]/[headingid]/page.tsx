"use client"

import Author from "@/components/Author"
import NavBar from "@/components/NavBar"
import newsApiProvider from "@/provider/newsApiProvider"
import { articleListService, ArticleModal, ArticlesListModal } from "@/services/ArticlesService"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"

interface HeadingIdProps{
    params: { 
        category: string
        headingid: string 
    }
}
export default function HeadingId({params:{ category, headingid }}: HeadingIdProps){ 
    const router = useRouter()
    const [searchInput, setSearchInput] = React.useState<string>("")
    const [isLoading, setIsLoading] = React.useState(true)
    const [articleData, setArticleData] = React.useState<ArticlesListModal>()
    const [article, setArticle] =React.useState<ArticleModal[]>()
    
    const headingId = decodeURIComponent(headingid.slice(0, -1))
    const pageNumber = Number(headingid.slice(-1))

    const fetchListOfArticles = React.useCallback( async () =>{
        setIsLoading(true)
        const response = await articleListService.getArticle(pageNumber, category)
        
        if(response._tag === "Left"){
            return console.error(response.left)
        }
        setArticleData(response.right)
        setIsLoading(false)
    },[headingid])

    React.useEffect(() => {
        fetchListOfArticles()
    }, [headingid])

    React.useEffect(()=>{
        if (articleData?.articles) {
            const filtered = articleData.articles.filter(data => data.title === headingId)
            setArticle(filtered)
        }
    }, [articleData, headingid])

    const handleOnSave = () =>{
        if(article) {
            const arr = localStorage.getItem("savedItems")
            if(arr){
                const newArr = JSON.parse(arr)
                newArr.push(article[0])  
                return localStorage.setItem("savedItems", JSON.stringify(newArr))  
            }
            return localStorage.setItem("savedItems", JSON.stringify(article))
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter"){
            router.push(`/search/${searchInput}`)
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value); 
    }
    
    if(isLoading){
        return(
        <div className="flex flex-col gap-10">
            <NavBar 
                bgColor={category}
                backButtonIsVisible={true} 
                searchInputValue={searchInput}
                searchSetInputValue={setSearchInput}
                searchHandleInputChange={handleInputChange}
                searchHandleKeyDown={handleKeyDown}
                onSave={handleOnSave}
            />
            <div className="flex flex-col items-center gap-6 mb-20">
                <h2 className="self-center w-36 h-7 bg-slate-100 animate-pulse rounded-sm"></h2>
                <h1 className="w-1/2 h-14 self-center bg-slate-100 rounded-sm animate-pulse"></h1>
                <div className="flex flex-row gap-4 w-1/4 h-12">
                    <div className="w-1/6 h-full self-center bg-slate-100 animate-pulse rounded-full"></div>
                    <div className="w-full h-full self-center bg-slate-100 animate-pulse rounded-sm"></div>
                </div>
                <div className="w-1/2 h-96 object-fit rounded-md bg-slate-100 animate-pulse"></div>
                <p className=" w-1/2 h-4 bg-slate-100 animate-pulse mb-10"></p>
                <p className="w-4/5 h-5 bg-slate-100 animate-pulse"></p>
                <p className="w-3/5 h-5 pl-20 bg-slate-100 animate-pulse"></p>
                <p className="w-4/5 h-5 bg-slate-100 animate-pulse"></p>
                <p className="w-3/5 h-5 pl-20 bg-slate-100 animate-pulse"></p>
                <p className="w-4/5 h-5 bg-slate-100 animate-pulse"></p>
            </div>
        </div>
        )
    }

    return (
        <div className="flex flex-col gap-10">
            <NavBar 
                bgColor={category}
                backButtonIsVisible={true} 
                searchInputValue={searchInput}
                searchSetInputValue={setSearchInput}
                searchHandleInputChange={handleInputChange}
                searchHandleKeyDown={handleKeyDown}
                onSave={handleOnSave}
            />
            
                {
                    article?.map((data, index) => (
                        <div className="flex flex-col items-center gap-6 mb-20" key={index}>
                            <h2 className="text-xl text-[#008B8B] font-black">{data.source.name}</h2>
                            <h1 className="w-[920px] text-slate-800 text-4xl text-center">{data.title}</h1>
                            <Author authorName={data.author} publishedAt={data.publishedAt}/>
                            <Image 
                                src={data.urlToImage? data.urlToImage : "/default-article-image.svg"} 
                                alt={data.urlToImage}
                                width={922}
                                height={512}
                                className="w-1/2 h-96 object-fit rounded-md"
                            />
                            <p className="text-sm text-slate-800 w-1/2">Legenda: {data.description}</p>
                            <p className="w-4/5 text-slate-800 text-2xl">{data.content}</p>
                        </div>
                            
                    ))
                }            

        </div>
    );
}
