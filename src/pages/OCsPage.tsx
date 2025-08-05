import { useState } from 'react';
import styles from './OCsPage.module.css';
import { useTranslation } from 'react-i18next';

const OCsPage = () => {
  const { t } = useTranslation();
  const [selectedOC, setSelectedOC] = useState('dilliem');

  const playAudio = (audioPath: string) => {
    try {
      const audio = new Audio(audioPath);
      audio.play();
    } catch (error) {
      console.error("Audio file not found or failed to play:", error);
    }
  };

  return (
    <div className={`container ${styles.pageContainer}`}>
      <h1 className={styles.title}>{t('ocs_title')}</h1>

      <div className={styles.selector}>
        <button
          onClick={() => setSelectedOC('dilliem')}
          className={`${styles.selectorButton} ${styles.dilliemButton} ${selectedOC === 'dilliem' ? styles.dilliemActive : ''}`}
        >
          {t('ocs_dilliem_button')}
        </button>
        <button
          onClick={() => setSelectedOC('crystal')}
          className={`${styles.selectorButton} ${styles.crystalButton} ${selectedOC === 'crystal' ? styles.crystalActive : ''}`}
        >
          {t('ocs_crystal_button')}
        </button>
      </div>

      {selectedOC === 'dilliem' && (
        <div className={styles.ocGrid}>
          <div className={`${styles.imagePlaceholder} ${styles.dilliemImageBg}`}>
            <img src="https://res.cloudinary.com/du3ysvigt/image/upload/v1754381802/dilliem-full_w1qbla.jpg" alt="DilliEm Full Body" className={styles.ocImage} />
            <p>ภาพเต็มตัว DilliEm<br/>(แนะนำ 800x1200px)</p>
          </div>
          <div className={styles.ocDetails}>
            <h2 className={styles.ocName} style={{ color: '#3b82f6' }}>{t('ocs_dilliem_name')}</h2>
            <div className={styles.quoteContainer}>
              <p className={styles.ocQuote}>{t('ocs_dilliem_quote')}</p>
              <button onClick={() => playAudio('/audio/dilliem_quote.mp3')} className={styles.audioButton}>🔊</button>
            </div>
            <ul className={styles.charSheet}>
              <li><strong>{t('common_gender')}:</strong> {t('ocs_dilliem_gender')}</li>
              <li><strong>{t('common_age')}:</strong> {t('ocs_dilliem_age')}</li>
              <li><strong>{t('common_personality')}:</strong> {t('ocs_dilliem_personality')}</li>
              <li data-hover-icon="🍵"><strong>{t('common_likes')}:</strong> {t('ocs_dilliem_likes')}</li>
              <li data-hover-icon="😫"><strong>{t('common_dislikes')}:</strong> {t('ocs_dilliem_dislikes')}</li>
              <li><strong>{t('common_ability')}:</strong> {t('ocs_dilliem_ability')}</li>
              <li><strong>{t('common_relationship')}:</strong> {t('ocs_dilliem_relationship')}</li>
            </ul>
            <div className={styles.funFactsSection}>
              <h3 className={styles.funFactsTitle}>{t('ocs_dilliem_funfacts_title')}</h3>
              <ul className={styles.funFactsList}>
                <li><details className={styles.trivia}><summary>{t('ocs_dilliem_funfact_1').split('...')[0]}...</summary><p>...{t('ocs_dilliem_funfact_1').split('...')[1]}</p></details></li>
                <li><details className={styles.trivia}><summary>{t('ocs_dilliem_funfact_2').split('...')[0]}...</summary><p>...{t('ocs_dilliem_funfact_2').split('...')[1]}</p></details></li>
                <li><details className={styles.trivia}><summary>{t('ocs_dilliem_funfact_3').split('...')[0]}...</summary><p>...{t('ocs_dilliem_funfact_3').split('...')[1]}</p></details></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {selectedOC === 'crystal' && (
        <div className={styles.ocGrid}>
           <div className={`${styles.imagePlaceholder} ${styles.crystalImageBg}`}>
            <p>ภาพเต็มตัว Crystal<br/>(แนะนำ 800x1200px)</p>
          </div>
          <div className={styles.ocDetails}>
            <h2 className={styles.ocName} style={{ color: '#a855f7' }}>{t('ocs_crystal_name')}</h2>
            <div className={styles.quoteContainer}>
              <p className={styles.ocQuote}>{t('ocs_crystal_quote')}</p>
              <button onClick={() => playAudio('/audio/crystal_quote.mp3')} className={styles.audioButton}>🔊</button>
            </div>
            <ul className={styles.charSheet}>
              <li><strong>{t('common_gender')}:</strong> {t('ocs_crystal_gender')}</li>
              <li><strong>{t('common_age')}:</strong> {t('ocs_crystal_age')}</li>
              <li><strong>{t('common_personality')}:</strong> {t('ocs_crystal_personality')}</li>
              <li data-hover-icon="🧋"><strong>{t('common_likes')}:</strong> {t('ocs_crystal_likes')}</li>
              <li data-hover-icon="🙄"><strong>{t('common_dislikes')}:</strong> {t('ocs_crystal_dislikes')}</li>
              <li><strong>{t('common_ability')}:</strong> {t('ocs_crystal_ability')}</li>
              <li><strong>{t('common_relationship')}:</strong> {t('ocs_crystal_relationship')}</li>
            </ul>
            <div className={styles.funFactsSection}>
                <h3 className={styles.funFactsTitle}>{t('ocs_crystal_funfacts_title')}</h3>
                <ul className={styles.funFactsList}>
                    <li><details className={styles.trivia}><summary>{t('ocs_crystal_funfact_1').split('...')[0]}...</summary><p>...{t('ocs_crystal_funfact_1').split('...')[1]}</p></details></li>
                    <li><details className={styles.trivia}><summary>{t('ocs_crystal_funfact_2').split('...')[0]}...</summary><p>...{t('ocs_crystal_funfact_2').split('...')[1]}</p></details></li>
                    <li><details className={styles.trivia}><summary>{t('ocs_crystal_funfact_3').split('...')[0]}...</summary><p>...{t('ocs_crystal_funfact_3').split('...')[1]}</p></details></li>
                </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OCsPage;