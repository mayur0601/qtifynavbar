import styles from './Card.module.css';
import SongImage from './SongImage.jsx';
import Chip from '@mui/material/Chip';
import PropTypes from 'prop-types';

const Card = ({image,followers,title}) => {
    let totalFollowers = `${followers} followers`;
  return (
    <div className={styles.card}>
        <SongImage image={image}/>
        <div >
        <Chip style={{backgroundColor:'black', color:'white'}} label={totalFollowers} variant="outlined" size="large" />
        </div>
        <div>
        <h3>{title}</h3>
        </div>
    </div>
  )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    followers:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired
  }

export default Card;