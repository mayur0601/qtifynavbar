import { Tooltip } from '@mui/material';
import styles from './Card.module.css';
// import SongImage from './SongImage.jsx';
import Chip from '@mui/material/Chip';
import PropTypes from 'prop-types';

const Card = ({data,type}) => {

  const getCard = (type) => {
    switch(type){
      case "album" : {
        let {image,follows,title,songs} = data;
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

      case "song": {
        let {image,likes,title} = data;
        return (
        
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt={type}/>
                <div className={styles.banner}>
                  <Chip label={`${likes} Likes`} size='small' className={styles.chip}/>
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
        )
      }


    }
  }

  return getCard(type);

  
}

Card.propTypes = {
    data: PropTypes.object.isRequired,
    type:PropTypes.string.isRequired
  }

export default Card;