// GCSE Subjects Data
export const subjects = [
  {
    id: 'maths',
    name: 'Mathematics',
    icon: '📐',
    colour: '#3B82F6',
    description: 'From algebra to statistics, we help you master every GCSE maths topic with confidence.',
    examBoards: ['AQA', 'Edexcel', 'OCR'],
    topics: [
      'Algebra and equations',
      'Geometry and measures',
      'Statistics and probability',
      'Number and ratio',
      'Graphs and functions'
    ],
    struggles: [
      'Solving quadratic equations',
      'Circle theorems',
      'Trigonometry (SOHCAHTOA)',
      'Algebraic fractions',
      'Simultaneous equations'
    ],
    helpTypes: [
      {
        type: '1-to-1 Tutoring',
        description: 'Personalised sessions focused on your specific weak areas',
        duration: '60 minutes',
        price: 'From £25/hour'
      },
      {
        type: 'Small Group Sessions',
        description: 'Learn with 2-4 other students at a similar level',
        duration: '90 minutes',
        price: 'From £15/hour'
      },
      {
        type: 'Revision Workshops',
        description: 'Intensive exam prep sessions before your GCSEs',
        duration: '3 hours',
        price: 'From £40/session'
      }
    ]
  },
  {
    id: 'english-language',
    name: 'English Language',
    icon: '📝',
    colour: '#8B5CF6',
    description: 'Develop your reading, writing, and analysis skills to excel in English Language GCSE.',
    examBoards: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    topics: [
      'Reading comprehension',
      'Creative writing',
      'Transactional writing',
      'Language analysis',
      'Spoken language'
    ],
    struggles: [
      'Analysing language techniques',
      'Structuring essays effectively',
      'Writing engaging openings',
      'Time management in exams',
      'Using sophisticated vocabulary'
    ],
    helpTypes: [
      {
        type: '1-to-1 Tutoring',
        description: 'Build your confidence with tailored writing and reading support',
        duration: '60 minutes',
        price: 'From £25/hour'
      },
      {
        type: 'Essay Feedback Service',
        description: 'Submit your work and receive detailed written feedback',
        duration: 'Within 48 hours',
        price: 'From £10/essay'
      },
      {
        type: 'Exam Skills Workshop',
        description: 'Master the techniques for each question type',
        duration: '2 hours',
        price: 'From £30/session'
      }
    ]
  },
  {
    id: 'english-literature',
    name: 'English Literature',
    icon: '📚',
    colour: '#EC4899',
    description: 'Explore poetry, plays, and novels with expert guidance for your literature GCSE.',
    examBoards: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    topics: [
      'Shakespeare plays',
      '19th-century novels',
      'Modern texts',
      'Poetry anthology',
      'Unseen poetry'
    ],
    struggles: [
      'Remembering quotes',
      'Writing about context',
      'Analysing poetry techniques',
      'Understanding Shakespeare',
      'Comparing texts effectively'
    ],
    helpTypes: [
      {
        type: '1-to-1 Tutoring',
        description: 'Deep dive into your set texts with an experienced tutor',
        duration: '60 minutes',
        price: 'From £25/hour'
      },
      {
        type: 'Quote Cards & Resources',
        description: 'Curated revision materials for your specific texts',
        duration: 'Digital download',
        price: 'From £5/text'
      },
      {
        type: 'Text Study Groups',
        description: 'Discuss and analyse texts with other students',
        duration: '90 minutes',
        price: 'From £12/session'
      }
    ]
  },
  {
    id: 'biology',
    name: 'Biology',
    icon: '🧬',
    colour: '#10B981',
    description: 'From cells to ecosystems, understand the living world and ace your biology GCSE.',
    examBoards: ['AQA', 'Edexcel', 'OCR'],
    topics: [
      'Cell biology',
      'Organisation',
      'Infection and response',
      'Bioenergetics',
      'Homeostasis',
      'Inheritance and evolution',
      'Ecology'
    ],
    struggles: [
      'Required practicals',
      'Drawing and labelling diagrams',
      'Understanding genetics',
      'Remembering processes (photosynthesis, respiration)',
      'Extended writing questions'
    ],
    helpTypes: [
      {
        type: '1-to-1 Tutoring',
        description: 'Clarify confusing concepts with patient, clear explanations',
        duration: '60 minutes',
        price: 'From £25/hour'
      },
      {
        type: 'Practical Skills Sessions',
        description: 'Prepare for the required practicals with hands-on guidance',
        duration: '90 minutes',
        price: 'From £20/session'
      },
      {
        type: 'Topic Crash Course',
        description: 'Intensive revision on a single topic area',
        duration: '2 hours',
        price: 'From £35/session'
      }
    ]
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: '⚗️',
    colour: '#F59E0B',
    description: 'Master chemical equations, bonding, and reactions for your chemistry GCSE.',
    examBoards: ['AQA', 'Edexcel', 'OCR'],
    topics: [
      'Atomic structure',
      'Bonding and structure',
      'Quantitative chemistry',
      'Chemical changes',
      'Energy changes',
      'Organic chemistry',
      'Chemical analysis'
    ],
    struggles: [
      'Balancing equations',
      'Mole calculations',
      'Understanding bonding types',
      'Organic chemistry nomenclature',
      'Required practical techniques'
    ],
    helpTypes: [
      {
        type: '1-to-1 Tutoring',
        description: 'Work through calculations and concepts at your pace',
        duration: '60 minutes',
        price: 'From £25/hour'
      },
      {
        type: 'Calculation Bootcamp',
        description: 'Master moles, concentrations, and yields',
        duration: '2 hours',
        price: 'From £35/session'
      },
      {
        type: 'Exam Question Practice',
        description: 'Work through past papers with expert guidance',
        duration: '90 minutes',
        price: 'From £20/session'
      }
    ]
  },
  {
    id: 'physics',
    name: 'Physics',
    icon: '⚡',
    colour: '#6366F1',
    description: 'Understand forces, energy, and the universe with clear physics tutoring.',
    examBoards: ['AQA', 'Edexcel', 'OCR'],
    topics: [
      'Energy',
      'Electricity',
      'Particle model of matter',
      'Atomic structure',
      'Forces',
      'Waves',
      'Magnetism and electromagnetism'
    ],
    struggles: [
      'Using and rearranging equations',
      'Circuit calculations',
      'Understanding forces and motion',
      'Required practicals',
      'Multi-step calculation questions'
    ],
    helpTypes: [
      {
        type: '1-to-1 Tutoring',
        description: 'Build problem-solving skills with step-by-step guidance',
        duration: '60 minutes',
        price: 'From £25/hour'
      },
      {
        type: 'Equation Mastery Course',
        description: 'Learn and apply every physics equation confidently',
        duration: '3 x 90 minutes',
        price: 'From £50/course'
      },
      {
        type: 'Small Group Revision',
        description: 'Collaborative exam prep with other students',
        duration: '2 hours',
        price: 'From £15/session'
      }
    ]
  },
  {
    id: 'combined-science',
    name: 'Combined Science',
    icon: '🔬',
    colour: '#14B8A6',
    description: 'Cover all three sciences in one with our comprehensive combined science support.',
    examBoards: ['AQA Trilogy', 'Edexcel', 'OCR Gateway'],
    topics: [
      'Biology topics (cells to ecology)',
      'Chemistry topics (atoms to reactions)',
      'Physics topics (energy to magnetism)',
      'Required practicals across all sciences'
    ],
    struggles: [
      'Covering content across all three sciences',
      'Switching between topics quickly',
      'Required practicals',
      'Time management across papers',
      'Remembering equations and formulas'
    ],
    helpTypes: [
      {
        type: '1-to-1 Tutoring',
        description: 'Focus on your weakest areas across all sciences',
        duration: '60 minutes',
        price: 'From £25/hour'
      },
      {
        type: 'Triple Support Package',
        description: 'Regular sessions covering biology, chemistry, and physics',
        duration: '3 hours/week',
        price: 'From £60/week'
      },
      {
        type: 'Exam Paper Walkthroughs',
        description: 'Work through past papers for all three sciences',
        duration: '2 hours',
        price: 'From £30/session'
      }
    ]
  },
  {
    id: 'history',
    name: 'History',
    icon: '🏛️',
    colour: '#78716C',
    description: 'Analyse sources, understand events, and write compelling history essays.',
    examBoards: ['AQA', 'Edexcel', 'OCR'],
    topics: [
      'Medicine through time',
      'Elizabethan England',
      'Weimar and Nazi Germany',
      'Cold War',
      'Norman England'
    ],
    struggles: [
      'Source analysis techniques',
      'Remembering key dates and events',
      'Structuring extended answers',
      'Evaluating historical significance',
      'Writing balanced arguments'
    ],
    helpTypes: [
      {
        type: '1-to-1 Tutoring',
        description: 'Develop your analysis and essay skills with expert support',
        duration: '60 minutes',
        price: 'From £25/hour'
      },
      {
        type: 'Essay Marking Service',
        description: 'Get detailed feedback on your practice essays',
        duration: 'Within 48 hours',
        price: 'From £10/essay'
      },
      {
        type: 'Source Skills Workshop',
        description: 'Master the techniques for source questions',
        duration: '90 minutes',
        price: 'From £18/session'
      }
    ]
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: '🌍',
    colour: '#059669',
    description: 'Explore physical and human geography with clear explanations and case studies.',
    examBoards: ['AQA', 'Edexcel', 'OCR'],
    topics: [
      'The living world',
      'Physical landscapes in the UK',
      'Urban issues and challenges',
      'The changing economic world',
      'Resource management',
      'Fieldwork'
    ],
    struggles: [
      'Remembering case study details',
      'Interpreting maps and graphs',
      'Extended writing answers',
      'Fieldwork methodology',
      'Linking physical and human geography'
    ],
    helpTypes: [
      {
        type: '1-to-1 Tutoring',
        description: 'Master case studies and geographical skills',
        duration: '60 minutes',
        price: 'From £25/hour'
      },
      {
        type: 'Case Study Cards',
        description: 'Concise revision resources for all your case studies',
        duration: 'Digital download',
        price: 'From £8/set'
      },
      {
        type: 'Skills Workshop',
        description: 'Maps, graphs, and fieldwork techniques',
        duration: '2 hours',
        price: 'From £25/session'
      }
    ]
  },
  {
    id: 'french',
    name: 'French',
    icon: '🇫🇷',
    colour: '#0EA5E9',
    description: 'Build confidence in speaking, writing, reading, and listening in French.',
    examBoards: ['AQA', 'Edexcel', 'OCR'],
    topics: [
      'Identity and culture',
      'Local and international areas',
      'School and future aspirations',
      'Grammar and tenses',
      'Speaking and listening skills'
    ],
    struggles: [
      'Speaking confidently',
      'Using different tenses correctly',
      'Listening comprehension',
      'Remembering vocabulary',
      'Writing extended responses'
    ],
    helpTypes: [
      {
        type: '1-to-1 Tutoring',
        description: 'Practice all four skills with a fluent speaker',
        duration: '60 minutes',
        price: 'From £25/hour'
      },
      {
        type: 'Speaking Practice Sessions',
        description: 'Build confidence before your speaking exam',
        duration: '30 minutes',
        price: 'From £15/session'
      },
      {
        type: 'Grammar Bootcamp',
        description: 'Master French tenses and structures',
        duration: '2 hours',
        price: 'From £30/session'
      }
    ]
  },
  {
    id: 'spanish',
    name: 'Spanish',
    icon: '🇪🇸',
    colour: '#DC2626',
    description: 'Develop your Spanish skills across reading, writing, listening, and speaking.',
    examBoards: ['AQA', 'Edexcel', 'OCR'],
    topics: [
      'Identity and culture',
      'Local and international areas',
      'School and future aspirations',
      'Grammar and verb conjugations',
      'Speaking and listening skills'
    ],
    struggles: [
      'Verb conjugations',
      'Speaking fluently',
      'Listening at pace',
      'Using subjunctive mood',
      'Building varied vocabulary'
    ],
    helpTypes: [
      {
        type: '1-to-1 Tutoring',
        description: 'Personalised support from a fluent Spanish speaker',
        duration: '60 minutes',
        price: 'From £25/hour'
      },
      {
        type: 'Conversation Practice',
        description: 'Regular speaking sessions to build fluency',
        duration: '30 minutes',
        price: 'From £15/session'
      },
      {
        type: 'Verb Mastery Course',
        description: 'Understand and use all Spanish tenses confidently',
        duration: '3 x 60 minutes',
        price: 'From £45/course'
      }
    ]
  },
  {
    id: 'computer-science',
    name: 'Computer Science',
    icon: '💻',
    colour: '#7C3AED',
    description: 'Learn programming, algorithms, and computing theory for GCSE Computer Science.',
    examBoards: ['AQA', 'OCR', 'Edexcel'],
    topics: [
      'Programming (Python)',
      'Data representation',
      'Computer systems',
      'Networks',
      'Algorithms',
      'Cyber security',
      'Ethical and legal issues'
    ],
    struggles: [
      'Writing and debugging code',
      'Understanding binary and hexadecimal',
      'Tracing algorithms',
      'SQL queries',
      'Network protocols'
    ],
    helpTypes: [
      {
        type: '1-to-1 Tutoring',
        description: 'Learn to code with patient, step-by-step guidance',
        duration: '60 minutes',
        price: 'From £28/hour'
      },
      {
        type: 'Programming Projects',
        description: 'Build your skills through practical coding challenges',
        duration: 'Self-paced',
        price: 'From £40/project'
      },
      {
        type: 'Theory Crash Course',
        description: 'Cover all the non-programming content',
        duration: '3 hours',
        price: 'From £45/session'
      }
    ]
  }
];

export const getSubjectById = (id) => {
  return subjects.find(subject => subject.id === id);
};

export const getSubjectsByCategory = () => {
  return {
    core: subjects.filter(s => ['maths', 'english-language', 'english-literature'].includes(s.id)),
    sciences: subjects.filter(s => ['biology', 'chemistry', 'physics', 'combined-science'].includes(s.id)),
    humanities: subjects.filter(s => ['history', 'geography'].includes(s.id)),
    languages: subjects.filter(s => ['french', 'spanish'].includes(s.id)),
    other: subjects.filter(s => ['computer-science'].includes(s.id))
  };
};
