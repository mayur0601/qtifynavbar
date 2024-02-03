import styles from './HeroSection.module.css';
import VibrationHeadPhone from './VibrationHeadPhone';

const HeroSection = () => {
  return (
    <div className={styles.HeroSection}>
        <h1 className={styles.description}>
        100 Thousand Songs, ad-free <br/>
        Over thousands podcast episodes
        </h1>
        <VibrationHeadPhone/>
    </div>
  )
}

export default HeroSection