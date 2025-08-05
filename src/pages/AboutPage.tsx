import styles from './AboutPage.module.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 1. Import useTranslation

const AboutPage = () => {
  const { t } = useTranslation(); // 2. เรียกใช้ hook

  return (
    <div className={`container ${styles.pageContainer}`}>
      
      {/* 3. เปลี่ยนข้อความทั้งหมดให้ใช้ t('key') */}
      <h1 className={styles.headline}>{t('about_headline')}</h1>
      <p className={styles.intro}>{t('about_intro')}</p>

      <div className={styles.imagePlaceholder}>
        {/* <img src="https://res.cloudinary.com/du3ysvigt/image/upload/v1754381809/about-chibi_snv9ox.jpg" alt="DilliEm Chibi with Crystal" className={styles.image} /> */}
        
        <p>ภาพ DilliEm chibi กับ Crystal ในสตูดิโอ<br/>(แนะนำ 1200x600px)</p>
      </div>

      <div className={styles.storyGrid}>
        <div className={styles.storySection}>
          <h2 className={styles.storyTitle} style={{ color: '#3b82f6' }}>{t('about_story_dilliem_title')}</h2>
          <p className={styles.storyText}>{t('about_story_dilliem_text')}</p>
        </div>
        <div className={styles.storySection}>
          <h2 className={styles.storyTitle} style={{ color: '#a855f7' }}>{t('about_story_crystal_title')}</h2>
          <p className={styles.storyText}>{t('about_story_crystal_text')}</p>
        </div>
      </div>

      <div className={styles.missionSection}>
        <h2 className={styles.missionTitle}>{t('about_mission_title')}</h2>
        <p className={styles.missionText}>{t('about_mission_text')}</p>
      </div>

      <div className={styles.ctaContainer}>
        <NavLink to="/gallery" className={styles.ctaButton}>
          {t('about_cta_button')}
        </NavLink>
      </div>

    </div>
  );
};

export default AboutPage;