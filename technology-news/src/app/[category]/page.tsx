"use client"
import ArticleCardList from "@/components/ArticleCardList"
import NavBar from "@/components/NavBar"
import Pagination from "@/components/Pagination"
import { articleListService, ArticleModal, ArticlesListModal } from "@/services/ArticlesService"
import React from "react"

interface CategoryProps {
    params: {category: string}
}

export default function Category({params:{category}}: CategoryProps){
    const [input, setInput] = React.useState("")
    const [searchInput, setSearchInput] = React.useState("")
    const [heading, setHeading] = React.useState(`ÚLTIMAS NOTÍCIAS DE ${category.toUpperCase()}`)
    const [page, setPage] = React.useState(1)
    const [articles, setArticles] = React.useState<ArticlesListModal>()
    const [listOfArticles, setListOfArticles] = React.useState<ArticleModal[] | undefined>()
    const [isLoading, setIsLoading] = React.useState(true)
  
    const fetchListOfArticles = React.useCallback(async () => {
      setIsLoading(true)
      const response = await articleListService.getCategoryArticles(category, page, searchInput)
  
      if (response._tag === "Left") {
        setIsLoading(false)
        return console.log(response.left)
      }
  
      setArticles(response.right)
      setIsLoading(false)
    },[input, page])
  
    const handleArticles = React.useCallback(() =>{
      if(articles?.articles){
        return setListOfArticles(articles.articles)
      }
      return setListOfArticles(undefined)
    }, [articles])
  
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if(event.key === "Enter"){
        setHeading("O RESULTADO DA SUA BUSCA")
        setInput(searchInput)
        fetchListOfArticles()
      }
    }
  
    const handleOnClickPagination = (number: number) => {
      setPage(number)
    }
  
    const nextPage = () => {
      if(page < 5){
        setPage((number) => number+1)
      }
    }
  
    const prevPage = () =>{
      if(page > 1){
        setPage((number) => number-1)
      }
    }

    React.useEffect(() => {
      fetchListOfArticles()
    }, [fetchListOfArticles])
  
    React.useEffect(() => {
      handleArticles()
    }, [handleArticles])
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(event.target.value); 
    }
    
  
    return (
      <div className="flex flex-col gap-20">
        <NavBar 
            bgColor={category}
            title={`Explore as últimas notícias sobre ${category.toUpperCase()} da web`}
            subtitle={`Selecionamos todas as notícias sobre ${category.toUpperCase()} produzidas na web para você. Aproveite, foi tudo feito com dedicação.`}
            backButtonIsVisible={false} 
            searchInputValue={searchInput}
            searchSetInputValue={setSearchInput}
            searchHandleInputChange={handleInputChange}
            searchHandleKeyDown={handleKeyDown}
        />
        <ArticleCardList props={listOfArticles} isLoading={isLoading} heading={heading}/>
        <Pagination pages={100} selectedPage={page} onClick={handleOnClickPagination} nextNumber={nextPage} prevNumber={prevPage}/>
      </div>
    )
}