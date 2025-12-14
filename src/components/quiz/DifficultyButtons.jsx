import { QUALITY_BUTTONS } from '../../utils/sm2Algorithm';

function DifficultyButtons({ onRate, isCorrect }) {
  return (
    <div className="difficulty-buttons">
      <p className="difficulty-label">Rate your confidence:</p>
      <div className="difficulty-buttons-grid">
        {QUALITY_BUTTONS.map((button) => (
          <button
            key={button.quality}
            onClick={() => onRate(button.quality)}
            className="difficulty-btn"
            style={{ '--button-colour': button.colour }}
          >
            <span className="difficulty-btn-label">{button.label}</span>
            <span className="difficulty-btn-description">{button.description}</span>
          </button>
        ))}
      </div>
      <div className="difficulty-hints">
        <p className="difficulty-hint">
          <strong>Again:</strong> Show this card again immediately
        </p>
        <p className="difficulty-hint">
          <strong>Hard:</strong> You got it right, but it was difficult
        </p>
        <p className="difficulty-hint">
          <strong>Good:</strong> Correct answer with some hesitation
        </p>
        <p className="difficulty-hint">
          <strong>Easy:</strong> Perfect recall, very confident
        </p>
      </div>
    </div>
  );
}

export default DifficultyButtons;
