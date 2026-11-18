
const Button = ({text, bosmoq}) => {
  return (
    <button onClick={bosmoq}  className="btn">{text}</button>
  )
}

export default Button