import { CategoryList } from "../../data/CategoryData";
import { Content } from "../../data/ContentData";
import Category from "./Category";
import ContentCard from "./ContentCard";

const MainContent = () => {
    return (
        <div className="px-6 overflow-y-auto">
            <div className="flex gap-2.5 items-center">
                {CategoryList.map((item) => (
                    <Category key={item.id} item={item} />
                ))}
            </div>
            <div className="mt-8 grid grid-cols-3 gap-5">
                {
                    Content.map((item) => (
                        <ContentCard key={item.id} />
                    ))
                }

            </div>
        </div>
    )
}

export default MainContent;