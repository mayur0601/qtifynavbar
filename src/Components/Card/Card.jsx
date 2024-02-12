import { Tooltip } from '@mui/material';
import styles from './Card.module.css';
// import SongImage from './SongImage.jsx';
import Chip from '@mui/material/Chip';
import PropTypes from 'prop-types';

const Card = ({image,followers,title}) => {
  return (
    // <div className={styles.card}>
    //     <SongImage image={image}/>
    //     <div >
    //     <Chip style={{backgroundColor:'black', color:'white'}} label={totalFollowers} variant="outlined" size="large" />
    //     </div>
    //     <div>
    //     <h3>{title}</h3>
    //     </div>
    // </div>

    <Tooltip>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src={image} alt=""/>
          <div className={styles.banner}>
            <Chip label={`${followers} follows`} size='small' className={styles.chip}/>
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
    image: PropTypes.string.isRequired,
    followers:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired
  }

export default Card;