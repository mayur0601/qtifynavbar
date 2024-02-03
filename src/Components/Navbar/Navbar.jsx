import styles from './Navbar.module.css';
import Logo from "../Logo/Logo";
import Button from '../Button/Button';
import Search from "../Search/Search";

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <Logo/>
        <Search/>
        <Button text="Feedback" />
    </nav>
  )
}

export default Navbar