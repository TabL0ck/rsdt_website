import React, { useState, useEffect } from 'react';
import './AdminNewsPage.css';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  published_at: string;
  image_url?: string;
  category: string;
}

const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD;

const AdminNewsPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    published_at: new Date().toISOString().split('T')[0],
    category: 'Products',
    image_url: '',
  });

  const [imagePreview, setImagePreview] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Проверка авторизации
  useEffect(() => {
    const loggedIn = localStorage.getItem('admin_logged_in') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const showMessage = (text: string, type: 'success' | 'error' = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 4000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      localStorage.setItem('admin_logged_in', 'true');
      setLoginError('');
    } else {
      setLoginError('Неверный пароль');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('admin_logged_in');
  };

  const fetchNews = async () => {
    try {
        const timestamp = Date.now();
        const res = await fetch(`/api/news.php?t=${timestamp}`);
        if (!res.ok) throw new Error('Failed to fetch news');
        const data = await res.json();
        setNews(data);
    } catch (error) {
        showMessage('Ошибка загрузки новостей', 'error');
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) fetchNews();
  }, [isLoggedIn]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Загрузка изображения
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const uploadData = new FormData();
    uploadData.append('image', file);

    try {
      const res = await fetch('/api/upload-image.php', {
        method: 'POST',
        body: uploadData,
      });
      const result = await res.json();

      if (result.success && result.url) {
        setFormData(prev => ({ ...prev, image_url: result.url }));
        setImagePreview(result.url);
      } else {
        showMessage('Ошибка загрузки изображения', 'error');
      }
    } catch {
      showMessage('Ошибка загрузки изображения', 'error');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const isEditing = !!editingNews;
    const url = isEditing 
      ? `/api/update-news.php?id=${editingNews.id}` 
      : '/api/add-news.php';

    try {
      const res = await fetch(url, {
        method: isEditing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || 'Ошибка при сохранении');
      }

      showMessage(isEditing ? 'Новость обновлена!' : 'Новость успешно добавлена!', 'success');
      resetForm();
      fetchNews();
    } catch (error: any) {
      showMessage(error.message || 'Ошибка соединения', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      published_at: new Date().toISOString().split('T')[0],
      category: 'Products',
      image_url: '',
    });
    setImagePreview('');
    setEditingNews(null);
  };

  const handleEdit = (item: NewsItem) => {
    setEditingNews(item);
    setFormData({
      title: item.title,
      excerpt: item.excerpt,
      content: item.content,
      published_at: item.published_at,
      category: item.category,
      image_url: item.image_url || '',
    });
    setImagePreview(item.image_url || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Удалить эту новость?')) return;

    try {
      const res = await fetch(`/api/delete-news.php?id=${id}`, { method: 'DELETE' });
      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || 'Ошибка при удалении');
      }

      showMessage('Новость удалена', 'success');
      fetchNews();
    } catch (error: any) {
      showMessage(error.message || 'Ошибка при удалении', 'error');
    }
  };

if (!isLoggedIn) {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Panel</h2>
        
        {loginError && (
          <p style={{ 
            color: '#e74c3c', 
            marginBottom: '20px', 
            fontSize: '14px' 
          }}>
            {loginError}
          </p>
        )}

        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

  // ==================== АДМИНКА ====================
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>News Editor</h1>
        <button onClick={handleLogout} className="btn-primary">Logout</button>
      </div>

      <div className="admin-form-card">
        <h2>{editingNews ? 'Edit Article' : 'Create New Article'}</h2>

        {message && (
          <p className="message" style={{ color: message.type === 'error' ? '#e74c3c' : '#ff6b00' }}>
            {message.text}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Title</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Publish Date</label>
              <input type="date" name="published_at" value={formData.published_at} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-group">
            <label>Excerpt</label>
            <textarea name="excerpt" value={formData.excerpt} onChange={handleChange} required rows={2} />
          </div>

          <div className="form-group">
            <label>Content</label>
            <textarea name="content" value={formData.content} onChange={handleChange} required rows={8} />
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Category</label>
              <select name="category" value={formData.category} onChange={handleChange}>
                <option value="Products">Products</option>
                <option value="Research">Research</option>
                <option value="Team">Team</option>
              </select>
            </div>
            <div className="form-group">
              <label>Image</label>
              <input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploading} />
              {(imagePreview || formData.image_url) && (
                <img src={imagePreview || formData.image_url} alt="Preview" className="image-preview" />
              )}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
            <button type="submit" disabled={submitting} className="btn-primary">
              {submitting ? 'Saving...' : editingNews ? 'Update Article' : 'Publish Article'}
            </button>
            {editingNews && (
              <button type="button" onClick={resetForm} style={{ background: '#ccc', color: '#333' }} className="btn-primary">
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <h2>All Articles ({news.length})</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {news.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td style={{ textAlign: 'center' }}>{item.published_at}</td>
                <td style={{ textAlign: 'center' }}>{item.category}</td>
                <td>
                  <div className="action-buttons">
                    <button onClick={() => handleEdit(item)} className="btn-primary btn-edit">Edit</button>
                    <button onClick={() => handleDelete(item.id)} className="btn-primary btn-delete">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminNewsPage;