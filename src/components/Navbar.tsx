import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const navLinksData = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'OCs', path: '/oc' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Devlog', path: '/devlog' }, // <-- เพิ่มลิงก์ใหม่
  { name: 'Commission', path: '/commission' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.container}`}>
        <NavLink to="/" className={styles.brand}>
          DilliEm
        </NavLink>
        <div className={styles.navLinks}>
          {navLinksData.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;