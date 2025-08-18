import { useParams } from "react-router-dom"
const VideoPlayer = () => {
    let { id } = useParams()

    return (
        <section className=" w-full">
            <iframe width="1236" height="695"
                src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                title="Bhalobasar Mess | Arnob | Prateek Kuhad | Backstage Cover # 171"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen>

            </iframe>

            <div>
                <h1>
                    EPISODE 11 | Bachelor Point | S5 | Kabila | Habu | Pasha | Shimul | Kajal Arefin Ome | Boom Films
                </h1>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <p>channel icon</p>
                        <div>channel details</div>
                        <p>subcribe button</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <p>like</p>
                        <p>share</p>
                        <p>download</p>
                        <p>clip</p>
                        <p>save</p>
                        <p>...</p>
                    </div>
                </div>
                <div>
                    description
                </div>
                <div>
                    comment
                </div>
            </div>
        </section>
    )
}

export default VideoPlayer