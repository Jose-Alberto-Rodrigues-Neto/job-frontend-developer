import Link from "next/link"

interface CategoryCardListProps{
    props: CategoryCardProps[]
}

export default function CategoryCardList({props}:CategoryCardListProps){
    return(
        <ul className="flex flex-row justify-around w-full -my-14">
            {
                props.map((card, index) => (
                    <CategoryCard key={index} title={card.title} color={card.color}/>
                ))
            }
        </ul>
    )
}

interface CategoryCardProps{
    title: string
    color: string
}

export const CategoryCard = ({title, color}: CategoryCardProps) => {
    return(
        <Link className={`w-1/6 h-32 bg-[${color}] rounded-md relative `} href={`/${title.toLowerCase()}`}>
            <h1 className="text-2xl absolute bottom-8 left-4">{title}</h1>
        </Link>
    )
}

export  const categoryCards = [
    {
      title: "IA",
      color: "#6366F1"
    },
    {
      title: "Cybersecurity",
      color: "#14B8A6"
    },
    {
      title: "Blockchain",
      color: "#F59E0B"
    },
    {
      title: "Cloud",
      color: "#38BDF8"
    },
    {
      title: "StartUp",
      color: "#A855F7"
    }
  ]
