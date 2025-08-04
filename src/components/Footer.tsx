import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* แก้ไขข้อความใน 2 บรรทัดนี้ */}
      <p className={styles.copyright}>© 2025 DilliEm. All rights reserved.</p>
      <p className={styles.credit}>Website designed and developed by DilliEm.</p>
    </footer>
  );
};

export default Footer;