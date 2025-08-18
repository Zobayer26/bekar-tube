

import useContentData from "../../hooks/useContentData";
import Category from "./Category";
import ContentCard from "./ContentCard";

const MainContent = () => {

    const { content, categoryList, fetchData, loading } = useContentData()

    return (
        <section className="px-5 flex flex-col gap-y-5 ">

            {loading.status ? (
                <div className="w-full flex flex-col items-center justify-center py-10">
                    <div className="flex gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gray-700 animate-pulse"></div>
                        <div className="h-10 w-48 bg-gray-700 rounded-md animate-pulse"></div>
                    </div>
                    <div className="grid grid-cols-4 gap-5 w-full px-5">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div
                                key={i}
                                className="w-full h-48 bg-gray-800 rounded-lg animate-pulse"
                            />
                        ))}
                    </div>
                    <p className="mt-6 text-gray-400 text-sm">{loading.message}</p>
                </div>
            ) : (
                <>
                    <div className="w-[calc(200vh-170px)] overflow-hidden flex gap-x-2.5 items-center sticky top-14.5 left-20 pt-4 ">
                        {categoryList.map((item, index) => (
                            <Category key={index} item={item} onSelect={fetchData} />
                        ))}
                    </div>

                    <div className="grid grid-cols-4 gap-5 overflow-y-auto scroll-smooth">
                        {
                            content.map((item, index) => (
                                <div className="h-auto"
                                key={index} >
                                    <ContentCard item={item} />
                                </div>

                            ))
                        }

                    </div>
                </>
            )}



        </section >
    )
}

export default MainContent;
