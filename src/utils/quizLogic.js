/**
 * Quiz Session Logic
 * Handles session setup, card selection, and session flow
 */

import { isCardDue } from './sm2Algorithm';
import { getDueCardIds, getNewCardIds } from './progressStorage';

// Session configuration
export const SESSION_CONFIG = {
  maxCardsPerSession: 30,
  newCardsPerSession: 10,
  reviewPriority: true,      // Review due cards before new cards
  shuffleCards: true,
  showTimer: true,
  autoSaveInterval: 5        // Save progress every 5 cards
};

/**
 * Shuffle array using Fisher-Yates algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled array
 */
export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get cards for a quiz session
 * @param {Object} progress - User progress
 * @param {Array<Object>} allQuestions - All available questions
 * @param {Object} config - Session configuration (optional)
 * @returns {Array<Object>} Session cards
 */
export function getSessionCards(progress, allQuestions, config = SESSION_CONFIG) {
  // Get due card IDs
  const dueCardIds = getDueCardIds(progress);

  // Get new card IDs (never seen)
  const newCardIds = getNewCardIds(progress, allQuestions);

  // Filter questions to get actual question objects
  const dueQuestions = allQuestions.filter(q => dueCardIds.includes(q.id));
  const newQuestions = allQuestions.filter(q => newCardIds.includes(q.id));

  // Build session: prioritize due cards, then add new cards
  let sessionCards = [];

  if (config.reviewPriority) {
    // Add all due cards first
    sessionCards = [...dueQuestions];

    // Add new cards up to limit
    const newCardsToAdd = Math.min(
      config.newCardsPerSession,
      config.maxCardsPerSession - sessionCards.length
    );

    if (newCardsToAdd > 0) {
      sessionCards = [
        ...sessionCards,
        ...newQuestions.slice(0, newCardsToAdd)
      ];
    }
  } else {
    // Mix due and new cards
    const combinedCards = [...dueQuestions, ...newQuestions.slice(0, config.newCardsPerSession)];
    sessionCards = combinedCards.slice(0, config.maxCardsPerSession);
  }

  // Shuffle if configured
  if (config.shuffleCards) {
    sessionCards = shuffleArray(sessionCards);
  }

  return sessionCards;
}

/**
 * Check if answer is correct
 * @param {Object} question - Question object
 * @param {string} userAnswer - User's answer
 * @returns {boolean} True if correct
 */
export function checkAnswer(question, userAnswer) {
  const { type, correctAnswer } = question;

  if (!userAnswer || userAnswer.trim() === '') {
    return false;
  }

  switch (type) {
    case 'mcq':
    case 'truefalse':
      // Exact match (case-insensitive)
      return userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase();

    case 'numerical':
      // Numerical comparison with tolerance
      return validateNumerical(userAnswer, correctAnswer);

    default:
      console.warn(`Unknown question type: ${type}`);
      return false;
  }
}

/**
 * Validate numerical answer with tolerance
 * @param {string} userAnswer - User's answer
 * @param {string} correctAnswer - Correct answer
 * @param {number} tolerance - Percentage tolerance (default 2%)
 * @returns {boolean} True if within tolerance
 */
function validateNumerical(userAnswer, correctAnswer, tolerance = 0.02) {
  // Parse numbers
  const user = parseFloat(userAnswer.trim());
  const correct = parseFloat(correctAnswer);

  // Check if valid numbers
  if (isNaN(user) || isNaN(correct)) {
    return false;
  }

  // Calculate tolerance range
  const diff = Math.abs(user - correct);
  const allowedDiff = Math.abs(correct * tolerance);

  return diff <= allowedDiff;
}

/**
 * Calculate session statistics
 * @param {Array<Object>} reviewedCards - Cards reviewed in session
 * @returns {Object} Session statistics
 */
export function calculateSessionStats(reviewedCards) {
  if (!reviewedCards || reviewedCards.length === 0) {
    return {
      cardsReviewed: 0,
      correctCount: 0,
      accuracy: 0,
      averageQuality: 0,
      newCardsLearned: 0
    };
  }

  const correctCount = reviewedCards.filter(card => card.isCorrect).length;
  const newCardsLearned = reviewedCards.filter(card => card.isNew).length;

  const totalQuality = reviewedCards.reduce((sum, card) => sum + (card.quality || 0), 0);
  const averageQuality = Math.round((totalQuality / reviewedCards.length) * 10) / 10;

  return {
    cardsReviewed: reviewedCards.length,
    correctCount,
    accuracy: Math.round((correctCount / reviewedCards.length) * 100),
    averageQuality,
    newCardsLearned
  };
}

/**
 * Format time duration in minutes and seconds
 * @param {number} seconds - Duration in seconds
 * @returns {string} Formatted time
 */
export function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  if (mins === 0) {
    return `${secs}s`;
  }

  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Get next card index (skip already reviewed)
 * @param {number} currentIndex - Current card index
 * @param {Array<Object>} sessionCards - All session cards
 * @param {Set} reviewedIndices - Set of reviewed card indices
 * @returns {number} Next card index or -1 if session complete
 */
export function getNextCardIndex(currentIndex, sessionCards, reviewedIndices) {
  for (let i = currentIndex + 1; i < sessionCards.length; i++) {
    if (!reviewedIndices.has(i)) {
      return i;
    }
  }

  // Check from beginning
  for (let i = 0; i < currentIndex; i++) {
    if (!reviewedIndices.has(i)) {
      return i;
    }
  }

  return -1; // All cards reviewed
}

/**
 * Group questions by topic
 * @param {Array<Object>} questions - Questions array
 * @returns {Object} Questions grouped by topic
 */
export function groupByTopic(questions) {
  return questions.reduce((groups, question) => {
    const topic = question.topic || 'Other';
    if (!groups[topic]) {
      groups[topic] = [];
    }
    groups[topic].push(question);
    return groups;
  }, {});
}

/**
 * Group questions by spec section
 * @param {Array<Object>} questions - Questions array
 * @returns {Object} Questions grouped by spec section
 */
export function groupBySpecSection(questions) {
  return questions.reduce((groups, question) => {
    const section = question.specSection || 'Unknown';
    if (!groups[section]) {
      groups[section] = [];
    }
    groups[section].push(question);
    return groups;
  }, {});
}

/**
 * Get performance by topic
 * @param {Object} progress - User progress
 * @param {Array<Object>} allQuestions - All questions
 * @returns {Object} Topic performance stats
 */
export function getTopicPerformance(progress, allQuestions) {
  const topicStats = {};

  for (const question of allQuestions) {
    const cardData = progress.cards[question.id];
    if (!cardData) continue;

    const topic = question.topic || 'Other';
    if (!topicStats[topic]) {
      topicStats[topic] = {
        attempted: 0,
        correct: 0,
        totalQuality: 0,
        averageEF: 0
      };
    }

    topicStats[topic].attempted += cardData.history?.length || 0;

    // Count correct answers (quality >= 3)
    if (cardData.history) {
      topicStats[topic].correct += cardData.history.filter(h => h.quality >= 3).length;
      topicStats[topic].totalQuality += cardData.history.reduce((sum, h) => sum + h.quality, 0);
    }

    topicStats[topic].averageEF += cardData.easinessFactor || 2.5;
  }

  // Calculate averages
  for (const topic in topicStats) {
    const stats = topicStats[topic];
    const questionCount = allQuestions.filter(q => q.topic === topic && progress.cards[q.id]).length;

    if (questionCount > 0) {
      stats.averageEF = Math.round((stats.averageEF / questionCount) * 100) / 100;
    }

    stats.accuracy = stats.attempted > 0
      ? Math.round((stats.correct / stats.attempted) * 100)
      : 0;

    stats.averageQuality = stats.attempted > 0
      ? Math.round((stats.totalQuality / stats.attempted) * 10) / 10
      : 0;
  }

  return topicStats;
}
