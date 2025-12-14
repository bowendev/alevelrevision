import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { subjects } from '../data/subjects';

function Contact() {
  const location = useLocation();
  const prefilledData = location.state || {};

  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    subject: prefilledData.subject || '',
    yearGroup: '',
    helpType: prefilledData.helpType || '',
    message: '',
    preferredContact: 'email',
    hearAboutUs: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Pre-fill tutor name if provided
  useEffect(() => {
    if (prefilledData.tutor) {
      setFormData(prev => ({
        ...prev,
        message: `I'd like to enquire about tutoring with ${prefilledData.tutor}${prefilledData.subjects ? ` for ${prefilledData.subjects.join(' or ')}` : ''}.`
      }));
    }
  }, [prefilledData.tutor, prefilledData.subjects]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.yearGroup) {
      newErrors.yearGroup = 'Please select a year group';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitting(false);
    setSubmitted(true);

    // Log form data (in production, this would be sent to a backend)
    console.log('Form submitted:', formData);
  };

  if (submitted) {
    return (
      <main>
        <section className="section">
          <div className="container">
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h1>Thank You!</h1>
              <p>
                We've received your enquiry and will be in touch within 24 hours.
                Check your email ({formData.email}) for a confirmation.
              </p>
              <div className="success-next-steps">
                <h2>What happens next?</h2>
                <ol>
                  <li>We'll review your requirements and find the best tutor match</li>
                  <li>A member of our team will contact you to discuss your needs</li>
                  <li>We'll arrange a free introductory consultation</li>
                  <li>You can start lessons at a time that suits you</li>
                </ol>
              </div>
              <div className="success-cta">
                <a href="/" className="btn btn-primary">Back to Home</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Get GCSE Help</h1>
          <p>
            Tell us what you need and we'll match you with the perfect tutor.
            We respond to all enquiries within 24 hours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Form */}
            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-section">
                  <h2>Student Details</h2>

                  <div className="form-group">
                    <label htmlFor="studentName">
                      Student's First Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      className={errors.studentName ? 'error' : ''}
                      placeholder="Enter student's first name"
                    />
                    {errors.studentName && (
                      <span className="error-message">{errors.studentName}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="yearGroup">
                      Year Group <span className="required">*</span>
                    </label>
                    <select
                      id="yearGroup"
                      name="yearGroup"
                      value={formData.yearGroup}
                      onChange={handleChange}
                      className={errors.yearGroup ? 'error' : ''}
                    >
                      <option value="">Select year group</option>
                      <option value="year9">Year 9</option>
                      <option value="year10">Year 10</option>
                      <option value="year11">Year 11</option>
                      <option value="resit">Resitting GCSEs</option>
                    </select>
                    {errors.yearGroup && (
                      <span className="error-message">{errors.yearGroup}</span>
                    )}
                  </div>
                </div>

                <div className="form-section">
                  <h2>Contact Details</h2>

                  <div className="form-group">
                    <label htmlFor="parentName">Parent/Guardian Name</label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Enter parent/guardian name (if applicable)"
                    />
                    <span className="form-hint">If the enquiry is from a parent</span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="07xxx xxxxxx"
                    />
                    <span className="form-hint">Optional, but helpful for quick responses</span>
                  </div>

                  <div className="form-group">
                    <label>Preferred Contact Method</label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleChange}
                        />
                        <span>Email</span>
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleChange}
                        />
                        <span>Phone</span>
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="either"
                          checked={formData.preferredContact === 'either'}
                          onChange={handleChange}
                        />
                        <span>Either</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h2>Tutoring Requirements</h2>

                  <div className="form-group">
                    <label htmlFor="subject">
                      Subject <span className="required">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={errors.subject ? 'error' : ''}
                    >
                      <option value="">Select a subject</option>
                      {subjects.map(subject => (
                        <option key={subject.id} value={subject.name}>
                          {subject.name}
                        </option>
                      ))}
                      <option value="multiple">Multiple subjects</option>
                      <option value="other">Other / Not sure</option>
                    </select>
                    {errors.subject && (
                      <span className="error-message">{errors.subject}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="helpType">Type of Help Needed</label>
                    <select
                      id="helpType"
                      name="helpType"
                      value={formData.helpType}
                      onChange={handleChange}
                    >
                      <option value="">Select type of help</option>
                      <option value="1-to-1">1-to-1 Tutoring</option>
                      <option value="group">Small Group Sessions</option>
                      <option value="revision">Revision/Exam Prep</option>
                      <option value="homework">Homework Help</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      Tell Us More
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="What topics are you struggling with? What are your goals? Any other details that might help us find the right tutor..."
                    />
                  </div>
                </div>

                <div className="form-section">
                  <div className="form-group">
                    <label htmlFor="hearAboutUs">How did you hear about us?</label>
                    <select
                      id="hearAboutUs"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleChange}
                    >
                      <option value="">Please select</option>
                      <option value="google">Google search</option>
                      <option value="social">Social media</option>
                      <option value="friend">Friend or family</option>
                      <option value="school">School recommendation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-submit">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-full"
                    disabled={submitting}
                  >
                    {submitting ? 'Sending...' : 'Send Enquiry'}
                  </button>
                  <p className="form-disclaimer">
                    By submitting this form, you agree to be contacted about our tutoring services.
                    We respect your privacy and will never share your information.
                  </p>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <aside className="contact-sidebar">
              <div className="sidebar-card">
                <h3>What Happens Next?</h3>
                <ol className="next-steps">
                  <li>
                    <span className="step-number">1</span>
                    <div>
                      <strong>We review your request</strong>
                      <p>Within 24 hours of receiving your enquiry</p>
                    </div>
                  </li>
                  <li>
                    <span className="step-number">2</span>
                    <div>
                      <strong>We find your match</strong>
                      <p>We select the best tutor for your needs</p>
                    </div>
                  </li>
                  <li>
                    <span className="step-number">3</span>
                    <div>
                      <strong>Free consultation</strong>
                      <p>Discuss your goals and meet your tutor</p>
                    </div>
                  </li>
                  <li>
                    <span className="step-number">4</span>
                    <div>
                      <strong>Start learning</strong>
                      <p>Book sessions at times that suit you</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="sidebar-card sidebar-card-trust">
                <h3>Your Safety Matters</h3>
                <ul className="trust-list">
                  <li>
                    <span className="trust-check">✓</span>
                    All tutors are DBS-checked
                  </li>
                  <li>
                    <span className="trust-check">✓</span>
                    References verified
                  </li>
                  <li>
                    <span className="trust-check">✓</span>
                    Safeguarding trained
                  </li>
                  <li>
                    <span className="trust-check">✓</span>
                    Secure online sessions
                  </li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3>Questions?</h3>
                <p>
                  If you'd prefer to speak to someone, email us at{' '}
                  <a href="mailto:hello@gcsehub.co.uk">hello@gcsehub.co.uk</a>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
