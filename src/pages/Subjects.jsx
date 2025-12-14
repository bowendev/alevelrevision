import { useState } from 'react';
import { Link } from 'react-router-dom';
import { subjects, getSubjectsByCategory } from '../data/subjects';

function Subjects() {
  const [filter, setFilter] = useState('all');
  const categories = getSubjectsByCategory();

  const filterOptions = [
    { value: 'all', label: 'All Subjects' },
    { value: 'core', label: 'Core Subjects' },
    { value: 'sciences', label: 'Sciences' },
    { value: 'humanities', label: 'Humanities' },
    { value: 'languages', label: 'Languages' },
  ];

  const filteredSubjects = filter === 'all' ? subjects : categories[filter] || [];

  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>GCSE Subjects</h1>
          <p>
            Find expert tutoring support for any GCSE subject. Our qualified tutors cover
            all major exam boards including AQA, Edexcel, OCR, and WJEC.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section">
        <div className="container">
          {/* Filter Buttons */}
          <div className="filter-bar">
            {filterOptions.map(option => (
              <button
                key={option.value}
                className={`filter-btn ${filter === option.value ? 'active' : ''}`}
                onClick={() => setFilter(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Subjects Grid */}
          <div className="subjects-grid subjects-grid-large">
            {filteredSubjects.map(subject => (
              <Link
                to={`/subjects/${subject.id}`}
                key={subject.id}
                className="subject-card subject-card-detailed"
                style={{ '--subject-colour': subject.colour }}
              >
                <div className="subject-card-header">
                  <span className="subject-icon">{subject.icon}</span>
                  <h2>{subject.name}</h2>
                </div>
                <p className="subject-description">{subject.description}</p>
                <div className="subject-meta">
                  <span className="exam-boards">
                    {subject.examBoards.join(' • ')}
                  </span>
                </div>
                <div className="subject-topics">
                  <span className="topics-label">Topics include:</span>
                  <span className="topics-list">
                    {subject.topics.slice(0, 3).join(', ')}
                    {subject.topics.length > 3 && '...'}
                  </span>
                </div>
                <span className="subject-cta">
                  Get help with {subject.name} →
                </span>
              </Link>
            ))}
          </div>

          {filteredSubjects.length === 0 && (
            <div className="empty-state">
              <p>No subjects found in this category.</p>
              <button onClick={() => setFilter('all')} className="btn btn-secondary">
                View all subjects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="section section-light">
        <div className="container">
          <div className="help-block">
            <div className="help-content">
              <h2>Not sure where to start?</h2>
              <p>
                If you're struggling with multiple subjects or aren't sure what help you need,
                don't worry. Get in touch and we'll help you figure out the best approach for
                your GCSEs.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Talk to Us
              </Link>
            </div>
            <div className="help-features">
              <div className="help-feature">
                <span className="help-icon">📞</span>
                <span>Free initial consultation</span>
              </div>
              <div className="help-feature">
                <span className="help-icon">📊</span>
                <span>Personalised study plan</span>
              </div>
              <div className="help-feature">
                <span className="help-icon">🎯</span>
                <span>Targeted support where you need it</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Subjects;
