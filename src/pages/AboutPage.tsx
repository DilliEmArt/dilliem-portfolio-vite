import styles from './AboutPage.module.css';
import { NavLink } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className={`container ${styles.pageContainer}`}>
      
      {/* 1. Headline */}
      <h1 className={styles.headline}>Giving Imagination a Tangible Form</h1>

      {/* 2. Introduction */}
      <p className={styles.intro}>
        "Hi! I'm DilliEm, a digital artist who tells stories through characters. For me, every blank canvas is a doorway to another world. My works are a blend of emotion, color, and personality, driven by a simple belief that art is a bridge connecting dreams to reality."
      </p>

      <div className={styles.imagePlaceholder}>
        {/* <img 
      src="https://res.cloudinary.com/your-name/image/upload/v12345/about_chibi.jpg" 
      alt="Chibi DilliEm and Crystal in their studio"
      className={styles.aboutImage} // เพิ่ม class
    /> */}
        <p>ภาพ DilliEm chibi กับ Crystal ในสตูดิโอ<br/>(แนะนำ 1200x600px)</p>
      </div>

      {/* 3. The Story of Us */}
      <div className={styles.storyGrid}>
        <div className={styles.storySection}>
          <h2 className={styles.storyTitle} style={{ color: '#3b82f6' }}>About DilliEm</h2>
          <p className={styles.storyText}>
            ผมคือศิลปินที่มักจะใช้เวลาส่วนใหญ่อยู่กับสมุดสเก็ตช์และปากกาสไตลัส การสร้างตัวละครเปรียบเสมือนการสร้างเพื่อนใหม่ในจินตนาการ ผมหลงใหลในการถ่ายทอดอารมณ์ความรู้สึกผ่านลายเส้นและสีสัน และหวังว่าผลงานของผมจะสามารถสร้างแรงบันดาลใจหรือมอบความสุขเล็กๆ น้อยๆ ให้กับผู้ที่ได้ชมครับ
          </p>
        </div>
        <div className={styles.storySection}>
          <h2 className={styles.storyTitle} style={{ color: '#a855f7' }}>The Origin of Crystal</h2>
          <p className={styles.storyText}>
            Crystal ไม่ได้เป็นเพียงแค่ตัวละครที่ถูกวาดขึ้น แต่เธอคือตัวตนที่เกิดจากความรู้สึก "อยากมีเพื่อนคู่คิด" เธอคือไกด์นำทาง, เพื่อนคู่กัด, และบางครั้งก็เป็นเหมือนเสียงสะท้อนความคิดของผมเอง การมีตัวตนของเธอทำให้โลกแห่งการสร้างสรรค์ของผมไม่เคยเงียบเหงาอีกต่อไป
          </p>
        </div>
      </div>

      {/* 4. Our Mission */}
      <div className={styles.missionSection}>
        <h2 className={styles.missionTitle}>Our Mission</h2>
        <p className={styles.missionText}>
          เราสองคนมีเป้าหมายร่วมกัน นั่นคือการสร้างสรรค์ผลงานที่ไม่ได้มีเพียงความสวยงาม แต่ยังสามารถบอกเล่าเรื่องราวและสร้างความผูกพันกับผู้ชมได้ เราอยากเชิญชวนให้ทุกคนได้เข้ามาสัมผัสโลกใบเล็กๆ ของเราผ่านผลงานทุกชิ้นในแกลเลอรีนี้
        </p>
      </div>

      {/* 5. Call to Action */}
      <div className={styles.ctaContainer}>
        <NavLink to="/gallery" className={styles.ctaButton}>
          Explore My Gallery
        </NavLink>
      </div>

    </div>
  );
};

export default AboutPage;