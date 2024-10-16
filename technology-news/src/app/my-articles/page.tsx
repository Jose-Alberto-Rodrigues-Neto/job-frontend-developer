"use client";
import ArticleCardList from "@/components/ArticleCardList";
import NavBar from "@/components/NavBar";
import { ArticleModal} from "@/services/ArticlesService";
import { useRouter } from "next/navigation";
import React from "react";

export default function MyArticles() {
    const router = useRouter()
    const [searchInput, setSearchInput] = React.useState<string>("")
    const [localStorageItem, setLocalStorageItem] = React.useState<string | null>(null);
    const [itemsSaved, setItemsSaved] = React.useState<ArticleModal[]>();
    const [isLoading, setIsLoading] = React.useState(true);
    

    const handleLocalStorage = React.useCallback(() => {
        setIsLoading(true);
        const data = localStorage.getItem("savedItems");
        setLocalStorageItem(data);
    }, [localStorage]);

    const handleSavedItems = () => {
        console.log("LocalStorage Item:", localStorageItem)
        if (localStorageItem) {
            const dataJson = JSON.parse(localStorageItem)
            setItemsSaved(dataJson)
        }
        setIsLoading(false)
    }

    React.useEffect(() => {
        handleLocalStorage();
    }, []);

    React.useEffect(() => {
        handleSavedItems();
    }, [localStorageItem]);

    React.useEffect(() => {
        console.log("Items Saved:", itemsSaved);
    }, [itemsSaved]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter"){
            router.push(`/search/${searchInput}`)
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value); 
    }
    
    if(localStorageItem === null) return(
        <section className="flex flex-col">
            <NavBar 
                backButtonIsVisible={true} 
                searchInputValue={searchInput} 
                searchSetInputValue={setSearchInput} 
                searchHandleInputChange={handleInputChange} 
                searchHandleKeyDown={handleKeyDown}
            />
            <div className="text-3xl self-center">Nenhum item foi salvo ainda</div>
                
        </section>
        
    )
    return (
        <section className="flex flex-col gap-14 mb-10">
            <NavBar 
                backButtonIsVisible={true} 
                searchInputValue={searchInput} 
                searchSetInputValue={setSearchInput} 
                searchHandleInputChange={handleInputChange} 
                searchHandleKeyDown={handleKeyDown}
            />
            <div>
            <ArticleCardList 
                props={itemsSaved}
                isLoading={isLoading} 
                heading={"Artigos Favoritados"} 
                category={"tech"} 
                page={1} 
            />
            </div>
            
        </section>
    );
}
