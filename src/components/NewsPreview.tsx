import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  published_at: string;
  image_url?: string;
  category?: string;
}

const NewsPreview: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`/api/news.php?t=${Date.now()}`);
        const data = await res.json();
        setNews(data.slice(0, 3)); // показываем 3 последние новости
      } catch (error) {
        console.error('Failed to load news preview');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading || news.length === 0) return null;

  return (
    <section className="news-preview-section" style={{ padding: '70px 20px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Заголовок секции */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '40px' 
        }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>
            Latest News
          </h2>
          <Link to="/news" className="btn-primary">
            View all news →
          </Link>
        </div>

        {/* Карточки новостей */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '28px' 
        }}>
          {news.map((item) => (
            <Link 
              to="/news" 
              key={item.id}
              className="news-preview-card"
              style={{ 
                textDecoration: 'none', 
                color: 'inherit',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'block'
              }}
            >
              {/* Изображение */}
              {item.image_url && (
                <div style={{ 
                  width: '100%', 
                  height: 'clamp(220px, 30vw, 360px)', 
                  overflow: 'hidden',
                  background: 'var(--surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src={item.image_url} 
                    alt={item.title}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                </div>
              )}

              {/* Контент карточки */}
              <div style={{ padding: '24px' }}>
                <div className="news-preview-meta" style={{ 
                  fontSize: '13px', 
                  marginBottom: '10px' 
                }}>
                  {new Date(item.published_at).toLocaleDateString('en-US', {
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric'
                  })}
                  {item.category && ` • ${item.category}`}
                </div>

                <h3 className="news-preview-title" style={{ 
                  fontSize: '1.3rem', 
                  lineHeight: '1.35', 
                  marginBottom: '12px',
                  fontWeight: 600
                }}>
                  {item.title}
                </h3>

                <p className="news-preview-excerpt" style={{ 
                  fontSize: '15px', 
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {item.excerpt.length > 120 
                    ? item.excerpt.substring(0, 120) + '...' 
                    : item.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
