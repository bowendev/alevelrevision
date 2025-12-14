/**
 * Progress Storage Utility
 * Handles saving and loading user progress to/from localStorage
 */

const STORAGE_PREFIX = 'chemistry_quiz_';
const STORAGE_VERSION = '1.0';

/**
 * Create initial progress structure for a new user
 * @param {string} username - Username
 * @returns {Object} Initial progress object
 */
export function createNewProgress(username) {
  return {
    username,
    version: STORAGE_VERSION,
    created: new Date().toISOString(),
    lastSession: null,

    stats: {
      totalAttempts: 0,
      correctAnswers: 0,
      correctRate: 0,
      currentStreak: 0,
      longestStreak: 0,
      totalSessionTime: 0,      // minutes
      averageSessionLength: 0,  // minutes
      totalSessionsCompleted: 0
    },

    cards: {},  // Key: questionId, Value: card SM-2 data

    sessions: []  // Array of session summaries
  };
}

/**
 * Load user progress from localStorage
 * @param {string} username - Username
 * @returns {Object} User progress or new progress if not found
 */
export function loadProgress(username) {
  try {
    const key = `${STORAGE_PREFIX}${username}`;
    const data = localStorage.getItem(key);

    if (!data) {
      return createNewProgress(username);
    }

    const progress = JSON.parse(data);

    // Version migration if needed
    if (!progress.version || progress.version !== STORAGE_VERSION) {
      console.warn('Progress version mismatch, migrating...');
      return migrateProgress(progress, username);
    }

    return progress;
  } catch (error) {
    console.error('Error loading progress:', error);
    return createNewProgress(username);
  }
}

/**
 * Save user progress to localStorage
 * @param {Object} progress - Progress object
 * @returns {boolean} True if save successful
 */
export function saveProgress(progress) {
  try {
    const key = `${STORAGE_PREFIX}${progress.username}`;
    const data = JSON.stringify(progress);
    localStorage.setItem(key, data);
    return true;
  } catch (error) {
    console.error('Error saving progress:', error);

    // Check if quota exceeded
    if (error.name === 'QuotaExceededError') {
      console.error('localStorage quota exceeded. Consider clearing old data.');
    }

    return false;
  }
}

/**
 * Get all saved usernames
 * @returns {Array<string>} Array of usernames
 */
export function getAllUsernames() {
  const usernames = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(STORAGE_PREFIX)) {
      const username = key.substring(STORAGE_PREFIX.length);
      usernames.push(username);
    }
  }

  return usernames.sort();
}

/**
 * Delete user progress
 * @param {string} username - Username
 * @returns {boolean} True if deleted successfully
 */
export function deleteProgress(username) {
  try {
    const key = `${STORAGE_PREFIX}${username}`;
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error deleting progress:', error);
    return false;
  }
}

/**
 * Update stats after a session
 * @param {Object} progress - Progress object
 * @param {Object} sessionData - Session summary data
 * @returns {Object} Updated progress
 */
export function updateSessionStats(progress, sessionData) {
  const {
    cardsReviewed = 0,
    correctCount = 0,
    sessionDuration = 0,  // minutes
    newCardsLearned = 0
  } = sessionData;

  const newProgress = { ...progress };

  // Update overall stats
  newProgress.stats.totalAttempts += cardsReviewed;
  newProgress.stats.correctAnswers += correctCount;
  newProgress.stats.correctRate = newProgress.stats.totalAttempts > 0
    ? Math.round((newProgress.stats.correctAnswers / newProgress.stats.totalAttempts) * 1000) / 1000
    : 0;

  // Update streak
  if (cardsReviewed > 0) {
    const sessionAccuracy = correctCount / cardsReviewed;
    if (sessionAccuracy >= 0.7) {  // 70% threshold for maintaining streak
      newProgress.stats.currentStreak += 1;
      if (newProgress.stats.currentStreak > newProgress.stats.longestStreak) {
        newProgress.stats.longestStreak = newProgress.stats.currentStreak;
      }
    } else {
      newProgress.stats.currentStreak = 0;  // Break streak
    }
  }

  // Update time stats
  newProgress.stats.totalSessionTime += sessionDuration;
  newProgress.stats.totalSessionsCompleted += 1;
  newProgress.stats.averageSessionLength = Math.round(
    newProgress.stats.totalSessionTime / newProgress.stats.totalSessionsCompleted
  );

  // Update last session date
  newProgress.lastSession = new Date().toISOString();

  // Add session to history
  newProgress.sessions.push({
    date: new Date().toISOString().split('T')[0],
    timestamp: new Date().toISOString(),
    cardsReviewed,
    newCards: newCardsLearned,
    correctCount,
    accuracy: Math.round((correctCount / cardsReviewed) * 100),
    duration: sessionDuration,
    averageQuality: sessionData.averageQuality || 0
  });

  // Keep only last 100 sessions to avoid storage bloat
  if (newProgress.sessions.length > 100) {
    newProgress.sessions = newProgress.sessions.slice(-100);
  }

  return newProgress;
}

/**
 * Get cards due for review today
 * @param {Object} progress - Progress object
 * @returns {Array<string>} Array of question IDs
 */
export function getDueCardIds(progress) {
  const today = new Date().toISOString().split('T')[0];
  const dueCards = [];

  for (const [questionId, cardData] of Object.entries(progress.cards)) {
    if (cardData.nextReviewDate <= today) {
      dueCards.push(questionId);
    }
  }

  return dueCards;
}

/**
 * Get new cards (never reviewed)
 * @param {Object} progress - Progress object
 * @param {Array<Object>} allQuestions - All available questions
 * @returns {Array<string>} Array of question IDs
 */
export function getNewCardIds(progress, allQuestions) {
  return allQuestions
    .filter(q => !progress.cards[q.id])
    .map(q => q.id);
}

/**
 * Migrate progress from old version to current
 * @param {Object} oldProgress - Old progress object
 * @param {string} username - Username
 * @returns {Object} Migrated progress
 */
function migrateProgress(oldProgress, username) {
  const newProgress = createNewProgress(username);

  // Copy over data that exists
  if (oldProgress.stats) {
    newProgress.stats = { ...newProgress.stats, ...oldProgress.stats };
  }

  if (oldProgress.cards) {
    newProgress.cards = oldProgress.cards;
  }

  if (oldProgress.sessions) {
    newProgress.sessions = oldProgress.sessions;
  }

  // Save migrated version
  saveProgress(newProgress);

  return newProgress;
}

/**
 * Export progress as JSON for backup
 * @param {string} username - Username
 * @returns {string} JSON string
 */
export function exportProgress(username) {
  const progress = loadProgress(username);
  return JSON.stringify(progress, null, 2);
}

/**
 * Import progress from JSON backup
 * @param {string} jsonData - JSON string
 * @returns {boolean} True if import successful
 */
export function importProgress(jsonData) {
  try {
    const progress = JSON.parse(jsonData);
    if (!progress.username) {
      throw new Error('Invalid progress data: missing username');
    }
    return saveProgress(progress);
  } catch (error) {
    console.error('Error importing progress:', error);
    return false;
  }
}
