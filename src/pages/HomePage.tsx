import { useTranslation } from 'react-i18next';
import styles from './HomePage.module.css';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className={`container ${styles.heroSection}`}>
      
      {/* 1. Hero Banner */}
      <div className={styles.heroBanner}>
        {/* <img 
          src="https://res.cloudinary.com/your-name/image/upload/v12345/hero-banner.jpg" 
          alt="DilliEm drawing Crystal out of a sketchbook" 
          className={styles.bannerImage} // เราจะเพิ่ม class นี้ใน CSS
        /> */}
        <p>ภาพ DilliEm กำลังวาด Crystal ออกมาจากกระดาษ<br/>(แนะนำ 1920x600px)</p>
        <div className={styles.watermark}>DilliEm</div>
      </div>

      
      <h1 className={styles.headline}>{t('home_headline')}</h1>
      <p className={styles.subheadline}>{t('home_subheadline')}</p>

      <div className={styles.buttonContainer}>
        <NavLink to="/gallery" className={`${styles.button} ${styles.buttonPrimary}`}>
          {t('home_button_gallery')}
        </NavLink>
        <NavLink to="/oc" className={`${styles.button} ${styles.buttonOutline}`}>
          {t('home_button_ocs')}
        </NavLink>
      </div>

      <div 
        className={styles.crystalComment}
        dangerouslySetInnerHTML={{ __html: t('home_crystal_comment') }} 
      />
    </div>
  );
};

export default HomePage;