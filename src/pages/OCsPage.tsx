import { useState } from 'react';
import styles from './OCsPage.module.css';

// 1. สร้างตัวแปรสำหรับเก็บเสียงไว้นอก Component
let currentAudio: HTMLAudioElement | null = null;

const OCsPage = () => {
  const [selectedOC, setSelectedOC] = useState('dilliem');

  // 2. อัปเดตฟังก์ชัน playAudio
  const playAudio = (audioPath: string) => {
    // หยุดเสียงเก่าที่อาจจะกำลังเล่นอยู่
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    try {
      // สร้างและเล่นเสียงใหม่
      const audio = new Audio(audioPath);
      audio.play();
      // เก็บเสียงที่กำลังเล่นอยู่ไว้ในตัวแปร
      currentAudio = audio;
    } catch (error) {
      console.error("Audio file not found or failed to play:", error);
    }
  };

  return (
    <div className={`container ${styles.pageContainer}`}>
      <h1 className={styles.title}>Meet the OCs</h1>

      <div className={styles.selector}>
        <button
          onClick={() => setSelectedOC('dilliem')}
          className={`${styles.selectorButton} ${styles.dilliemButton} ${selectedOC === 'dilliem' ? styles.dilliemActive : ''}`}
        >
          🧑‍🎨 DilliEm
        </button>
        <button
          onClick={() => setSelectedOC('crystal')}
          className={`${styles.selectorButton} ${styles.crystalButton} ${selectedOC === 'crystal' ? styles.crystalActive : ''}`}
        >
          💎 Crystal
        </button>
      </div>

      {selectedOC === 'dilliem' && (
        <div className={styles.ocGrid}>
          <div className={`${styles.imagePlaceholder} ${styles.dilliemImageBg}`}>
            {/* <img 
        src="https://res.cloudinary.com/your-name/image/upload/v12345/dilliem_fullbody.png" 
        alt="Full body art of DilliEm"
        className={styles.ocImage} // เพิ่ม class
    /> */}
            <p>ภาพเต็มตัว DilliEm<br/>(แนะนำ 800x1200px)</p>
          </div>
          <div className={styles.ocDetails}>
            <h2 className={styles.ocName} style={{ color: '#3b82f6' }}>DilliEm (The Artist)</h2>
            <div className={styles.quoteContainer}>
              <p className={styles.ocQuote}>"Let's create something magical!"</p>
              <button onClick={() => playAudio('/audio/dilliem_quote.mp3')} className={styles.audioButton}>🔊</button>
            </div>
            <ul className={styles.charSheet}>
              <li><strong>เพศ:</strong> ชาย</li>
              <li><strong>อายุ:</strong> 23 ปี</li>
              <li><strong>นิสัย:</strong> สุภาพ, ขี้อาย, มุ่งมั่น, ครีเอทีฟ, เป็นคนเก็บตัวบ้าง</li>
              <li data-hover-icon="🍵"><strong>สิ่งที่ชอบ:</strong> วาดภาพ, ฟังดนตรี lo-fi, ดื่มชาอุ่น, สมุดสเก็ตช์เก่า</li>
              <li data-hover-icon="😫"><strong>สิ่งที่ไม่ชอบ:</strong> ความวุ่นวาย, ต้องพูดหน้าคนเยอะ, เสียงดัง, ถูกรีบเร่ง</li>
              <li><strong>ความสามารถ:</strong> วาดอะไรก็ "กลายเป็นจริง" ได้ในโลกของเขา</li>
            </ul>
            <h3 className={styles.relationshipTitle}>Our Relationship</h3>
            <div className={`${styles.dialogueBox} ${styles.dilliemBorder}`}>
                <p><strong>🎙️ DilliEm:</strong> "คริสตัลคือ... เพื่อนคนสำคัญที่ผมวาดขึ้นมาเพื่อให้โลกของผมไม่เงียบเหงาเกินไปครับ"</p>
                <p><strong>🎙️ Crystal:</strong> "ห๊ะ? เพื่อน? ฉันก็แค่ถูกนายลากออกมาจากกระดาษนั่นแหละน่า! ...แต่ก็นะ โลกของนายน่ะ ถ้าไม่มีฉันคอยจัดการให้ มันคงน่าเบื่อแย่"</p>
            </div>
            <div className={styles.funFactsSection}>
              <h3 className={styles.funFactsTitle}>🪄 Fun Facts</h3>
              <ul className={styles.funFactsList}>
                <li><details className={styles.trivia}><summary>ชอบแอบซ่อนชื่อ "Crystal"...</summary><p>...ไว้ในภาพของตัวเองเสมอ</p></details></li>
                <li><details className={styles.trivia}><summary>เคยลองวาด OC แนวเท่...</summary><p>...แต่กลับกลายเป็นตัวตลกซะงั้น</p></details></li>
                <li><details className={styles.trivia}><summary>ชอบเปลี่ยนแปรงวาดรูปบ่อยๆ...</summary><p>...แต่สุดท้ายก็กลับมาใช้ด้ามเดิมตลอด</p></details></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {selectedOC === 'crystal' && (
        <div className={styles.ocGrid}>
          <div className={`${styles.imagePlaceholder} ${styles.crystalImageBg}`}>
            {/* <img 
        src="https://res.cloudinary.com/your-name/image/upload/v12345/crystal_fullbody.png" 
        alt="Full body art of Crystal"
        className={styles.ocImage} // เพิ่ม class
    /> */}
            <p>ภาพเต็มตัว Crystal<br/>(แนะนำ 800x1200px)</p>
          </div>
          <div className={styles.ocDetails}>
            <h2 className={styles.ocName} style={{ color: '#a855f7' }}>Crystal (The Guide)</h2>
            <div className={styles.quoteContainer}>
              <p className={styles.ocQuote}>"Hmph. Took you long enough to check my profile."</p>
              <button onClick={() => playAudio('/audio/crystal_quote.mp3')} className={styles.audioButton}>🔊</button>
            </div>
            <ul className={styles.charSheet}>
              <li><strong>เพศ:</strong> หญิง</li>
              <li><strong>อายุ:</strong> 17 ปี (อายุจริงไม่แน่ชัด)</li>
              <li><strong>นิสัย:</strong> ซึนเดเระ, ฉลาด, ปากไว, จริงใจลึก ๆ แต่ไม่แสดงออก</li>
              <li data-hover-icon="🧋"><strong>สิ่งที่ชอบ:</strong> เครื่องประดับแพลตตินัม, ชานมไข่มุก, ล้อ DilliEm</li>
              <li data-hover-icon="🙄"><strong>สิ่งที่ไม่ชอบ:</strong> การถูกเมิน, การถูกจับได้ว่า “แคร์”, พูดหวาน ๆ</li>
              <li><strong>ความสามารถ:</strong> วาร์ปเข้าออกในหน้าจอ, ช่วยนำทางผู้ชมผ่าน "โลกของศิลปะ"</li>
            </ul>
            <h3 className={styles.relationshipTitle}>Our Relationship</h3>
            <div className={`${styles.dialogueBox} ${styles.crystalBorder}`}>
                <p><strong>🎙️ DilliEm:</strong> "คริสตัลคือ... เพื่อนคนสำคัญที่ผมวาดขึ้นมาเพื่อให้โลกของผมไม่เงียบเหงาเกินไปครับ"</p>
                <p><strong>🎙️ Crystal:</strong> "ห๊ะ? เพื่อน? ฉันก็แค่ถูกนายลากออกมาจากกระดาษนั่นแหละน่า! ...แต่ก็นะ โลกของนายน่ะ ถ้าไม่มีฉันคอยจัดการให้ มันคงน่าเบื่อแย่"</p>
            </div>
            <div className={styles.funFactsSection}>
                <h3 className={styles.funFactsTitle}>🪄 Crystal's Secrets</h3>
                <ul className={styles.funFactsList}>
                    <li><details className={styles.trivia}><summary>เธอตั้งชื่อ "DilliEm" ให้เขา...</summary><p>...โดยไม่ถามความเห็นเขาสักคำ แถมยังบอกว่าเป็นชื่อที่เท่ที่สุดแล้ว!</p></details></li>
                    <li><details className={styles.trivia}><summary>สิ่งที่เธอแอบทำในเว็บนี้...</summary><p>...คือการแฮ็กโค้ดแก้คำผิดให้ DilliEm เพราะทนเห็นเขาใช้คำว่า 'นะค่ะ' ไม่ได้!</p></details></li>
                    <li><details className={styles.trivia}><summary>ลึกๆ แล้วเธออยากให้ DilliEm...</summary><p>...พักผ่อนบ้าง แต่ไม่กล้าพูดตรงๆ</p></details></li>
                </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OCsPage; 