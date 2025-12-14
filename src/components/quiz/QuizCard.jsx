function QuizCard({ question, userAnswer, onAnswerChange, onSubmit, showFeedback, isCorrect }) {
  if (!question) {
    return (
      <div className="quiz-card">
        <p>Loading question...</p>
      </div>
    );
  }

  const { type, specSection, question: questionText, options, explanation, workingSteps } = question;

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !showFeedback && userAnswer.trim()) {
      onSubmit();
    }
  };

  return (
    <div className="quiz-card">
      {/* Spec Section Badge */}
      <div className="spec-badge">{specSection}</div>

      {/* Question */}
      <div className="question-section">
        <h2 className="question-text">{questionText}</h2>
      </div>

      {/* Answer Input */}
      {!showFeedback && (
        <div className="answer-section">
          {type === 'mcq' && (
            <div className="mcq-options">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => onAnswerChange(option)}
                  className={`mcq-option ${userAnswer === option ? 'selected' : ''}`}
                >
                  <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                  <span className="option-text">{option}</span>
                </button>
              ))}
            </div>
          )}

          {type === 'numerical' && (
            <div className="numerical-input">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => onAnswerChange(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your answer"
                className="answer-input"
                autoFocus
              />
              <span className="input-hint">Press Enter to submit</span>
            </div>
          )}

          {type === 'truefalse' && (
            <div className="truefalse-options">
              <button
                onClick={() => onAnswerChange('True')}
                className={`tf-option ${userAnswer === 'True' ? 'selected' : ''}`}
              >
                True
              </button>
              <button
                onClick={() => onAnswerChange('False')}
                className={`tf-option ${userAnswer === 'False' ? 'selected' : ''}`}
              >
                False
              </button>
            </div>
          )}

          <button
            onClick={onSubmit}
            disabled={!userAnswer.trim()}
            className="btn btn-primary btn-lg btn-submit"
          >
            Submit Answer
          </button>
        </div>
      )}

      {/* Feedback */}
      {showFeedback && (
        <div className={`feedback-section ${isCorrect ? 'correct' : 'incorrect'}`}>
          <div className="feedback-header">
            <span className="feedback-icon">{isCorrect ? '✓' : '✗'}</span>
            <h3>{isCorrect ? 'Correct!' : 'Incorrect'}</h3>
          </div>

          {!isCorrect && (
            <div className="correct-answer">
              <strong>Correct answer:</strong> {question.correctAnswer}
            </div>
          )}

          <div className="explanation">
            <strong>Explanation:</strong>
            <p>{explanation}</p>
          </div>

          {workingSteps && workingSteps.length > 0 && (
            <div className="working-steps">
              <strong>Working:</strong>
              <ol>
                {workingSteps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          <p className="rate-difficulty-prompt">
            How difficult was this question for you?
          </p>
        </div>
      )}
    </div>
  );
}

export default QuizCard;
