import styles from './ContactPage.module.css';
import { useTranslation } from 'react-i18next'; // 1. Import useTranslation
import {
  FaTwitter, FaInstagram, FaDiscord, FaPatreon, FaFacebook,
  FaTumblr, FaYoutube, FaTiktok, FaPaintBrush, FaEnvelope,
} from 'react-icons/fa';
import { SiKofi, SiPixiv, SiThreads, SiBluesky } from 'react-icons/si';

// ... (ข้อมูล links ทั้งหมดเหมือนเดิม)
const socialLinks = [
  { href: '#', Icon: FaTwitter, title: 'Twitter / X', className: styles.twitter },
  { href: '#', Icon: FaInstagram, title: 'Instagram', className: styles.instagram },
  { href: '#', Icon: SiThreads, title: 'Threads', className: styles.threads },
  { href: '#', Icon: FaFacebook, title: 'Facebook', className: styles.facebook },
  { href: '#', Icon: SiBluesky, title: 'Bluesky', className: styles.bluesky },
  { href: '#', Icon: FaYoutube, title: 'YouTube', className: styles.youtube },
  { href: '#', Icon: FaTiktok, title: 'TikTok', className: styles.tiktok },
];
const artPortfolioLinks = [
  { href: '#', Icon: SiPixiv, title: 'Pixiv', className: styles.pixiv },
  { href: '#', Icon: FaTumblr, title: 'Tumblr', className: styles.tumblr },
  { href: '#', Icon: FaPaintBrush, title: 'Arbum.art', className: styles.arbum },
];
const supportLinks = [
  { href: '#', Icon: FaPatreon, title: 'Patreon', className: styles.patreon },
  { href: '#', Icon: SiKofi, title: 'Ko-fi', className: styles.kofi },
];


const ContactPage = () => {
  const { t } = useTranslation(); // 2. เรียกใช้ hook

  return (
    <div className={`container ${styles.pageContainer}`}>
      {/* 3. เปลี่ยนข้อความทั้งหมดให้ใช้ t('key') */}
      <h1 className={styles.title}>{t('contact_title')}</h1>
      <p className={styles.subtitle}>{t('contact_subtitle')}</p>

      {/* Social Media */}
      <div className={styles.linkGroup}>
        <h2 className={styles.groupTitle}>{t('contact_group_social')}</h2>
        <div className={styles.socialsContainer}>
          {socialLinks.map(({ href, Icon, title, className }) => (
            <a key={title} href={href} target="_blank" rel="noopener noreferrer" 
               className={`${styles.socialLink} ${className}`} 
               title={title} aria-label={title}>
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Art Portfolio & Support */}
      <div className={styles.subGroupsContainer}>
        <div className={styles.linkGroup}>
          <h2 className={styles.groupTitle}>{t('contact_group_portfolio')}</h2>
          <div className={styles.socialsContainer}>
            {artPortfolioLinks.map(({ href, Icon, title, className }) => (
              <a key={title} href={href} target="_blank" rel="noopener noreferrer" 
                 className={`${styles.socialLink} ${className}`} 
                 title={title} aria-label={title}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.linkGroup}>
          <h2 className={styles.groupTitle}>{t('contact_group_support')}</h2>
          <div className={styles.socialsContainer}>
            {supportLinks.map(({ href, Icon, title, className }) => (
              <a key={title} href={href} target="_blank" rel="noopener noreferrer" 
                 className={`${styles.socialLink} ${className}`} 
                 title={title} aria-label={title}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Direct Contact */}
      <div className={styles.directContactSection}>
        <h2 className={styles.groupTitle}>{t('contact_group_direct')}</h2>
        <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
                <FaEnvelope /> 
                <a href="mailto:dilliem.art@gmail.com">dilliem.art@gmail.com</a>
            </div>
            <div className={styles.contactItem}>
                <FaDiscord />
                <span>@DilliEm</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;