import { useState, useEffect, useRef } from 'react';
import { chemistryQuestions } from '../data/chemistryQuestions';
import { loadProgress, saveProgress, updateSessionStats } from '../utils/progressStorage';
import { getSessionCards, checkAnswer, calculateSessionStats } from '../utils/quizLogic';
import { calculateNextReview, initializeCard, addToHistory } from '../utils/sm2Algorithm';
import QuizIntro from '../components/quiz/QuizIntro';
import QuizProgress from '../components/quiz/QuizProgress';
import QuizCard from '../components/quiz/QuizCard';
import DifficultyButtons from '../components/quiz/DifficultyButtons';
import SessionComplete from '../components/quiz/SessionComplete';
import QuizStats from '../components/quiz/QuizStats';

function ChemistryQuiz() {
  // User and session state
  const [username, setUsername] = useState('');
  const [userProgress, setUserProgress] = useState(null);
  const [showIntro, setShowIntro] = useState(true);
  const [showStats, setShowStats] = useState(false);

  // Session state
  const [sessionCards, setSessionCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionStartTime, setSessionStartTime] = useState(null);
  const [reviewedCards, setReviewedCards] = useState([]);

  // Current card state
  const [userAnswer, setUserAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showDifficultyButtons, setShowDifficultyButtons] = useState(false);

  // Track if session has been saved (to prevent multiple saves)
  const sessionSavedRef = useRef(false);

  const currentCard = sessionCards[currentIndex];
  const isSessionComplete = currentIndex >= sessionCards.length;

  // Handle username submission and start session
  const handleStartSession = (submittedUsername) => {
    setUsername(submittedUsername);
    const progress = loadProgress(submittedUsername);
    setUserProgress(progress);

    // Get cards for this session
    const cards = getSessionCards(progress, chemistryQuestions);
    setSessionCards(cards);
    setSessionStartTime(Date.now());
    setShowIntro(false);
  };

  // Handle answer submission
  const handleSubmitAnswer = () => {
    if (!currentCard || !userAnswer.trim()) return;

    const correct = checkAnswer(currentCard, userAnswer);
    setIsCorrect(correct);
    setShowFeedback(true);
    setShowDifficultyButtons(true);
  };

  // Handle difficulty rating (SM-2)
  const handleDifficultyRating = (quality) => {
    if (!currentCard) return;

    // Get or create card data
    const existingCard = userProgress.cards[currentCard.id] || initializeCard(currentCard.id);

    // Calculate next review using SM-2
    const updatedCard = calculateNextReview(existingCard, quality);

    // Add to history
    const cardWithHistory = addToHistory(updatedCard, quality, updatedCard.interval);

    // Update progress
    const newProgress = { ...userProgress };
    newProgress.cards[currentCard.id] = cardWithHistory;

    // Track reviewed card for session stats
    const reviewedCard = {
      questionId: currentCard.id,
      isCorrect,
      quality,
      isNew: !existingCard.lastReviewed
    };

    const newReviewedCards = [...reviewedCards, reviewedCard];
    setReviewedCards(newReviewedCards);

    // Auto-save every 5 cards
    if (newReviewedCards.length % 5 === 0) {
      saveProgress(newProgress);
    }

    setUserProgress(newProgress);

    // Move to next card
    setCurrentIndex(currentIndex + 1);
    setUserAnswer('');
    setShowFeedback(false);
    setShowDifficultyButtons(false);
    setIsCorrect(false);
  };

  // Handle session completion
  useEffect(() => {
    if (isSessionComplete && sessionCards.length > 0 && userProgress && !sessionSavedRef.current) {
      // Mark as saved to prevent multiple saves
      sessionSavedRef.current = true;

      // Calculate session stats
      const sessionDuration = Math.round((Date.now() - sessionStartTime) / 1000 / 60); // minutes
      const sessionStats = calculateSessionStats(reviewedCards);

      // Update progress with session data
      const updatedProgress = updateSessionStats(userProgress, {
        ...sessionStats,
        sessionDuration
      });

      saveProgress(updatedProgress);
      setUserProgress(updatedProgress);
    }
  }, [isSessionComplete, sessionCards.length, userProgress, sessionStartTime, reviewedCards]);

  // Show stats page
  const handleShowStats = () => {
    setShowStats(true);
  };

  const handleBackToQuiz = () => {
    setShowStats(false);
  };

  const handleNewSession = () => {
    const cards = getSessionCards(userProgress, chemistryQuestions);
    setSessionCards(cards);
    setCurrentIndex(0);
    setReviewedCards([]);
    setSessionStartTime(Date.now());
    setShowStats(false);
    sessionSavedRef.current = false; // Reset for new session
  };

  // Render intro screen
  if (showIntro) {
    return <QuizIntro onStart={handleStartSession} />;
  }

  // Render stats page
  if (showStats) {
    return (
      <QuizStats
        progress={userProgress}
        allQuestions={chemistryQuestions}
        onBack={handleBackToQuiz}
        onNewSession={handleNewSession}
      />
    );
  }

  // Render session complete
  if (isSessionComplete) {
    const sessionDuration = Math.round((Date.now() - sessionStartTime) / 1000 / 60);
    const sessionStats = calculateSessionStats(reviewedCards);

    return (
      <SessionComplete
        sessionStats={sessionStats}
        sessionDuration={sessionDuration}
        onNewSession={handleNewSession}
        onViewStats={handleShowStats}
      />
    );
  }

  // Render quiz interface
  return (
    <main className="quiz-main">
      <QuizProgress
        currentIndex={currentIndex}
        totalCards={sessionCards.length}
        reviewedToday={reviewedCards.length}
        dueCards={userProgress ? Object.values(userProgress.cards).filter(c => {
          const today = new Date().toISOString().split('T')[0];
          return c.nextReviewDate <= today;
        }).length : 0}
        onShowStats={handleShowStats}
      />

      <section className="section">
        <div className="container quiz-container">
          <QuizCard
            question={currentCard}
            userAnswer={userAnswer}
            onAnswerChange={setUserAnswer}
            onSubmit={handleSubmitAnswer}
            showFeedback={showFeedback}
            isCorrect={isCorrect}
          />

          {showDifficultyButtons && (
            <DifficultyButtons
              onRate={handleDifficultyRating}
              isCorrect={isCorrect}
            />
          )}
        </div>
      </section>
    </main>
  );
}

export default ChemistryQuiz;
