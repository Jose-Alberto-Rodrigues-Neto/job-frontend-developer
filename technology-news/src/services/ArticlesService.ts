import newsApiProvider from "@/provider/newsApiProvider"
import { AxiosRequestConfig } from "axios"
import { Either } from "fp-ts/lib/Either"

export interface ArticleModal {
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

const apiKey = process.env.NEXT_PUBLIC_API_KEY

class ArticleService{
    async getArticles(page: number, query: string, options?: AxiosRequestConfig): Promise<Either<Error, ArticlesListModal>> {
        const path = 'everything';
        const params = {
            q: `technology${query !=="" ? `+${query}` : ''}`,
            apiKey: apiKey, 
            sortBy: "publishedAt",
            pageSize: 20,
            searchIn: "title",
            page: page,
            ...options?.params,
        };

        const config: AxiosRequestConfig = {
            params,
            ...options,
        };

        return newsApiProvider.get<ArticlesListModal>(path, config);
    }

    async getArticle(page: number, query: string, options?: AxiosRequestConfig): Promise<Either<Error, ArticlesListModal>> {
        const path = 'everything';
        let params = { }
        if(query === "tech"){
            params = {
                q: `technology`,
                apiKey: apiKey, 
                sortBy: "publishedAt",
                pageSize: 20,
                page: page,
                searchIn: "title",
                ...options?.params,
            };
            const config: AxiosRequestConfig = {
                params,
                ...options,
            };

            return newsApiProvider.get<ArticlesListModal>(path, config);
        }
        params = {
            q: `${query !=="" ? `+${query}` : ''}`,
            apiKey: apiKey, 
            sortBy: "publishedAt",
            pageSize: 20,
            page: page,
            searchIn: "title",
            ...options?.params,
        };

        const config: AxiosRequestConfig = {
            params,
            ...options,
        };

        return newsApiProvider.get<ArticlesListModal>(path, config);
    }

    async getCategoryArticles(category: string, page:number, query?: string, options?: AxiosRequestConfig): Promise<Either<Error, ArticlesListModal>> {
        const path = "everything";
        const params = {
            q: `${category}${query !=="" ? `+${query}`: ''}`,
            apiKey: apiKey, 
            sortBy: "publishedAt",
            pageSize: 20,
            page: page,
            searchIn: "title",
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