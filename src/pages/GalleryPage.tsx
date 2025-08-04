import { useState, useMemo } from 'react';
import styles from './GalleryPage.module.css';
import { NavLink } from 'react-router-dom';

// 1. กำหนด Type สำหรับข้อมูลรูปภาพให้ละเอียดขึ้น
interface ArtworkItem {
  id: number;
  src: string;
  title: string;
  category: 'Character Art' | 'Story Illustration' | 'Experimental' | 'Crystal Series' | 'Commissioned Work';
  date: string; // Format: "YYYY-MM-DD"
  description: string;
  tags: string[];
}

// 2. สร้างข้อมูลตัวอย่างตามโครงสร้างใหม่
const allArtData: ArtworkItem[] = [
  // COMMENT: แนะนำขนาดภาพสำหรับ Grid คือ 1000x1000px
  { id: 1, 
    // URL ที่แปลงแล้วจากรูปในโฟลเดอร์ Gallery ของคุณ
    src: 'https://res.cloudinary.com/du3ysvigt/image/upload/v1754298254/inrain_aywom7.jpg', 
    title: 'Crystal in the rain', category: 'Crystal Series', date: '2025-08-01', description: 'Exploring a melancholic mood with Crystal.', tags: ['OC', 'Digital Painting'] },
  { id: 2, src: '/images/placeholder.png', title: 'DilliEm at his desk', category: 'Character Art', date: '2025-07-20', description: 'A cozy scene of the artist at work.', tags: ['OC', 'Lofi'] },
  { id: 3, src: '/images/placeholder.png', title: 'A Dragon\'s Lair', category: 'Story Illustration', date: '2025-06-15', description: 'Illustration for a fantasy storybook project.', tags: ['Fantasy', 'Environment'] },
  { id: 4, src: '/images/placeholder.png', title: 'Commission for @username', category: 'Commissioned Work', date: '2025-05-28', description: 'Chibi style commission for a client.', tags: ['Commission', 'Chibi'] },
  { id: 5, src: '/images/placeholder.png', title: 'Glitch Effect Test', category: 'Experimental', date: '2025-05-02', description: 'Testing new brushes and chromatic aberration effects.', tags: ['Experimental', 'Glitch'] },
  { id: 6, src: '/images/placeholder.png', title: 'Crystal\'s First Appearance', category: 'Crystal Series', date: '2025-04-10', description: 'The very first concept of Crystal.', tags: ['OC', 'Concept Art'] },
  // --- ผลงานเก่าที่จะแสดงเมื่อกด Load More ---
  { id: 7, src: '/images/placeholder.png', title: 'Forest Guardian', category: 'Character Art', date: '2024-12-22', description: 'An original character design.', tags: ['OC', 'Fantasy'] },
  { id: 8, src: '/images/placeholder.png', title: 'Spaceship Hangar', category: 'Story Illustration', date: '2024-11-18', description: 'Scene illustration for a sci-fi project.', tags: ['Sci-Fi', 'Environment'] },
];

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<ArtworkItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  // Logic การฟิลเตอร์ตามหมวดหมู่
  const filteredArt = useMemo(() => {
    if (activeFilter === 'All') return allArtData;
    return allArtData.filter(art => art.category === activeFilter);
  }, [activeFilter]);

  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className={`container ${styles.pageContainer}`}>
      {/* 1. Header / Intro */}
      <header className={styles.header}>
        <h1 className={styles.title}>✨ Explore the Art of DilliEm</h1>
        <p className={styles.subtitle}>Stories told in color and expression.</p>
      </header>

      {/* 2. Filter Tabs */}
      <div className={styles.filterContainer}>
        {['All', 'Character Art', 'Story Illustration', 'Crystal Series', 'Experimental', 'Commissioned Work'].map(filter => (
          <button
            key={filter}
            onClick={() => {
              setActiveFilter(filter);
              setVisibleCount(6); // Reset จำนวนที่แสดงเมื่อเปลี่ยนฟิลเตอร์
            }}
            className={`${styles.filterButton} ${activeFilter === filter ? styles.activeFilter : ''}`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* 3. Grid Layout */}
      <div className={styles.galleryGrid}>
        {filteredArt.slice(0, visibleCount).map((art) => (
          <div key={art.id} className={styles.artworkItem} onClick={() => setSelectedImage(art)}>
            <img src={art.src} alt={art.title} className={styles.artworkImage} />
            <div className={styles.artworkOverlay}>
              <p>{art.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 4. "Load More" Button */}
      {visibleCount < filteredArt.length && (
        <div className={styles.loadMoreContainer}>
          <button onClick={() => setVisibleCount(prev => prev + 6)} className={styles.loadMoreButton}>
            Load More
          </button>
        </div>
      )}

      {/* 5. Image Modal with Metadata */}
      {selectedImage && (
        <div className={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setSelectedImage(null)}>×</button>
            <div className={styles.modalImageContainer}>
              {/* COMMENT: ขนาดภาพที่แนะนำสำหรับ Modal ควรมีความละเอียดสูง (เช่น 2000px+) */}
              <img src={selectedImage.src} alt={selectedImage.title} className={styles.modalImage} />
            </div>
            <div className={styles.modalDetails}>
              <h3 className={styles.modalTitle}>{selectedImage.title}</h3>
              <div className={styles.metadata}>
                <span>📅 {formatDate(selectedImage.date)}</span>
                <span>/</span>
                <span>📂 {selectedImage.category}</span>
              </div>
              <div className={styles.tagContainer}>
                {selectedImage.tags.map(tag => <span key={tag} className={styles.tag}>#{tag}</span>)}
              </div>
              <p className={styles.modalDescription}>{selectedImage.description}</p>
              <NavLink to="/commission" className={styles.modalCtaButton}>
                Interested in a commission like this?
              </NavLink>
            </div>
          </div>
        </div>
      )}

      {/* 6. CTA Section */}
      <footer className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Want something like this?</h2>
        <div className={styles.ctaButtons}>
            <NavLink to="/commission" className={`${styles.ctaButton} ${styles.primary}`}>Commission Me</NavLink>
            <NavLink to="/contact" className={`${styles.ctaButton} ${styles.secondary}`}>Questions?</NavLink>
        </div>
      </footer>
    </div>
  );
};

export default GalleryPage;