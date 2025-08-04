import styles from './DevlogPage.module.css';

// ข้อมูลตัวอย่างสำหรับ Blog Posts
const devlogPosts = [
  {
    image: 'https://res.cloudinary.com/your-name/image/upload/v12345/devlog_sketch_to_crystal.jpg',
    title: 'From Sketch to Crystal: A Character\'s Journey',
    date: 'August 4, 2025',
    description: 'A step-by-step look at the process of painting Crystal, from the initial rough sketch to the final rendered artwork.',
    link: '#', // ในอนาคตจะเปลี่ยนเป็น /blog/from-sketch-to-crystal
  },
  {
    image: '/images/placeholder_16x9.png',
    title: 'My Digital Art Workflow & Tools',
    date: 'July 20, 2025',
    description: 'A brief overview of the tools I use daily, my schedule, and how I plan character stories before starting to draw.',
    link: '#',
  },
  {
    image: '/images/placeholder_16x9.png',
    title: 'Designing Chibi DilliEm: The Process',
    date: 'June 8, 2025',
    description: 'How I approached designing my own artist mascot, the challenges, and the key features that define him.',
    link: '#',
  },
];

const DevlogPage = () => {
  return (
    <div className={`container ${styles.pageContainer}`}>
      {/* 1. Hero Section */}
      <header className={styles.header}>
        <h1 className={styles.title}>🖌️ Behind the Art</h1>
        <p className={styles.subtitle}>
          A look into the process, thoughts, and magic behind DilliEm’s creations.
        </p>
      </header>

      {/* 2. Content Cards */}
      <div className={styles.cardGrid}>
        {devlogPosts.map((post) => (
          <a key={post.title} href={post.link} className={styles.card}>
            <div className={styles.cardImage}>
                {/* COMMENT: ขนาดภาพแนะนำ 16:9 เช่น 1280x720px */}
                {/* <img 
            src={post.image} 
            alt={post.title} 
            className={styles.devlogCardImage} // เพิ่ม class
        /> */}
                <p>Image Placeholder</p>
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardDate}>{post.date}</p>
              <p className={styles.cardDescription}>{post.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* 3. CTA Section */}
      <footer className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>💬 Want to know more?</h2>
        <div className={styles.ctaButtons}>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>Ask on Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>Join the Discord</a>
        </div>
      </footer>
    </div>
  );
};

export default DevlogPage;