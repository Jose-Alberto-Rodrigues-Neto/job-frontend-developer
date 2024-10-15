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
  },[searchInput, page])

  const handleArticles = React.useCallback(() =>{
    if(articles?.articles){
      return setListOfArticles(articles.articles)
    }
    return setListOfArticles(undefined)
  }, [searchInput, articles])

  React.useEffect(() => {
    fetchListOfArticles()
  }, [fetchListOfArticles])

  React.useEffect(() => {
    handleArticles();
  }, [articles])

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
      />
      <ArticleCardList props={listOfArticles} isLoading={isLoading}/>
    </div>
  );
}
