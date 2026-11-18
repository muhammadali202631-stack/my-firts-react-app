import Button from "./Button"

const Sidebar = ({onClick}) => {
  return (
    <div>
        <h2>hello sidebar</h2>
        <Button bosmoq={onClick} text={"Close Sidebar"}/>
    </div>
  )
}

export default Sidebar