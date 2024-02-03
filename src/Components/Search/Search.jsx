
// import {ReactComponent as SearchLogo} from "../../assets/searchlogo.svg";

import SearchLogo from  "../../assets/searchlogo.svg";
import style from './Search.module.css';

const Search = () => {
  return (
    <form className={style.wrapper}>
        <div >
        <input className={style.inputstyle} type="text" placeholder="Search a song of your choice..."></input>
        </div>
        <div>
            <button className={style.button} type="submit">
            <img src={SearchLogo} alt="search"/>
            </button>
        </div>
    </form>
  )
}

export default Search
