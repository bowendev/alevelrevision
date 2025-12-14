function QuizProgress({ currentIndex, totalCards, reviewedToday, dueCards, onShowStats }) {
  const progress = totalCards > 0 ? Math.round((currentIndex / totalCards) * 100) : 0;

  return (
    <div className="quiz-progress">
      <div className="container">
        <div className="progress-inner">
          <div className="progress-stats">
            <div className="progress-stat">
              <span className="stat-label">Progress</span>
              <span className="stat-value">{currentIndex} / {totalCards}</span>
            </div>
            <div className="progress-stat">
              <span className="stat-label">Reviewed today</span>
              <span className="stat-value">{reviewedToday}</span>
            </div>
            <div className="progress-stat">
              <span className="stat-label">Cards due</span>
              <span className="stat-value">{dueCards}</span>
            </div>
          </div>

          <button onClick={onShowStats} className="btn btn-secondary btn-sm">
            View Stats
          </button>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

export default QuizProgress;
