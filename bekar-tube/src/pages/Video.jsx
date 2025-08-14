import Recommended from "../components/video/Recommended"
import VideoPlayer from "../components/video/VideoPlayer"

const Video = () => {
    return (
        <section className=" flex gap-3.5 items-start w-[1500px] mx-auto">
            <VideoPlayer />
            <Recommended />
        </section>
    )
}
export default Video