


export default async function getSubscriberList() {
    try {
        const url = `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`

       const res =await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
        if(!res.ok){
            throw new Error(`something went wrong ! status:${res.status}`)
        }
        const {items} = await res.json();
         return items

    } catch (error) {
        console.log(error)
        return []
    }
}