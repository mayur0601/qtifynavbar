import { useState } from 'react';
import styles from './Section.module.css';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';

import { CircularProgress } from '@mui/material';

const Section = ({data,title,type}) => {

    console.log("inside section",data);

    const [carouselToggle,setCarouselToggle] = useState(true);
    
    const handleToggle = () => {
        setCarouselToggle(!carouselToggle);
    }
    
    // eslint-disable-next-line react/prop-types
    // let songArray = data.map((ele)=>{
    //     return <Card key={ele.id} data={ele} type={type}/>;
    // })

  return (
    <div>
        <div className={styles.header}>
            <h3>{title}</h3>
            <h4 className={styles.toggleText} onClick={handleToggle} style={{color:'#34c94b'}}>
                {!carouselToggle ? "Show all" : "Collapse"}
            </h4>
        </div>
        {
            // eslint-disable-next-line react/prop-types
            data.length === 0 ? (
                <CircularProgress/>
            ) : (
                <div className={styles.cardsWrapper}>
                    {carouselToggle ? (<div className={styles.wrapper}>
                        {data.map((card) => (
                <Card data={card} type={type} key={card.id} />
                ))}
                    </div>) : (<Carousel data={data} renderComponent={(data)=> <Card data={data} type={type}/> } />)}
                </div>
            )
        }
    </div>
  )
}

Section.prototype = {
    data: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}
export default Section