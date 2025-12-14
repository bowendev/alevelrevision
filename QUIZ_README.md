# Chemistry Quiz Feature - Documentation

## Overview

The Chemistry Quiz is a spaced repetition learning system for AQA A-Level Chemistry, using the proven SM-2 algorithm (the same algorithm used by Anki) to optimize long-term retention.

## Features

### 1. Spaced Repetition Learning (SM-2 Algorithm)
- Questions are scheduled for review at optimal intervals based on your performance
- The system tracks your "easiness factor" for each question
- Cards you struggle with appear more frequently
- Cards you know well appear at increasing intervals (days → weeks → months)

### 2. Multiple Question Types
- **Multiple Choice Questions (MCQ)**: Select from 4 options (A, B, C, D)
- **Numerical Questions**: Enter numerical answers with tolerance for rounding
- **True/False Questions**: Simple binary choice questions

### 3. Confidence-Based Learning
After answering each question, rate your confidence:
- **Again** (0): Show immediately - you need more practice
- **Hard** (3): Correct but difficult - review soon
- **Good** (4): Correct with some hesitation - standard interval
- **Easy** (5): Perfect recall - longer interval

### 4. Progress Tracking
- **Session Stats**: Track accuracy, cards reviewed, and time spent
- **Overall Stats**: Monitor long-term performance across all sessions
- **Topic Performance**: See which chemistry topics you excel at
- **Streak Tracking**: Build and maintain learning streaks

### 5. LocalStorage Persistence
- All progress is saved locally in your browser
- Multiple users can use the same device (username-based)
- No account creation required
- Export/import functionality for backups

## How to Use

### Getting Started
1. Navigate to `/quiz/chemistry` in your browser
2. Enter a username (or select an existing one)
3. Click "Start Quiz Session"

### During a Quiz Session
1. **Read the question** - Pay attention to the spec section badge
2. **Select or enter your answer**:
   - MCQ: Click the option button
   - Numerical: Type your answer
   - True/False: Click True or False
3. **Submit** - Click "Submit Answer" or press Enter (numerical questions)
4. **Review feedback** - Read the explanation and working steps
5. **Rate your confidence** - Choose Again, Hard, Good, or Easy
6. **Repeat** - Continue until all cards are reviewed

### Session Configuration
Default settings (in `src/utils/quizLogic.js`):
- **Max cards per session**: 30
- **New cards per session**: 10
- **Auto-save interval**: Every 5 cards
- **Review priority**: Due cards before new cards
- **Shuffle**: Cards are randomized

## Technical Implementation

### File Structure
```
src/
├── pages/
│   └── ChemistryQuiz.jsx          # Main quiz page component
├── components/quiz/
│   ├── QuizIntro.jsx              # Welcome screen
│   ├── QuizCard.jsx               # Question display
│   ├── DifficultyButtons.jsx      # Confidence rating buttons
│   ├── QuizProgress.jsx           # Progress bar and stats
│   ├── SessionComplete.jsx        # Session summary
│   └── QuizStats.jsx              # Detailed statistics
├── utils/
│   ├── sm2Algorithm.js            # Spaced repetition logic
│   ├── progressStorage.js         # LocalStorage management
│   └── quizLogic.js               # Session and answer checking
└── data/
    ├── chemistryQuestions.js      # Question database
    └── chemistryTopics.js         # Topic metadata
```

### Key Algorithms

#### SM-2 Algorithm (Simplified)
```javascript
// Quality ratings: 0-5
// 0 = Again, 3 = Hard, 4 = Good, 5 = Easy

// Intervals:
// First review: 1 day
// Second review: 6 days
// Subsequent: previous_interval × easiness_factor

// Easiness Factor (EF):
// Starting EF = 2.5
// Updated based on quality rating
// Minimum EF = 1.3
```

#### Answer Validation
- **MCQ/True-False**: Exact match (case-insensitive)
- **Numerical**: ±2% tolerance for rounding errors

### Data Structure

#### Question Format
```javascript
{
  id: 'phys-1.2-001',
  topic: 'Physical Chemistry',
  specSection: '1.2 Amount of substance',
  type: 'numerical', // or 'mcq' or 'truefalse'
  difficulty: 'foundation', // or 'higher'
  question: 'Calculate the number of moles...',
  correctAnswer: '1.0',
  options: ['A', 'B', 'C', 'D'], // MCQ only
  explanation: 'Detailed explanation...',
  workingSteps: ['Step 1...', 'Step 2...'],
  tags: ['moles', 'Mr', 'calculation']
}
```

#### Progress Storage
```javascript
{
  username: 'john_smith',
  version: '1.0',
  created: '2025-01-15T10:30:00.000Z',
  lastSession: '2025-01-15T11:00:00.000Z',

  stats: {
    totalAttempts: 150,
    correctAnswers: 120,
    correctRate: 0.8,
    currentStreak: 5,
    longestStreak: 12,
    totalSessionTime: 180, // minutes
    averageSessionLength: 15,
    totalSessionsCompleted: 12
  },

  cards: {
    'phys-1.2-001': {
      questionId: 'phys-1.2-001',
      interval: 6,
      repetitions: 2,
      easinessFactor: 2.6,
      nextReviewDate: '2025-01-20',
      lastReviewed: '2025-01-14',
      quality: 4,
      history: [...]
    }
  },

  sessions: [...]
}
```

## Current Question Coverage

The quiz currently includes **20 sample questions** covering:

### Physical Chemistry (10 questions)
- 1.2 Amount of substance (8 questions)
- 1.3 Bonding (1 question)
- 1.4 Energetics (1 question)

### Inorganic Chemistry (4 questions)
- 2.1 Periodicity (2 questions)
- 2.2 Group 2 (1 question)
- 2.3 Group 7 (1 question)

### Organic Chemistry (6 questions)
- 3.2 Alkanes (2 questions)
- 3.4 Alkenes (2 questions)

**Note**: The full implementation is designed to support 150 questions covering all AQA A-Level Chemistry specification sections.

## Browser Compatibility

- **Chrome/Edge**: Full support
- **Firefox**: Full support
- **Safari**: Full support (iOS 10+)
- **LocalStorage required**: Quiz will not work in private/incognito mode

## Performance Optimization

- Auto-save every 5 cards (configurable)
- Session history limited to last 100 sessions
- Efficient card selection algorithm
- Minimal re-renders using React best practices

## Accessibility Features

- Keyboard navigation support
- Focus-visible indicators
- Color contrast meets WCAG AA standards
- Screen reader friendly (ARIA labels)
- Reduced motion support

## Future Enhancements

Potential improvements:
1. Add remaining 130 questions to reach 150 total
2. Topic filtering (select specific chemistry topics)
3. Difficulty filtering (foundation vs higher tier)
4. Export progress as JSON for backup
5. Import questions from external sources
6. Dark mode support
7. Mobile app wrapper (PWA)
8. Cloud sync (optional authentication)
9. Study reminders/notifications
10. Performance charts and trends

## Troubleshooting

### Progress Not Saving
- Check browser's localStorage is enabled
- Not in private/incognito mode
- Check browser console for errors
- Try different username

### Questions Not Appearing
- Verify `chemistryQuestions.js` has questions
- Check console for import errors
- Ensure all new cards haven't been completed

### Incorrect Answer Validation
- Numerical: Check ±2% tolerance setting
- MCQ: Answers are case-insensitive
- Check question's `correctAnswer` field

## License

This quiz system is part of the GCSEHub tutoring platform.

## Credits

- **SM-2 Algorithm**: Based on SuperMemo 2 (1987)
- **Question Content**: Based on AQA A-Level Chemistry specification
- **Design**: Custom UI with accessibility in mind
