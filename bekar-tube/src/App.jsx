import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header.jsx"
import MainContent from "./components/maincontent/MainCotent"
import SideBar from "./components/sidebar/SideBar.jsx"
import Video from "./pages/Video.jsx"
export default function App() {
  const [showSideBar, setShowSideBar] = useState(false)
 
  return (
    <section className=" bg-dark text-light font-Roboto">
      <Header setShow={setShowSideBar} showSideBar={showSideBar} />
      <Routes>
        <Route path="/" element={
          <main className="flex items-start ">
            <SideBar showSideBar={showSideBar} />
            <MainContent />
          </main>
        } />
        <Route path="/video/:id" element={<Video />} />
      </Routes>

    </section>
  )
}