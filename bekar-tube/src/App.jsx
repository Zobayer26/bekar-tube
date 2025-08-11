import Header from "./components/header/Header"
import SideBar from "./components/sidebar/SideBar"
export default function App() {
  return (
    <div className=" bg-dark text-light font-Roboto">
      <Header />
      <main className="flex mt-[15px]">
        <SideBar />
        <div className="grow">
          Youtube content & category
        </div>
      </main>
    </div>
  )
}