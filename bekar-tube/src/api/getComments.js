



export default async function getComments(videoId) {
    const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${import.meta.env.VITE_YOUTUBE_API_KEY
        }`;
    try {
        const res = await fetch(url, {});
        if (!res.ok) {
            throw new Error(`response error :${res.status}`);
        }
        const { items } = await res.json()
        return items.map((item) => {
            const topComment = item.snippet.topLevelComment.snippet;
            return {
                id: item.id,
                author:topComment.authorDisplayName,
                authorImage:topComment.authorProfileImageUrl,
                text: topComment.textDisplay,
                likeCount: topComment.likeCount,
                publishedAt:topComment.publishedAt,
            };
        });
    } catch (error) {
        console.log(error);
        return []
    }
}
