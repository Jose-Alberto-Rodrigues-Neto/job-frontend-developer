"use client"

import NavBar from "@/components/NavBar";
import { articleListService, ArticlesListModal } from "@/services/ArticlesService";
import React from "react";

export default function Home() {
  const [searchInput, setSearchInput] = React.useState("")
  const [page, setPage] = React.useState(1)
  const [articles, setArticles] = React.useState<ArticlesListModal>()

  const fetchListOfArticles = React.useCallback(async () => {
    const response = await articleListService.getArticles(searchInput, page)

    if (response._tag === "Left") {
      return console.log(response.left)
    }

    setArticles(response.right)
  },[searchInput, page])

  React.useEffect(() => {
    fetchListOfArticles()
  }, [fetchListOfArticles])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  }
  

  return (
    <div className="flex flex-col gap-96">
      <NavBar 
        backButtonIsVisible={false} 
        searchInputValue={searchInput}
        searchSetInputValue={setSearchInput}
        searchHandleInputChange={handleInputChange}
      />
    </div>
  );
}
