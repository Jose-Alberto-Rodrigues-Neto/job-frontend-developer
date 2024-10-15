"use client"

import ArticleCardList from "@/components/ArticleCardList";
import NavBar from "@/components/NavBar";
import { articleListService, ArticleModal, ArticlesListModal } from "@/services/ArticlesService";
import React from "react";

export default function Home() {
  const [searchInput, setSearchInput] = React.useState("tech")
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
  },[page])

  const handleArticles = React.useCallback(() =>{
    if(articles?.articles){
      return setListOfArticles(articles.articles)
    }
    return setListOfArticles(undefined)
  }, [articles])

  React.useEffect(() => {
    fetchListOfArticles()
  }, [fetchListOfArticles])

  React.useEffect(() => {
    handleArticles();
  }, [handleArticles])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value); 
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter"){
      fetchListOfArticles()
    }
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
      <ArticleCardList props={listOfArticles} isLoading={isLoading}/>
    </div>
  );
}
