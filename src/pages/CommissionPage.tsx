import styles from './CommissionPage.module.css';
import { NavLink } from 'react-router-dom';
// 1. Import icons สำหรับ Workflow
import { FaPaperPlane, FaComments, FaCreditCard, FaEdit, FaPaintBrush, FaCheckCircle } from 'react-icons/fa';

const CommissionPage = () => {
  return (
    <div className={`container ${styles.pageContainer}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Commission Info</h1>
        <div className={`${styles.status} ${styles.statusOpen}`}>
          STATUS: OPEN
        </div>
      </div>
      <p className={styles.intro}>
        ยินดีต้อนรับสู่หน้า Commission ของ DilliEm ครับ! หากคุณสนใจว่าจ้างงานวาดภาพ ไม่ว่าจะเป็นภาพตัวละคร Original, Fanart, หรือโปรเจกต์ส่วนตัวต่างๆ โปรดอ่านรายละเอียดด้านล่างให้ครบถ้วนก่อนทำการติดต่อสั่งงาน ขอบคุณครับ
      </p>

      {/* --- ประเภทงาน --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>ประเภทงานและราคาเริ่มต้น</h2>
        <div className={styles.cardGrid}>
          {/* Card 1: Bust */}
          <div className={styles.card}>
            <div className={styles.cardImagePlaceholder}>
              {/* <img
                src="https://res.cloudinary.com/your-name/image/upload/v12345/commission_bust_sample.jpg"
                alt="Sample of Bust commission"
                className={styles.cardImage}
              /> */}
              <p>ตัวอย่างงาน Bust</p></div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Bust (ครึ่งตัวบน)</h3>
              <p className={styles.cardPrice}>700 THB</p>
              <p className={styles.cardDesc}>ลงสี แสงเงา + พื้นหลัง Gradient</p>
            </div>
          </div>
          {/* Card 2: Half Body */}
          <div className={styles.card}>
            <div className={styles.cardImagePlaceholder}><p>ตัวอย่างงาน Half Body</p></div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Half Body</h3>
              <p className={styles.cardPrice}>1,200 THB</p>
              <p className={styles.cardDesc}>ลงสีเต็ม + พื้นหลัง Pattern</p>
            </div>
          </div>
          {/* Card 3: Full Body */}
          <div className={styles.card}>
            <div className={styles.cardImagePlaceholder}><p>ตัวอย่างงาน Full Body</p></div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Full Body</h3>
              <p className={styles.cardPrice}>1,800 THB</p>
              <p className={styles.cardDesc}>ท่าทางพิเศษ รายละเอียดชุดครบถ้วน</p>
            </div>
          </div>
          {/* Card 4: Chibi */}
          <div className={styles.card}>
            <div className={styles.cardImagePlaceholder}><p>ตัวอย่างงาน Chibi</p></div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Chibi</h3>
              <p className={styles.cardPrice}>600 THB</p>
              <p className={styles.cardDesc}>สไตล์น่ารัก เหมาะทำ Icon, Emote</p>
            </div>
          </div>
        </div>
        <div className={styles.galleryLinkContainer}>
            <NavLink to="/gallery" className={styles.galleryLink}>
                ดูตัวอย่างผลงานทั้งหมดใน Gallery →
            </NavLink>
        </div>
      </section>

      {/* --- ราคาเพิ่มเติม --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>ราคาเพิ่มเติมและเงื่อนไขพิเศษ</h2>
        <div className={styles.tableContainer}>
          <table className={styles.priceTable}>
            <tbody>
              <tr>
                <td>Extra Character (ตัวละครเพิ่มเติม)</td>
                <td><strong>+70%</strong> ของราคาหลัก (ต่อ 1 ตัว)</td>
              </tr>
              <tr>
                <td>Detailed Background (ฉากหลังมีรายละเอียด)</td>
                <td>เริ่มต้น <strong>+500 THB</strong> (ประเมินตามบรีฟ)</td>
              </tr>
              <tr>
                <td>Commercial Use (ใช้งานเชิงพาณิชย์)</td>
                <td><strong>x2</strong> ของราคารวมทั้งหมด</td>
              </tr>
              <tr>
                <td>⚡️ Rush Order (งานด่วน 3-5 วัน)</td>
                <td><strong>+30%</strong> ของราคาหลัก (โปรดสอบถามคิวก่อน)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- ขั้นตอนการทำงาน --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>ขั้นตอนการทำงาน</h2>
        <div className={styles.workflowGrid}>
          <div className={styles.workflowStep}>
            <FaPaperPlane className={styles.workflowIcon} />
            <h3>Step 1: ส่งบรีฟ</h3>
            <p>ลูกค้าส่งรายละเอียดและ Reference ผ่านฟอร์มสั่งงาน</p>
          </div>
          <div className={styles.workflowStep}>
            <FaComments className={styles.workflowIcon} />
            <h3>Step 2: คุยรายละเอียด</h3>
            <p>พูดคุย, สรุปงาน และส่งใบเสนอราคาสุดท้าย</p>
          </div>
          <div className={styles.workflowStep}>
            <FaCreditCard className={styles.workflowIcon} />
            <h3>Step 3: ชำระมัดจำ</h3>
            <p>ชำระเงินมัดจำ <strong>50%</strong> เพื่อยืนยันและเริ่มคิวงาน</p>
          </div>
          <div className={styles.workflowStep}>
            <FaEdit className={styles.workflowIcon} />
            <h3>Step 4: ร่างภาพและแก้ไข</h3>
            <p>ส่งภาพร่างให้ตรวจสอบ (แก้ไขฟรี <strong>2 ครั้ง</strong>)</p>
          </div>
          <div className={styles.workflowStep}>
            <FaPaintBrush className={styles.workflowIcon} />
            <h3>Step 5: ลงสีและเก็บงาน</h3>
            <p>หลังจากยืนยันภาพร่างแล้ว จะเริ่มลงสีเต็มรูปแบบ</p>
          </div>
          <div className={styles.workflowStep}>
            <FaCheckCircle className={styles.workflowIcon} />
            <h3>Step 6: ส่งมอบงาน</h3>
            <p>ชำระเงินส่วนที่เหลือและรับไฟล์งานความละเอียดสูง</p>
          </div>
        </div>
      </section>
      
      {/* --- FAQ --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>คำถามที่พบบ่อย (FAQ)</h2>
        <div className={styles.faqContainer}>
            <details className={styles.faqItem}>
                <summary>สามารถขอคืนเงินได้หรือไม่?</summary>
                <p>สามารถขอคืนเงินเต็มจำนวนได้หากยังไม่มีการส่งภาพร่างใดๆ หลังจากเริ่มงานไปแล้ว จะไม่สามารถขอคืนเงินมัดจำได้ แต่สามารถยกเลิกงานได้ตลอดเวลาครับ</p>
            </details>
            <details className={styles.faqItem}>
                <summary>รับ/ไม่รับวาดงานแนวไหนบ้าง?</summary>
                <p>รับวาด OC, Fanart, ภาพประกอบทั่วไป ไม่รับวาดงานที่มีเนื้อหา NSFW, รุนแรง, หรือประเด็นอ่อนไหวทางการเมือง/ศาสนาครับ</p>
            </details>
            <details className={styles.faqItem}>
                <summary>สามารถวาดตามสไตล์ของศิลปินท่านอื่นได้ไหม?</summary>
                <p>ไม่สามารถลอกเลียนแบบสไตล์ของศิลปินท่านอื่นได้ 100% แต่สามารถใช้เป็นแรงบันดาลใจ (Inspiration) ในการบรีฟงานได้ครับ</p>
            </details>
        </div>
      </section>

       <div className={styles.ctaContainer}>
         <a href="#" className={styles.ctaButton}>
           Proceed to Order Form
         </a>
       </div>
    </div>
  );
};

export default CommissionPage;