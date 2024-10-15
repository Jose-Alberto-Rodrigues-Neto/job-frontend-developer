"use client"

import ArticleCardList from "@/components/ArticleCardList";
import NavBar from "@/components/NavBar";
import Pagination from "@/components/Pagination";
import { articleListService, ArticleModal, ArticlesListModal } from "@/services/ArticlesService";
import React from "react";

export default function Home() {
  const [input, setInput] = React.useState("")
  const [searchInput, setSearchInput] = React.useState("tech")
  const [heading, setHeading] = React.useState("ÚLTIMAS NOTÍCIAS")
  const [page, setPage] = React.useState(1)
  const [articles, setArticles] = React.useState<ArticlesListModal>()
  const [listOfArticles, setListOfArticles] = React.useState<ArticleModal[] | undefined>()
  const [isLoading, setIsLoading] = React.useState(true)

  const fetchListOfArticles = React.useCallback(async () => {
    const response = await articleListService.getArticles(searchInput.toString(), page)

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
      setIsLoading(true)
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
        backButtonIsVisible={false} 
        searchInputValue={searchInput}
        searchSetInputValue={setSearchInput}
        searchHandleInputChange={handleInputChange}
        searchHandleKeyDown={handleKeyDown}
      />
      <ArticleCardList props={listOfArticles} isLoading={isLoading} heading={heading}/>
      <Pagination pages={100} selectedPage={page} onClick={handleOnClickPagination} nextNumber={nextPage} prevNumber={prevPage}/>
    </div>
  );
}
