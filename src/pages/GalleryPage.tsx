import { useState, useMemo } from 'react';
import styles from './GalleryPage.module.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 1. Import useTranslation

interface ArtworkItem {
  id: number;
  src: string;
  title: string;
  category: 'Character Art' | 'Story Illustration' | 'Experimental' | 'Crystal Series' | 'Commissioned Work';
  date: string;
  description: string;
  tags: string[];
}

const allArtData: ArtworkItem[] = [
    { id: 1, src: 'https://res.cloudinary.com/du3ysvigt/image/upload/v1754298254/inrain_aywom7.jpg', title: 'Crystal in the rain', category: 'Crystal Series', date: '2025-08-01', description: 'Exploring a melancholic mood with Crystal.', tags: ['OC', 'Digital Painting'] },
    { id: 2, src: '/images/placeholder.png', title: 'DilliEm at his desk', category: 'Character Art', date: '2025-07-20', description: 'A cozy scene of the artist at work.', tags: ['OC', 'Lofi'] },
    { id: 3, src: '/images/placeholder.png', title: 'A Dragon\'s Lair', category: 'Story Illustration', date: '2025-06-15', description: 'Illustration for a fantasy storybook project.', tags: ['Fantasy', 'Environment'] },
    { id: 4, src: '/images/placeholder.png', title: 'Commission for @username', category: 'Commissioned Work', date: '2025-05-28', description: 'Chibi style commission for a client.', tags: ['Commission', 'Chibi'] },
    { id: 5, src: '/images/placeholder.png', title: 'Glitch Effect Test', category: 'Experimental', date: '2025-05-02', description: 'Testing new brushes and chromatic aberration effects.', tags: ['Experimental', 'Glitch'] },
    { id: 6, src: '/images/placeholder.png', title: 'Crystal\'s First Appearance', category: 'Crystal Series', date: '2025-04-10', description: 'The very first concept of Crystal.', tags: ['OC', 'Concept Art'] },
    { id: 7, src: '/images/placeholder.png', title: 'Forest Guardian', category: 'Character Art', date: '2024-12-22', description: 'An original character design.', tags: ['OC', 'Fantasy'] },
    { id: 8, src: '/images/placeholder.png', title: 'Spaceship Hangar', category: 'Story Illustration', date: '2024-11-18', description: 'Scene illustration for a sci-fi project.', tags: ['Sci-Fi', 'Environment'] },
];

const GalleryPage = () => {
  const { t } = useTranslation(); // 2. เรียกใช้ hook
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<ArtworkItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredArt = useMemo(() => {
    if (activeFilter === 'All') return allArtData;
    return allArtData.filter(art => art.category === activeFilter);
  }, [activeFilter]);

  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  // 3. สร้าง Array สำหรับปุ่มฟิลเตอร์เพื่อจัดการง่ายขึ้น
  const filters = [
    { key: 'All', label: t('gallery_filter_all') },
    { key: 'Character Art', label: t('gallery_filter_character') },
    { key: 'Story Illustration', label: t('gallery_filter_illustration') },
    { key: 'Crystal Series', label: t('gallery_filter_crystal') },
    { key: 'Experimental', label: t('gallery_filter_experimental') },
    { key: 'Commissioned Work', label: t('gallery_filter_commission') },
  ];

  return (
    <div className={`container ${styles.pageContainer}`}>
      <header className={styles.header}>
        <h1 className={styles.title}>{t('gallery_title')}</h1>
        <p className={styles.subtitle}>{t('gallery_subtitle')}</p>
      </header>

      {/* 4. แก้ไข Filter Tabs ให้ใช้ Array ใหม่ */}
      <div className={styles.filterContainer}>
        {filters.map(filter => (
          <button
            key={filter.key}
            onClick={() => {
              setActiveFilter(filter.key);
              setVisibleCount(6);
            }}
            className={`${styles.filterButton} ${activeFilter === filter.key ? styles.activeFilter : ''}`}
          >
            {filter.label}
          </button>
        ))}
      </div>

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

      {visibleCount < filteredArt.length && (
        <div className={styles.loadMoreContainer}>
          <button onClick={() => setVisibleCount(prev => prev + 6)} className={styles.loadMoreButton}>
            {t('gallery_load_more')}
          </button>
        </div>
      )}

      {selectedImage && (
        <div className={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setSelectedImage(null)}>×</button>
            <div className={styles.modalImageContainer}>
              <img src={selectedImage.src} alt={selectedImage.title} className={styles.modalImage} />
            </div>
            <div className={styles.modalDetails}>
              <h3 className={styles.modalTitle}>{selectedImage.title}</h3>
              <div className={styles.metadata}>
                <span>📅 {t('gallery_modal_date')}: {formatDate(selectedImage.date)}</span>
                <span>/</span>
                <span>📂 {t('gallery_modal_category')}: {selectedImage.category}</span>
              </div>
              <div className={styles.tagContainer}>
                {selectedImage.tags.map(tag => <span key={tag} className={styles.tag}>#{tag}</span>)}
              </div>
              <p className={styles.modalDescription}>{selectedImage.description}</p>
              <NavLink to="/commission" className={styles.modalCtaButton}>
                {t('gallery_modal_cta')}
              </NavLink>
            </div>
          </div>
        </div>
      )}

      <footer className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>{t('gallery_footer_cta_title')}</h2>
        <div className={styles.ctaButtons}>
            <NavLink to="/commission" className={`${styles.ctaButton} ${styles.primary}`}>{t('gallery_footer_cta_commission')}</NavLink>
            <NavLink to="/contact" className={`${styles.ctaButton} ${styles.secondary}`}>{t('gallery_footer_cta_contact')}</NavLink>
        </div>
      </footer>
    </div>
  );
};

export default GalleryPage;