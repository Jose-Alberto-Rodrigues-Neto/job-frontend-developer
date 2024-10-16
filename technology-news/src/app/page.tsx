"use client"

import ArticleCardList from "@/components/ArticleCardList";
import NavBar from "@/components/NavBar";
import Pagination from "@/components/Pagination";
import { articleListService, ArticleModal, ArticlesListModal } from "@/services/ArticlesService";
import React from "react";
import CategoryCardList, { categoryCards } from "@/components/CategoryCardList";

export default function Home() {
  const [input, setInput] = React.useState("")
  const [searchInput, setSearchInput] = React.useState<string>("")
  const [heading, setHeading] = React.useState("ÚLTIMAS NOTÍCIAS")
  const [page, setPage] = React.useState(1)
  const [articles, setArticles] = React.useState<ArticlesListModal>()
  const [listOfArticles, setListOfArticles] = React.useState<ArticleModal[] | undefined>()
  const [isLoading, setIsLoading] = React.useState(true)

  const fetchListOfArticles = React.useCallback(async () => {
    setIsLoading(true)
    const response = await articleListService.getArticles(page, searchInput)

    if (response._tag === "Left") {
      setIsLoading(false) //criar block-page
      return console.log(response.left)
    }
    setArticles(response.right)
    setIsLoading(false)
  },[input, page])

  const handleArticles = React.useCallback(() =>{
    if(articles?.articles){
      return setListOfArticles(articles.articles.filter((article) => article.title !== "[Removed]"))
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
        title="Explore as últimas notícias sobre tecnologia da web"
        subtitle="Selecionamos todas as notícias sobre tecnologia 
          produzidas na web para você. Aproveite, foi tudo feito com dedicação."
        backButtonIsVisible={false} 
        searchInputValue={searchInput}
        searchSetInputValue={setSearchInput}
        searchHandleInputChange={handleInputChange}
        searchHandleKeyDown={handleKeyDown}
      />
      <CategoryCardList props={categoryCards}/>
      <ArticleCardList props={listOfArticles} isLoading={isLoading} heading={heading} category={searchInput? searchInput: "tech"} page={page}/>
      <Pagination pages={100} selectedPage={page} onClick={handleOnClickPagination} nextNumber={nextPage} prevNumber={prevPage}/>
    </div>
  );
}
