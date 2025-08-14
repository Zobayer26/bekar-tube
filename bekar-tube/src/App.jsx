import Header from "./components/header/Header"
import MainContent from "./components/maincontent/MainCotent"
import SideBar from "./components/sidebar/SideBar"

import { useState } from "react"
export default function App() {

  const [serchTearm, setSearchTerm] = useState("")
  return (
    <div className=" bg-dark text-light font-Roboto">
      <Header setSearchTerm={setSearchTerm} />
      <main className="flex mt-[15px]">
        <SideBar />
        <MainContent serchTearm={serchTearm} />
      </main>
    </div>
  )
}