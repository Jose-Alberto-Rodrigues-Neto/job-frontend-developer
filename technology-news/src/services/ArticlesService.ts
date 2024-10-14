import newsApiProvider from "@/provider/newsApiProvider"
import { AxiosRequestConfig } from "axios"
import { Either } from "fp-ts/lib/Either"

export interface ArticleModal{
    source: {
        id: string
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
    async getArticles(query: string | null, page: number, options?: AxiosRequestConfig): Promise<Either<Error, ArticlesListModal>> {
        const path = 'everything';
        const params = {
            q: query ?? "thec",
            apiKey: "29eae89ffe6d4d589c9c8f24f7ebab73",
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