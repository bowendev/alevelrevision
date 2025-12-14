import { useParams, Link, Navigate } from 'react-router-dom';
import { getSubjectById } from '../data/subjects';
import { getTutorsBySubject } from '../data/tutors';

function SubjectDetail() {
  const { subjectId } = useParams();
  const subject = getSubjectById(subjectId);
  const tutors = getTutorsBySubject(subjectId);

  if (!subject) {
    return <Navigate to="/subjects" replace />;
  }

  return (
    <main>
      {/* Hero */}
      <section
        className="page-hero page-hero-subject"
        style={{ '--subject-colour': subject.colour }}
      >
        <div className="container">
          <div className="breadcrumb">
            <Link to="/subjects">Subjects</Link>
            <span>/</span>
            <span>{subject.name}</span>
          </div>
          <div className="subject-hero-content">
            <span className="subject-hero-icon">{subject.icon}</span>
            <div>
              <h1>{subject.name} GCSE Tutoring</h1>
              <p>{subject.description}</p>
              <div className="exam-boards-list">
                <span className="label">Exam boards covered:</span>
                {subject.examBoards.map(board => (
                  <span key={board} className="exam-board-tag">{board}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-cta">
            <Link to="/contact" state={{ subject: subject.name }} className="btn btn-primary btn-lg">
              Get {subject.name} Help
            </Link>
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="section">
        <div className="container">
          <div className="two-column">
            <div className="column">
              <h2>Topics We Cover</h2>
              <p className="section-intro">
                Our tutors can help you with any topic in the {subject.name} GCSE curriculum,
                including:
              </p>
              <ul className="topic-list">
                {subject.topics.map((topic, index) => (
                  <li key={index}>
                    <span className="topic-check">✓</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
            <div className="column">
              <h2>Common Struggles</h2>
              <p className="section-intro">
                Many students find these areas challenging. Our tutors specialise in helping
                you overcome these hurdles:
              </p>
              <ul className="struggle-list">
                {subject.struggles.map((struggle, index) => (
                  <li key={index}>
                    <span className="struggle-icon">💡</span>
                    {struggle}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Help */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>Types of Support Available</h2>
            <p>Choose the learning style that works best for you</p>
          </div>
          <div className="help-types-grid">
            {subject.helpTypes.map((help, index) => (
              <div key={index} className="help-type-card">
                <h3>{help.type}</h3>
                <p className="help-description">{help.description}</p>
                <div className="help-meta">
                  <span className="help-duration">
                    <span className="meta-icon">⏱️</span>
                    {help.duration}
                  </span>
                  <span className="help-price">
                    <span className="meta-icon">💷</span>
                    {help.price}
                  </span>
                </div>
                <Link
                  to="/contact"
                  state={{ subject: subject.name, helpType: help.type }}
                  className="btn btn-secondary btn-full"
                >
                  Enquire About This
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutors for this subject */}
      {tutors.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>{subject.name} Tutors</h2>
              <p>Meet some of our tutors who specialise in {subject.name}</p>
            </div>
            <div className="tutors-grid">
              {tutors.slice(0, 3).map(tutor => (
                <div key={tutor.id} className="tutor-card">
                  <img
                    src={tutor.photo}
                    alt={tutor.name}
                    className="tutor-photo"
                  />
                  <div className="tutor-info">
                    <h3>{tutor.name}</h3>
                    <div className="tutor-rating">
                      <span className="stars">{'★'.repeat(Math.floor(tutor.rating))}</span>
                      <span>{tutor.rating} ({tutor.reviewCount} reviews)</span>
                    </div>
                    <p className="tutor-qualifications">
                      {tutor.qualifications[0]}
                    </p>
                    <div className="tutor-badges">
                      {tutor.trustSignals.dbsChecked && (
                        <span className="badge badge-trust">DBS Checked</span>
                      )}
                      <span className="badge">{tutor.experience}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {tutors.length > 3 && (
              <div className="section-cta">
                <Link to="/tutors" className="btn btn-secondary">
                  View All {subject.name} Tutors
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section section-cta-block">
        <div className="container">
          <div className="cta-block">
            <h2>Ready to Improve Your {subject.name} Grade?</h2>
            <p>
              Get matched with a qualified {subject.name} tutor who understands your
              exam board and can help you achieve your best grade.
            </p>
            <Link
              to="/contact"
              state={{ subject: subject.name }}
              className="btn btn-primary btn-lg"
            >
              Request a {subject.name} Tutor
            </Link>
            <p className="cta-reassurance">
              <span>✓ Free consultation</span>
              <span>✓ No commitment</span>
              <span>✓ Same-day response</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SubjectDetail;
