import { useState } from 'react';
import styles from './CommissionPage.module.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaPaperPlane, FaComments, FaCreditCard, FaEdit, FaPaintBrush, FaCheckCircle } from 'react-icons/fa';

const CommissionPage = () => {
  const { t } = useTranslation();
  const [commissionStatus, setCommissionStatus] = useState<'open' | 'closed' | 'queue'>('closed');
  const [queueCount, setQueueCount] = useState(3);

  const StatusDisplay = () => {
    if (commissionStatus === 'open') {
      return <div className={`${styles.status} ${styles.statusOpen}`}>{t('commission_status_open')}</div>;
    }
    if (commissionStatus === 'closed') {
      return <div className={`${styles.status} ${styles.statusClosed}`}>{t('commission_status_closed')}</div>;
    }
    if (commissionStatus === 'queue') {
      return <div className={`${styles.status} ${styles.statusQueue}`}>{t('commission_status_queue', { count: queueCount })}</div>;
    }
    return null;
  };

  return (
    <div className={`container ${styles.pageContainer}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('commission_title')}</h1>
        <StatusDisplay />
      </div>
      <p className={styles.intro}>{t('commission_intro')}</p>

      {/* --- ประเภทงาน --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('commission_section_types_title')}</h2>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <div className={styles.cardImagePlaceholder}><p>ตัวอย่างงาน Bust</p></div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{t('commission_card_bust_title')}</h3>
              <p className={styles.cardPrice}>{t('commission_card_bust_price')}</p>
              <p className={styles.cardDesc}>{t('commission_card_bust_desc')}</p>
            </div>
          </div>
          {/* ... ทำซ้ำกับการ์ดอื่นๆ ... */}
          <div className={styles.card}>
            <div className={styles.cardImagePlaceholder}><p>ตัวอย่างงาน Half Body</p></div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{t('commission_card_half_title')}</h3>
              <p className={styles.cardPrice}>{t('commission_card_half_price')}</p>
              <p className={styles.cardDesc}>{t('commission_card_half_desc')}</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImagePlaceholder}><p>ตัวอย่างงาน Full Body</p></div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{t('commission_card_full_title')}</h3>
              <p className={styles.cardPrice}>{t('commission_card_full_price')}</p>
              <p className={styles.cardDesc}>{t('commission_card_full_desc')}</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImagePlaceholder}><p>ตัวอย่างงาน Chibi</p></div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{t('commission_card_chibi_title')}</h3>
              <p className={styles.cardPrice}>{t('commission_card_chibi_price')}</p>
              <p className={styles.cardDesc}>{t('commission_card_chibi_desc')}</p>
            </div>
          </div>
        </div>
        <div className={styles.galleryLinkContainer}>
            <NavLink to="/gallery" className={styles.galleryLink}>{t('commission_gallery_link')}</NavLink>
        </div>
      </section>

      {/* --- ราคาเพิ่มเติม --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('commission_section_addons_title')}</h2>
        <div className={styles.tableContainer}>
          <table className={styles.priceTable}>
            <tbody>
              <tr><td>{t('commission_addon_extra_char')}</td><td><strong>{t('commission_addon_extra_char_price')}</strong></td></tr>
              <tr><td>{t('commission_addon_detailed_bg')}</td><td><strong>{t('commission_addon_detailed_bg_price')}</strong></td></tr>
              <tr><td>{t('commission_addon_commercial')}</td><td><strong>{t('commission_addon_commercial_price')}</strong></td></tr>
              <tr><td>{t('commission_addon_rush')}</td><td><strong>{t('commission_addon_rush_price')}</strong></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- ขั้นตอนการทำงาน --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('commission_section_workflow_title')}</h2>
        <div className={styles.workflowGrid}>
          <div className={styles.workflowStep}><FaPaperPlane className={styles.workflowIcon} /><h3>{t('commission_workflow_step1_title')}</h3><p>{t('commission_workflow_step1_desc')}</p></div>
          <div className={styles.workflowStep}><FaComments className={styles.workflowIcon} /><h3>{t('commission_workflow_step2_title')}</h3><p>{t('commission_workflow_step2_desc')}</p></div>
          <div className={styles.workflowStep}><FaCreditCard className={styles.workflowIcon} /><h3>{t('commission_workflow_step3_title')}</h3><p>{t('commission_workflow_step3_desc')}</p></div>
          <div className={styles.workflowStep}><FaEdit className={styles.workflowIcon} /><h3>{t('commission_workflow_step4_title')}</h3><p>{t('commission_workflow_step4_desc')}</p></div>
          <div className={styles.workflowStep}><FaPaintBrush className={styles.workflowIcon} /><h3>{t('commission_workflow_step5_title')}</h3><p>{t('commission_workflow_step5_desc')}</p></div>
          <div className={styles.workflowStep}><FaCheckCircle className={styles.workflowIcon} /><h3>{t('commission_workflow_step6_title')}</h3><p>{t('commission_workflow_step6_desc')}</p></div>
        </div>
      </section>
      
      {/* --- FAQ --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('commission_section_faq_title')}</h2>
        <div className={styles.faqContainer}>
            <details className={styles.faqItem}><summary>{t('commission_faq1_q')}</summary><p>{t('commission_faq1_a')}</p></details>
            <details className={styles.faqItem}><summary>{t('commission_faq2_q')}</summary><p>{t('commission_faq2_a')}</p></details>
            <details className={styles.faqItem}><summary>{t('commission_faq3_q')}</summary><p>{t('commission_faq3_a')}</p></details>
        </div>
      </section>

        <div className={styles.ctaContainer}>
         <a
           href={t('commission_form_link')}
           target="_blank"
           rel="noopener noreferrer"
           className={`${styles.ctaButton} ${commissionStatus === 'closed' ? styles.disabledButton : ''}`}
         >
           {
             commissionStatus === 'open' ? t('commission_cta_open') :
             // ✅ แก้ไขบรรทัดนี้ให้ถูกต้อง
             commissionStatus === 'closed' ? t('commission_cta_closed') : 
             t('commission_cta_queue')
           }
         </a>
       </div>
    </div>
  );
};

export default CommissionPage;