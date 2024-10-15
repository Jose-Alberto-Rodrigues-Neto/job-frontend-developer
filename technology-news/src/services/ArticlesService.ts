import newsApiProvider from "@/provider/newsApiProvider"
import { AxiosRequestConfig } from "axios"
import { Either } from "fp-ts/lib/Either"

export interface ArticleModal{
    source: {
        id: string | null
        name: string
    }
    author: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string
}

export interface ArticlesListModal{
    status: string
    totalResults: number
    articles: ArticleModal[]
}

class ArticleService{
    async getArticles(page: number, query: string, options?: AxiosRequestConfig): Promise<Either<Error, ArticlesListModal>> {
        const path = 'everything';
        const params = {
            q: `technology${query !=="" ? `+${query}` : ''}`,
            apiKey: "8464637d202349059b258b1022751041", 
            sortBy: "publishedAt",
            pageSize: 20,
            page: page,
            ...options?.params,
        };

        const config: AxiosRequestConfig = {
            params,
            ...options,
        };

        return newsApiProvider.get<ArticlesListModal>(path, config);
    }

    async getCategoryArticles(category: string, page:number, query: string, options?: AxiosRequestConfig): Promise<Either<Error, ArticlesListModal>> {
        const path = "everything";
        const params = {
            q: `${category}${query !=="" ? `+${query}`: ''}`,
            apiKey: "8464637d202349059b258b1022751041", 
            sortBy: "publishedAt",
            pageSize: 20,
            page: page,
            ...options?.params,
        };

        const config: AxiosRequestConfig = {
            params,
            ...options,
        };

        return newsApiProvider.get<ArticlesListModal>(path, config);
    }
}

export const articleListService = new ArticleService()