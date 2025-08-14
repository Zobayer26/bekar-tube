import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import MainContent from "./components/maincontent/MainCotent"
import SideBar from "./components/sidebar/SideBar"
import Video from "./pages/Video"
export default function App() {

  const [serchTearm, setSearchTerm] = useState("")
  return (
    <div className=" bg-dark text-light font-Roboto">
      <Header setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={
          <main className="flex mt-[15px]">
            <SideBar />
            <MainContent serchTearm={serchTearm} />
          </main>
        } />
        <Route path="/video/:id" element={<Video />} />
      </Routes>

    </div>
  )
}