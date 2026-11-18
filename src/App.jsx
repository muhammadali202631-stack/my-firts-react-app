import { useState } from "react"
import Button from "./components/Button"
import Modal from "./components/Modal"
import Sidebar from "./components/Sidebar"

const App = () => {

  const [openSidebar, setopenSidebar] = useState(false)
  const [openModal, setopenModal] = useState(false)

  const toggleSidebarFunction = () =>{
    setopenSidebar(!openSidebar)
  } 

  const toggleModalFunction = () => {
    setopenModal(!openModal)
  }


  return (
    <div>
      {
        openModal ?  <Modal onClick={toggleModalFunction}/> : null
      }
      {
        openSidebar ? <Sidebar onClick={toggleSidebarFunction}/> : null
      }
      <Button bosmoq={toggleModalFunction} text={"Open Modal"}/>
      <Button bosmoq={toggleSidebarFunction} text={"Open Sidebar"}/>
    </div>
  )
}

export default App