/**
 * SM-2 Spaced Repetition Algorithm
 * Based on: https://www.supermemo.com/en/archives1990-2015/english/ol/sm2
 *
 * Used by Anki and other spaced repetition systems for optimal learning intervals
 */

// Quality rating constants
export const QUALITY = {
  AGAIN: 0,  // Complete blackout, need to see again immediately
  HARD: 3,   // Correct with serious difficulty
  GOOD: 4,   // Correct after hesitation
  EASY: 5    // Perfect recall
};

// Button labels mapping to quality ratings
export const QUALITY_BUTTONS = [
  { label: 'Again', quality: QUALITY.AGAIN, colour: '#EF4444', description: 'Show again' },
  { label: 'Hard', quality: QUALITY.HARD, colour: '#F59E0B', description: 'Difficult' },
  { label: 'Good', quality: QUALITY.GOOD, colour: '#3B82F6', description: 'Correct' },
  { label: 'Easy', quality: QUALITY.EASY, colour: '#10B981', description: 'Perfect' }
];

/**
 * Calculate next review based on SM-2 algorithm
 * @param {Object} card - Current card state
 * @param {number} card.interval - Days until next review
 * @param {number} card.repetitions - Number of successful reviews
 * @param {number} card.easinessFactor - EF between 1.3 and 2.5
 * @param {number} quality - Quality rating (0-5)
 * @returns {Object} Updated card state with new interval, repetitions, and EF
 */
export function calculateNextReview(card, quality) {
  let { interval = 0, repetitions = 0, easinessFactor = 2.5 } = card;

  // Ensure quality is valid
  if (quality < 0 || quality > 5) {
    throw new Error(`Invalid quality rating: ${quality}. Must be between 0 and 5.`);
  }

  // Update easiness factor based on quality
  // Formula: EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  easinessFactor = easinessFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));

  // Easiness factor must be at least 1.3
  if (easinessFactor < 1.3) {
    easinessFactor = 1.3;
  }

  // If quality < 3, reset progress
  if (quality < 3) {
    repetitions = 0;
    interval = 1; // Review tomorrow
  } else {
    // Successful review
    repetitions += 1;

    // Calculate interval based on repetition number
    if (repetitions === 1) {
      interval = 1; // Review tomorrow
    } else if (repetitions === 2) {
      interval = 6; // Review in 6 days
    } else {
      // Subsequent reviews: interval = previous interval × EF
      interval = Math.round(interval * easinessFactor);
    }
  }

  // Calculate next review date
  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + interval);

  return {
    interval,
    repetitions,
    easinessFactor: Math.round(easinessFactor * 100) / 100, // Round to 2 decimal places
    nextReviewDate: nextReviewDate.toISOString().split('T')[0], // ISO date string YYYY-MM-DD
    lastReviewed: new Date().toISOString().split('T')[0],
    quality
  };
}

/**
 * Initialize a new card with default SM-2 values
 * @param {string} questionId - Unique question ID
 * @returns {Object} Initial card state
 */
export function initializeCard(questionId) {
  return {
    questionId,
    interval: 0,
    repetitions: 0,
    easinessFactor: 2.5,
    nextReviewDate: new Date().toISOString().split('T')[0], // Due today
    lastReviewed: null,
    quality: null,
    history: []
  };
}

/**
 * Add review to card history
 * @param {Object} card - Card state
 * @param {number} quality - Quality rating
 * @param {number} interval - Interval used
 * @returns {Object} Updated card with history entry
 */
export function addToHistory(card, quality, interval) {
  const historyEntry = {
    date: new Date().toISOString().split('T')[0],
    quality,
    interval,
    easinessFactor: card.easinessFactor
  };

  return {
    ...card,
    history: [...(card.history || []), historyEntry]
  };
}

/**
 * Check if a card is due for review
 * @param {Object} card - Card state
 * @returns {boolean} True if card should be reviewed today
 */
export function isCardDue(card) {
  if (!card || !card.nextReviewDate) {
    return true; // New card, due immediately
  }

  const today = new Date().toISOString().split('T')[0];
  return card.nextReviewDate <= today;
}

/**
 * Get the next review interval in a human-readable format
 * @param {number} interval - Days until next review
 * @returns {string} Human-readable interval
 */
export function formatInterval(interval) {
  if (interval === 0) return 'New';
  if (interval === 1) return '1 day';
  if (interval < 30) return `${interval} days`;
  if (interval < 365) {
    const months = Math.round(interval / 30);
    return months === 1 ? '1 month' : `${months} months`;
  }
  const years = Math.round(interval / 365);
  return years === 1 ? '1 year' : `${years} years`;
}
