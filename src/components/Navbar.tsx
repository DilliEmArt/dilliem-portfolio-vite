import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useTranslation } from 'react-i18next'; // 1. Import useTranslation
import LanguageSwitcher from './LanguageSwitcher'; // 2. Import ปุ่มเปลี่ยนภาษา

const Navbar = () => {
  const { t } = useTranslation(); // 3. เรียกใช้ hook

  // 4. สร้าง Array ของข้อมูลลิงก์
  const navLinksData = [
    { name: t('nav_home'), path: '/' },
    { name: t('nav_about'), path: '/about' },
    { name: t('nav_ocs'), path: '/oc' },
    { name: t('nav_gallery'), path: '/gallery' },
    { name: t('nav_devlog'), path: '/devlog' },
    { name: t('nav_commission'), path: '/commission' },
    { name: t('nav_contact'), path: '/contact' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.container}`}>
        <NavLink to="/" className={styles.brand}>
          DilliEm
        </NavLink>
        <div className={styles.navLinksContainer}>
          {/* 5. แสดงผลลิงก์จาก Array */}
          {navLinksData.map((link) => (
            <NavLink
              key={link.name} // ใช้ name ที่ไม่ซ้ำกันเป็น key
              to={link.path}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
            >
              {link.name}
            </NavLink>
          ))}
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;