import { useState } from 'react';
import { getAllUsernames } from '../../utils/progressStorage';

function QuizIntro({ onStart }) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const savedUsernames = getAllUsernames();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError('Please enter a username');
      return;
    }

    if (username.length < 2) {
      setError('Username must be at least 2 characters');
      return;
    }

    onStart(username.trim().toLowerCase());
  };

  const handleSelectUser = (savedUsername) => {
    setUsername(savedUsername);
    onStart(savedUsername);
  };

  return (
    <main className="quiz-intro">
      <section className="section">
        <div className="container">
          <div className="intro-container">
            <div className="intro-header">
              <span className="intro-icon">⚗️</span>
              <h1>A-Level Chemistry Quiz</h1>
              <p className="intro-subtitle">
                Master AQA A-Level Chemistry with spaced repetition
              </p>
            </div>

            <div className="intro-card">
              <h2>Welcome!</h2>
              <p className="intro-description">
                This quiz uses the proven SM-2 spaced repetition algorithm to help you retain
                chemistry knowledge effectively. Answer questions, rate your confidence, and
                watch as the system optimizes your learning schedule.
              </p>

              <form onSubmit={handleSubmit} className="intro-form">
                <div className="form-group">
                  <label htmlFor="username">Enter your username</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      setError('');
                    }}
                    placeholder="e.g., john_smith"
                    className={error ? 'error' : ''}
                    autoFocus
                  />
                  {error && <span className="error-message">{error}</span>}
                  <span className="form-hint">
                    Enter the same username to continue your progress
                  </span>
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-full">
                  Start Quiz Session
                </button>
              </form>

              {savedUsernames.length > 0 && (
                <div className="saved-users">
                  <p className="saved-users-label">Or continue as:</p>
                  <div className="saved-users-list">
                    {savedUsernames.map((savedUsername) => (
                      <button
                        key={savedUsername}
                        onClick={() => handleSelectUser(savedUsername)}
                        className="saved-user-btn"
                      >
                        {savedUsername}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="intro-features">
              <div className="intro-feature">
                <span className="feature-icon">📚</span>
                <h3>150 AQA Questions</h3>
                <p>Covering all spec sections across Physical, Inorganic, and Organic Chemistry</p>
              </div>
              <div className="intro-feature">
                <span className="feature-icon">🧠</span>
                <h3>Smart Learning</h3>
                <p>SM-2 algorithm schedules reviews at optimal intervals for long-term retention</p>
              </div>
              <div className="intro-feature">
                <span className="feature-icon">📊</span>
                <h3>Track Progress</h3>
                <p>Monitor your performance across topics and identify weak areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default QuizIntro;
