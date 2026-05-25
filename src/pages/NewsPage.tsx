import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NewsPage.css';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  published_at: string;
  image_url?: string;
  category?: string;
}

const NewsPage: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/news.php');

        if (!response.ok) throw new Error('Failed to fetch news');

        const data: NewsItem[] = await response.json();
        const sorted = [...data].sort((a, b) =>
          new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
        );
        setNews(sorted);
      } catch (err) {
        console.error(err);
        setError('Could not load news from database. Showing demo data.');
        setNews(getDemoNews());
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const getDemoNews = (): NewsItem[] => [
    {
      id: 1,
      title: "MW-Sensor Completes Development of New Rear Occupant Alert Sensor",
      excerpt: "The system has successfully passed validation with our South Korean partner and is ready for mass production.",
      content: "We are pleased to announce that the MW-Sensor team has completed the full development cycle of the Rear Occupant Alert Sensor based on UWB and mmWave technology. The system has passed all validation and functional testing stages.",
      published_at: "2026-05-20",
      image_url: "/news/roas.jpg",
      category: "Products"
    },
    {
      id: 2,
      title: "New Results in Respiratory Rate Detection Using FMCW Radar",
      excerpt: "Achieved accuracy of ±1 breath per minute in both laboratory and real-world conditions.",
      content: "As part of the dissertation work, new results have been obtained on contactless detection of respiratory rate and heart rate using coherent processing of FMCW radar signals.",
      published_at: "2026-05-15",
      image_url: "/news/vitals.jpg",
      category: "Research"
    },
    {
      id: 3,
      title: "New Job Openings in the Radar Sensor Development Team",
      excerpt: "We are looking for a Radar Signal Processing Engineer and Embedded Software Engineer.",
      content: "Due to the growth of our projects, we are expanding the team. Open positions: Radar Signal Processing Engineer and Embedded Software Engineer.",
      published_at: "2026-05-10",
      category: "Team"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const openModal = (item: NewsItem) => {
    setSelectedNews(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedNews(null);
    document.body.style.overflow = 'visible';
  };

  return (
    <div className="news-page">
      {/* Hero Section */}
      <section className="news-hero">
        <div className="news-hero-content">
          <div className="news-badge">NEWS &amp; UPDATES</div>
          <h1>News &amp; Updates</h1>
          <p>
            Latest information about MW-Sensor developments, research,<br />
            and events in automotive and medical radar technologies.
          </p>
          <div className="info-buttons" style={{ justifyContent: 'center', marginTop: '2rem' }}>
            <Link to="/about" className="btn-primary">← Back to About</Link>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="news-section">
        <div className="news-container">
          <div className="news-header">
            <h2>Latest News</h2>
            <p className="section-subtitle">{news.length} publications</p>
          </div>

          {loading && (
            <div className="news-loading">
              <div className="spinner"></div>
              <p>Loading news...</p>
            </div>
          )}

          {!loading && (
            <div className="news-grid">
              {news.map((item) => (
                <div key={item.id} className="news-card" onClick={() => openModal(item)}>
                  {item.image_url && (
                    <div className="news-card-image">
                      <img src={item.image_url} alt={item.title} />
                    </div>
                  )}
                  <div className="news-card-content">
                    <div className="news-meta">
                      <span className="news-date">{formatDate(item.published_at)}</span>
                      {item.category && <span className="news-category">{item.category}</span>}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <div className="news-card-footer">
                      <span className="read-more">Read more →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedNews && (
        <div className="news-modal-overlay" onClick={closeModal}>
          <div className="news-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>

            <div className="modal-header">
              <div className="modal-meta">
                <span>{formatDate(selectedNews.published_at)}</span>
                {selectedNews.category && (
                  <span className="modal-category">{selectedNews.category}</span>
                )}
              </div>
              <h2>{selectedNews.title}</h2>
            </div>

            <div className="modal-body">
              <p className="modal-excerpt">{selectedNews.excerpt}</p>
              <div className="modal-content">
                {selectedNews.content.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <button onClick={closeModal} className="btn-primary">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsPage;