import styles from './Section.module.css';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import Box from '@mui/material/Box';

import { CircularProgress } from '@mui/material';
import BasicTabs from '../Tabs/Tabs';

const Section = ({data,title,type,filteredDataValues=[],toggle=false,handleToggle=null,value=0,handleChange=null}) => {
    

  return (
    <div>
        <div className={styles.header}>
            <h3>{title}</h3>
            <h4 className={styles.toggleText} onClick={handleToggle} style={{color:'#34c94b'}}>
                {!toggle ? "show all" : "Collapse"}
            </h4>
        </div>
        {type=='song' ? <BasicTabs value={value} handleChange={handleChange} /> : null}
        {
            // eslint-disable-next-line react/prop-types
            filteredDataValues.length === 0 ? (
                <Box sx={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                <CircularProgress/>
                </Box>
            ) : (
                <div className={styles.cardsWrapper}>
                    {toggle ? (<div className={styles.wrapper}>
                        {filteredDataValues.map((card) => (
                <Card data={card} type={type} key={card.id} />
                ))}
                    </div>) : (<Carousel data={filteredDataValues} renderComponent={(data)=> <Card data={data} type={type}/> } />)}
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