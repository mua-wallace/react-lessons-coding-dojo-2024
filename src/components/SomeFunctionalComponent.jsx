import styles from '../css/mycss.module.css'
const SomeFunctionalComponent = (props) => {

    return (
        <div >


        This is our first functional component
        <h1 className={styles.h1}>{props.header}</h1>
        {props.children}
        <button className={styles.btn}>React Button</button>
        </div>
    )
}

export default SomeFunctionalComponent;