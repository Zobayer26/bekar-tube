export default async function getCatagory() {
  try {
    const url =`https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=bd&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`

    const res = await fetch(url,{
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const {items} = await res.json();
    
    return items;
  } catch (error) {
    console.log(error);
    return null
  }
}

