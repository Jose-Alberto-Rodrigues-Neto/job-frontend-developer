import ArticleCard from "@/components/ArticleCard";

export default function Article(){
    const articleMock = {
        source: {
          id: null,
          name: "TweakTown"
        },
        author: "Kosta Andreadis",
        title: "NVIDIA GeForce 256 25th Anniversary - Celebrating the world's first GPU",
        description: "Back in 1999 the world's first GPU hit the scene transforming the PC gaming landscape while powering classics like Unreal Tournament and Quake III Arena. Continue reading at TweakTown >",
        url: "https://www.tweaktown.com/news/101044/nvidia-geforce-256-25th-anniversary-celebrating-the-worlds-first-gpu/index.html",
        urlToImage: "https://www.venturesquare.net/wp-content/uploads/2024/10/mou-1-2.jpg",
        publishedAt: "2024-10-14T01:32:03Z",
        content: "Back in 1999, the world of entertainment was a very different place. Instead of firing up an app on a smart TV to find a movie to watch, you had to jump into a car and head to a video store to rent a… [+1930 chars]"
      }
    return(
        <>
            <header>
                <ArticleCard props={articleMock}/>
            </header>
        </>
    )
}