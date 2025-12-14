import { getTopicPerformance } from '../../utils/quizLogic';

function QuizStats({ progress, allQuestions, onBack, onNewSession }) {
  if (!progress) {
    return <div>Loading stats...</div>;
  }

  const { stats, sessions } = progress;
  const topicPerformance = getTopicPerformance(progress, allQuestions);

  const totalCards = Object.keys(progress.cards).length;
  const dueCards = Object.values(progress.cards).filter(c => {
    const today = new Date().toISOString().split('T')[0];
    return c.nextReviewDate <= today;
  }).length;

  const recentSessions = sessions.slice(-10).reverse();

  return (
    <main className="quiz-stats">
      <section className="section">
        <div className="container">
          <div className="stats-container">
            <div className="stats-header">
              <h1>Your Progress</h1>
              <p className="stats-username">@{progress.username}</p>
            </div>

            {/* Overall Stats */}
            <div className="stats-section">
              <h2>Overall Statistics</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">📚</div>
                  <div className="stat-number">{totalCards}</div>
                  <div className="stat-label">Cards Learned</div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">📅</div>
                  <div className="stat-number">{dueCards}</div>
                  <div className="stat-label">Cards Due Today</div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">✓</div>
                  <div className="stat-number">{Math.round(stats.correctRate * 100)}%</div>
                  <div className="stat-label">Overall Accuracy</div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">🔥</div>
                  <div className="stat-number">{stats.currentStreak}</div>
                  <div className="stat-label">Current Streak</div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">📊</div>
                  <div className="stat-number">{stats.totalSessionsCompleted}</div>
                  <div className="stat-label">Sessions Completed</div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">⏱️</div>
                  <div className="stat-number">{stats.averageSessionLength}</div>
                  <div className="stat-label">Avg Session (mins)</div>
                </div>
              </div>
            </div>

            {/* Topic Performance */}
            <div className="stats-section">
              <h2>Performance by Topic</h2>
              <div className="topic-performance">
                {Object.entries(topicPerformance).map(([topic, perf]) => (
                  <div key={topic} className="topic-perf-card">
                    <h3>{topic}</h3>
                    <div className="topic-perf-stats">
                      <div className="topic-perf-stat">
                        <span className="label">Accuracy:</span>
                        <span className="value">{perf.accuracy}%</span>
                      </div>
                      <div className="topic-perf-stat">
                        <span className="label">Attempted:</span>
                        <span className="value">{perf.attempted}</span>
                      </div>
                      <div className="topic-perf-stat">
                        <span className="label">Avg EF:</span>
                        <span className="value">{perf.averageEF}</span>
                      </div>
                    </div>
                    <div className="topic-progress-bar">
                      <div
                        className="topic-progress-fill"
                        style={{ width: `${perf.accuracy}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Sessions */}
            {recentSessions.length > 0 && (
              <div className="stats-section">
                <h2>Recent Sessions</h2>
                <div className="sessions-list">
                  {recentSessions.map((session, index) => (
                    <div key={index} className="session-card">
                      <div className="session-date">{session.date}</div>
                      <div className="session-stats-row">
                        <span>{session.cardsReviewed} cards</span>
                        <span>{session.accuracy}% accuracy</span>
                        <span>{session.duration} min</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="stats-actions">
              <button onClick={onNewSession} className="btn btn-primary btn-lg">
                Start New Session
              </button>
              <button onClick={onBack} className="btn btn-secondary btn-lg">
                Back to Quiz
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default QuizStats;
