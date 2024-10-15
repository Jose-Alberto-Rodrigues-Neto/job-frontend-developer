"use client"

import NavBar from "@/components/NavBar";
import { articleListService, ArticlesListModal } from "@/services/ArticlesService";
import React from "react";

export default function Home() {
  const [searchInput, setSearchInput] = React.useState("")
  const [search, setSearch] = React.useState("a")
  const [page, setPage] = React.useState(1)
  const [articles, setArticles] = React.useState<ArticlesListModal>()

  const fetchListOfArticles = async () => {
    const response = await articleListService.getArticles(search, page)

    if (response._tag === "Left") {
      return console.log(response.left)
    }

    setArticles(response.right)
  }

  React.useEffect(() => {
    fetchListOfArticles()
  }, [search, page])

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
