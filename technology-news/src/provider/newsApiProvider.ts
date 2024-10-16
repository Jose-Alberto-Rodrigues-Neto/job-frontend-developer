import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import { Either, left, right  } from "fp-ts/lib/Either";

class NewsAPI {

    private instance: AxiosInstance

    constructor(){
        this.instance = axios.create(
            {
                baseURL: "https://newsapi.org/v2/",
            }
        );
    }

    async get<T>(path: string, options?: AxiosRequestConfig): Promise<Either<Error, T>> {
        try {
            const res = await this.instance.get<T>(path, options);
            return right(res.data);
        } catch (error: unknown) {
            if(error instanceof Error){
                return left(new Error(error.message || "Erro desconhecido"));
            }
            return left(new Error("Erro desconhecido"));
        }
    }
}

const newsApiProvider = new NewsAPI()

export default newsApiProvider