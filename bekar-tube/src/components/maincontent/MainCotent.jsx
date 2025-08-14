import { CategoryList } from "../../data/CategoryData";
import useContentData from "../../hooks/useContentData";
import Category from "./Category";
import ContentCard from "./ContentCard";


const MainContent = ({ serchTearm }) => {

    const { content, error, loading } = useContentData(serchTearm)
    console.log(content, error, loading)
    return (
        <div className="px-6 overflow-y-auto">
            <div className="flex gap-2.5 items-center">
                {CategoryList.map((item) => (
                    <Category key={item.id} item={item} />
                ))}
            </div>
            <div className="mt-8 grid grid-cols-3 gap-5">
                {
                    content.map((item) => (
                        <ContentCard key={item.id} item={item} />
                    ))
                }

            </div>
        </div >
    )
}

export default MainContent;


