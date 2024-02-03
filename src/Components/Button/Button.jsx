
import styles from "./Button.module.css";

 // eslint-disable-next-line react/prop-types
 const Button = ({text}) => {
  return (
    <div>
        <button className={styles.button}>{text}</button>
    </div>
  )
}

export default Button;