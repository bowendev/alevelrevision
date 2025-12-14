function SessionComplete({ sessionStats, sessionDuration, onNewSession, onViewStats }) {
  const { cardsReviewed, correctCount, accuracy, newCardsLearned } = sessionStats;

  return (
    <main className="session-complete">
      <section className="section">
        <div className="container">
          <div className="complete-container">
            <div className="complete-icon">✓</div>
            <h1>Session Complete!</h1>
            <p className="complete-subtitle">Great work! Here's your session summary:</p>

            <div className="session-stats-grid">
              <div className="session-stat-card">
                <div className="stat-icon">📊</div>
                <div className="stat-number">{cardsReviewed}</div>
                <div className="stat-label">Cards Reviewed</div>
              </div>

              <div className="session-stat-card">
                <div className="stat-icon">✓</div>
                <div className="stat-number">{correctCount}</div>
                <div className="stat-label">Correct Answers</div>
              </div>

              <div className="session-stat-card">
                <div className="stat-icon">🎯</div>
                <div className="stat-number">{accuracy}%</div>
                <div className="stat-label">Accuracy</div>
              </div>

              <div className="session-stat-card">
                <div className="stat-icon">⏱️</div>
                <div className="stat-number">{sessionDuration}</div>
                <div className="stat-label">Minutes</div>
              </div>

              {newCardsLearned > 0 && (
                <div className="session-stat-card highlight">
                  <div className="stat-icon">🆕</div>
                  <div className="stat-number">{newCardsLearned}</div>
                  <div className="stat-label">New Cards Learned</div>
                </div>
              )}
            </div>

            <div className="complete-message">
              {accuracy >= 80 && (
                <p className="encouragement excellent">
                  Excellent work! You're mastering this material. 🌟
                </p>
              )}
              {accuracy >= 60 && accuracy < 80 && (
                <p className="encouragement good">
                  Good job! Keep practicing to solidify your knowledge. 📚
                </p>
              )}
              {accuracy < 60 && (
                <p className="encouragement keep-going">
                  Keep going! Reviewing these cards will help strengthen your understanding. 💪
                </p>
              )}
            </div>

            <div className="complete-actions">
              <button onClick={onNewSession} className="btn btn-primary btn-lg">
                Start New Session
              </button>
              <button onClick={onViewStats} className="btn btn-secondary btn-lg">
                View Detailed Stats
              </button>
            </div>

            <div className="next-review-info">
              <p>
                Come back tomorrow to review cards that are due. The spaced repetition
                algorithm will schedule your reviews for optimal retention.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SessionComplete;
