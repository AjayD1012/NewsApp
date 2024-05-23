import NewsBoard from "./components/newsBoard"
import  Navbar  from "./components/navbar"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react"


export const App = () => {
  const[category, setCategory]= useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}
