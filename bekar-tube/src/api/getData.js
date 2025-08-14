export default async function getData(serchTearm) {
  try {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${
      serchTearm ? serchTearm : "random"
    }&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const { items } = await response.json();
    return items;
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    return null;
  }
}
