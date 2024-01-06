const Header = (props) =>{
    console.log(props);
return (
    <>
    <h2>My name is  {props.firstName} {props.lastName}</h2>
    </>
)
}
export default Header;