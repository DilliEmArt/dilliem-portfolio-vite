import styles from './HomePage.module.css';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
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

      {/* 2. ข้อความต้อนรับ */}
      <h1 className={styles.headline}>
        Where <span>Art</span> Meets <span>Imagination</span>
      </h1>
      <p className={styles.subheadline}>
        Welcome to my creative space! I'm DilliEm, an artist who brings characters and stories to life. Explore the gallery, meet my OCs, and perhaps, let's create something magical together.
      </p>

      {/* 3. Call-to-Action Buttons */}
      <div className={styles.buttonContainer}>
        <NavLink to="/gallery" className={`${styles.button} ${styles.buttonPrimary}`}>
          Explore Gallery
        </NavLink>
        <NavLink to="/oc" className={`${styles.button} ${styles.buttonOutline}`}>
          Meet the OCs
        </NavLink>
      </div>

      {/* 4. Crystal's Comment */}
      <div className={styles.crystalComment}>
        <p><strong>💎 Crystal says:</strong> "Took you long enough to get here. Don't just stand there, go click something. He spent ages on this, you know."</p>
      </div>

    </div>
  );
};

export default HomePage;