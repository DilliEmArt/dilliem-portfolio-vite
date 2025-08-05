import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'th') => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.switcher}>
      <button 
        onClick={() => changeLanguage('en')}
        className={i18n.language === 'en' ? styles.active : ''}
      >
        EN
      </button>
      <span>|</span>
      <button 
        onClick={() => changeLanguage('th')}
        className={i18n.language === 'th' ? styles.active : ''}
      >
        TH
      </button>
    </div>
  );
};

export default LanguageSwitcher;