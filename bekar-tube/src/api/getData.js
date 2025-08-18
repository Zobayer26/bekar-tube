export default async function getData(searchTerm) {
  try {
    const query = encodeURIComponent(searchTerm || "random")
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${query}
      &key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Http error : ${response.status}`);
    }

    const { items } = await response.json();
    return items;
  } catch (error) {
    console.log(error);
    return null;
  }
}

