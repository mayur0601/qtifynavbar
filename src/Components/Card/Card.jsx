import { Tooltip } from '@mui/material';
import styles from './Card.module.css';
// import SongImage from './SongImage.jsx';
import Chip from '@mui/material/Chip';
import PropTypes from 'prop-types';

const Card = ({data,type}) => {
  let {image,follows,title,songs} = data;
  console.log("inside card",data);
  return (
    <Tooltip title={`${songs.length} songs`} placement="top" arrow>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src={image} alt={type}/>
          <div className={styles.banner}>
            <Chip label={`${follows} follows`} size='small' className={styles.chip}/>
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <p>{title}</p>
        </div>
      </div>
    </Tooltip>
  )
}

Card.propTypes = {
    data: PropTypes.object.isRequired,
    type:PropTypes.string.isRequired
  }

export default Card;