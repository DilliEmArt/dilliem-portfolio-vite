import styles from './ContactPage.module.css';
// 1. เปลี่ยน path การ import ให้ถูกต้อง
import {
  FaInstagram, FaDiscord, FaPatreon, FaFacebook,
  FaTumblr, FaYoutube, FaTiktok, FaPaintBrush, FaEnvelope,
} from 'react-icons/fa'; // ไอคอนทั่วไปยังใช้ /fa ได้
import { FaXTwitter } from 'react-icons/fa6'; // 2. Import FaXTwitter จาก /fa6
import { SiKofi, SiPixiv, SiThreads, SiBluesky } from 'react-icons/si';
// 1. จัดกลุ่มข้อมูลลิงก์เป็น Array of Objects เพื่อจัดการง่ายขึ้น
const socialLinks = [
{ href: '#', Icon: FaXTwitter, title: 'Twitter / X', className: styles.twitter }, // เปลี่ยน FaTwitter เป็น FaXTwitter
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
  return (
    <div className={`container ${styles.pageContainer}`}>
      <h1 className={styles.title}>Contact & Socials</h1>
      <p className={styles.subtitle}>ติดตามผลงานและพูดคุยกันได้ทุกช่องทาง หรือส่งข้อความหาโดยตรงได้เลยครับ</p>

      {/* --- 2. แบ่งกลุ่มแพลตฟอร์ม --- */}
      {/* Social Media */}
      <div className={styles.linkGroup}>
        <h2 className={styles.groupTitle}>Social Media</h2>
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
          <h2 className={styles.groupTitle}>Art Portfolio</h2>
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
          <h2 className={styles.groupTitle}>Support Me</h2>
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

      {/* --- 3. เพิ่มส่วน Direct Contact --- */}
      <div className={styles.directContactSection}>
        <h2 className={styles.groupTitle}>Direct Contact</h2>
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