import Button from './Button'
const Header = ({title = "Default Heading"}) => {
const onClick = ()=> {
    console.log("Button Click")
}
  return (
    <header className="header">
        <h1> {title}</h1>
        <Button text={"Add"} color="Green" onClick={onClick}/ >
    </header>
  )
}

export default Header
