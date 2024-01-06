const PersonCard = (props) => {
    console.log(props);
    return (
        <>
        <h1  style={{color:props.color}}>Instructor Bob</h1>
        <p>Age: 32</p>
        <p>Hair Color: purple</p>
        </>
    )
}
export default PersonCard;