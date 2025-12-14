import { Link } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { getFeaturedTutors } from '../data/tutors';

function Home() {
  const featuredSubjects = subjects.slice(0, 6);
  const featuredTutors = getFeaturedTutors();

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>GCSE Support That Actually Helps</h1>
            <p className="hero-subtitle">
              Struggling with your GCSEs? You're not alone. Our friendly, qualified tutors
              help thousands of UK students build confidence and achieve better grades.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Help Now
              </Link>
              <Link to="/subjects" className="btn btn-secondary btn-lg">
                Browse Subjects
              </Link>
            </div>
            <div className="hero-trust">
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span>DBS-checked tutors</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span>All major exam boards</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span>Flexible online sessions</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Students helped</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.9</span>
                <span className="stat-label">Average rating</span>
              </div>
              <div className="stat">
                <span className="stat-number">12</span>
                <span className="stat-label">GCSE subjects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Getting help with your GCSEs is simple</p>
          </div>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Tell us what you need</h3>
              <p>Fill out our quick form with your subject, topics, and goals.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Get matched</h3>
              <p>We'll connect you with a tutor who specialises in exactly what you need.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Start learning</h3>
              <p>Book your first session online or in-person and watch your confidence grow.</p>
            </div>
          </div>
          <div className="section-cta">
            <Link to="/contact" className="btn btn-primary">
              Request a Tutor
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Subjects */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Popular GCSE Subjects</h2>
            <p>Expert tutoring across all key GCSE subjects</p>
          </div>
          <div className="subjects-grid">
            {featuredSubjects.map(subject => (
              <Link
                to={`/subjects/${subject.id}`}
                key={subject.id}
                className="subject-card"
                style={{ '--subject-colour': subject.colour }}
              >
                <span className="subject-icon">{subject.icon}</span>
                <h3>{subject.name}</h3>
                <p>{subject.examBoards.join(' • ')}</p>
                <span className="subject-arrow">→</span>
              </Link>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/subjects" className="btn btn-secondary">
              View All Subjects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-primary">
        <div className="container">
          <div className="section-header section-header-light">
            <h2>Why Parents Trust Us</h2>
            <p>We take your child's safety and success seriously</p>
          </div>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🛡️</div>
              <h3>DBS-Checked Tutors</h3>
              <p>
                Every tutor has an enhanced DBS check verified within the last 12 months.
                Your child's safety is our priority.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">🎓</div>
              <h3>Qualified & Experienced</h3>
              <p>
                Our tutors have excellent grades themselves and know the GCSE curriculum
                inside out. Many are current or former teachers.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">📋</div>
              <h3>Exam Board Experts</h3>
              <p>
                AQA, Edexcel, OCR, WJEC – whatever exam board your child follows,
                we have tutors who know it well.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">💻</div>
              <h3>Flexible Sessions</h3>
              <p>
                Online or in-person, evenings or weekends – we work around your
                family's schedule.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">📈</div>
              <h3>Progress Tracking</h3>
              <p>
                Regular updates on your child's progress so you can see the improvement
                and celebrate their wins.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">❤️</div>
              <h3>Supportive Approach</h3>
              <p>
                We build confidence, not just knowledge. Our tutors create a safe space
                where it's okay to make mistakes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tutors */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Some of Our Tutors</h2>
            <p>Friendly, qualified tutors ready to help you succeed</p>
          </div>
          <div className="tutors-preview">
            {featuredTutors.slice(0, 3).map(tutor => (
              <div key={tutor.id} className="tutor-preview-card">
                <img
                  src={tutor.photo}
                  alt={tutor.name}
                  className="tutor-preview-photo"
                />
                <div className="tutor-preview-info">
                  <h3>{tutor.name}</h3>
                  <p className="tutor-subjects">{tutor.subjects.join(' • ')}</p>
                  <div className="tutor-rating">
                    <span className="stars">{'★'.repeat(Math.floor(tutor.rating))}</span>
                    <span className="rating-text">{tutor.rating} ({tutor.reviewCount} reviews)</span>
                  </div>
                  <p className="tutor-experience">{tutor.experience} experience</p>
                  <div className="tutor-badges">
                    {tutor.trustSignals.dbsChecked && (
                      <span className="badge badge-trust">DBS Checked</span>
                    )}
                    {tutor.trustSignals.examinerExperience && (
                      <span className="badge badge-special">Former Examiner</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/tutors" className="btn btn-secondary">
              View All Tutors
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>What Students & Parents Say</h2>
            <p>Real feedback from our GCSE community</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "I was really struggling with maths and felt like I'd never understand algebra.
                  Sarah made everything click! I went from a grade 4 to a 7 in just six months."
                </p>
              </div>
              <div className="testimonial-author">
                <span className="author-name">Emily, Year 11</span>
                <span className="author-subject">Mathematics Student</span>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "As a parent, I was reassured by the DBS checks and regular progress updates.
                  My son's confidence in science has grown so much. Highly recommend!"
                </p>
              </div>
              <div className="testimonial-author">
                <span className="author-name">David M., Parent</span>
                <span className="author-subject">Combined Science</span>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "Emma helped me understand what examiners actually want. Her tips for
                  English Literature essays were game-changing. Got a 9 in the end!"
                </p>
              </div>
              <div className="testimonial-author">
                <span className="author-name">Josh, Year 11</span>
                <span className="author-subject">English Literature Student</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-cta-block">
        <div className="container">
          <div className="cta-block">
            <h2>Ready to Improve Your GCSE Grades?</h2>
            <p>
              Get matched with a qualified tutor today. No commitment – just tell us
              what you need help with and we'll be in touch.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Request Help Now
            </Link>
            <p className="cta-reassurance">
              <span>✓ Free initial consultation</span>
              <span>✓ No obligation</span>
              <span>✓ Response within 24 hours</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
