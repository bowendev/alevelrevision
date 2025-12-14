import { useState } from 'react';
import { Link } from 'react-router-dom';
import { tutors } from '../data/tutors';
import { subjects } from '../data/subjects';

function Tutors() {
  const [subjectFilter, setSubjectFilter] = useState('all');

  const filteredTutors = subjectFilter === 'all'
    ? tutors
    : tutors.filter(tutor => tutor.subjectIds.includes(subjectFilter));

  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Our GCSE Tutors</h1>
          <p>
            Meet our team of qualified, DBS-checked tutors. Every tutor is passionate about
            helping students succeed and has been carefully vetted for your peace of mind.
          </p>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="trust-banner">
        <div className="container">
          <div className="trust-banner-items">
            <div className="trust-banner-item">
              <span className="trust-icon">🛡️</span>
              <div>
                <strong>DBS Checked</strong>
                <span>Enhanced checks verified annually</span>
              </div>
            </div>
            <div className="trust-banner-item">
              <span className="trust-icon">📋</span>
              <div>
                <strong>References Verified</strong>
                <span>All tutors provide references</span>
              </div>
            </div>
            <div className="trust-banner-item">
              <span className="trust-icon">🎓</span>
              <div>
                <strong>Safeguarding Trained</strong>
                <span>Up-to-date safeguarding certification</span>
              </div>
            </div>
            <div className="trust-banner-item">
              <span className="trust-icon">✓</span>
              <div>
                <strong>Quality Assured</strong>
                <span>Regularly reviewed feedback</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutors List */}
      <section className="section">
        <div className="container">
          {/* Filter */}
          <div className="filter-bar">
            <span className="filter-label">Filter by subject:</span>
            <select
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Subjects</option>
              {subjects.map(subject => (
                <option key={subject.id} value={subject.id}>
                  {subject.name}
                </option>
              ))}
            </select>
          </div>

          {/* Results count */}
          <p className="results-count">
            Showing {filteredTutors.length} tutor{filteredTutors.length !== 1 ? 's' : ''}
            {subjectFilter !== 'all' && (
              <> for {subjects.find(s => s.id === subjectFilter)?.name}</>
            )}
          </p>

          {/* Tutors Grid */}
          <div className="tutors-detailed-grid">
            {filteredTutors.map(tutor => (
              <article key={tutor.id} className="tutor-detailed-card">
                <div className="tutor-card-header">
                  <img
                    src={tutor.photo}
                    alt={tutor.name}
                    className="tutor-photo-large"
                  />
                  <div className="tutor-header-info">
                    <h2>{tutor.name}</h2>
                    <p className="tutor-subjects-list">
                      {tutor.subjects.join(' • ')}
                    </p>
                    <div className="tutor-rating">
                      <span className="stars">{'★'.repeat(Math.floor(tutor.rating))}</span>
                      <span className="rating-number">{tutor.rating}</span>
                      <span className="review-count">({tutor.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="tutor-card-body">
                  <p className="tutor-bio">{tutor.bio}</p>

                  <div className="tutor-details">
                    <div className="tutor-detail">
                      <strong>Experience:</strong>
                      <span>{tutor.experience}</span>
                    </div>
                    <div className="tutor-detail">
                      <strong>GCSE Grades:</strong>
                      <span>{tutor.gcseGrades}</span>
                    </div>
                    <div className="tutor-detail">
                      <strong>Exam Boards:</strong>
                      <span>{tutor.examBoards.join(', ')}</span>
                    </div>
                    <div className="tutor-detail">
                      <strong>Availability:</strong>
                      <span>{tutor.availability}</span>
                    </div>
                  </div>

                  <div className="tutor-qualifications">
                    <strong>Qualifications:</strong>
                    <ul>
                      {tutor.qualifications.map((qual, index) => (
                        <li key={index}>{qual}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="tutor-trust-signals">
                    {tutor.trustSignals.dbsChecked && (
                      <span className="trust-signal">
                        <span className="signal-icon">✓</span>
                        DBS Checked ({tutor.trustSignals.dbsDate})
                      </span>
                    )}
                    {tutor.trustSignals.safeguardingTrained && (
                      <span className="trust-signal">
                        <span className="signal-icon">✓</span>
                        Safeguarding Trained
                      </span>
                    )}
                    {tutor.trustSignals.references && (
                      <span className="trust-signal">
                        <span className="signal-icon">✓</span>
                        References Verified
                      </span>
                    )}
                    {tutor.trustSignals.examinerExperience && (
                      <span className="trust-signal trust-signal-special">
                        <span className="signal-icon">★</span>
                        Former GCSE Examiner
                      </span>
                    )}
                    {tutor.trustSignals.qtsQualified && (
                      <span className="trust-signal trust-signal-special">
                        <span className="signal-icon">★</span>
                        QTS Qualified Teacher
                      </span>
                    )}
                  </div>
                </div>

                <div className="tutor-card-footer">
                  <Link
                    to="/contact"
                    state={{ tutor: tutor.name, subjects: tutor.subjects }}
                    className="btn btn-primary btn-full"
                  >
                    Request {tutor.name.split(' ')[0]}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredTutors.length === 0 && (
            <div className="empty-state">
              <p>No tutors found for this subject.</p>
              <button onClick={() => setSubjectFilter('all')} className="btn btn-secondary">
                View all tutors
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Become a Tutor CTA */}
      <section className="section section-light">
        <div className="container">
          <div className="side-cta">
            <div className="side-cta-content">
              <h2>Interested in Becoming a Tutor?</h2>
              <p>
                If you're passionate about helping GCSE students and have excellent
                qualifications, we'd love to hear from you. All tutors must pass our
                rigorous vetting process including DBS checks and reference verification.
              </p>
              <a href="#apply" className="btn btn-secondary">
                Apply to Tutor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-cta-block">
        <div className="container">
          <div className="cta-block">
            <h2>Find Your Perfect Tutor</h2>
            <p>
              Tell us what subject you need help with and we'll match you with a
              tutor who's perfect for your needs.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Matched Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Tutors;
