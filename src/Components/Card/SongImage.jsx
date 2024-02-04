import styles from './Card.module.css';
import PropTypes from 'prop-types';

const SongImage = ({image}) => {
  return (
        <img className={styles.image} src={image} alt="artist"/> 
  )
}

SongImage.propTypes = {
    image: PropTypes.string.isRequired,
  }

export default SongImage