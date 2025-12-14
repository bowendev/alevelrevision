// Tutors Data with Trust Signals
export const tutors = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
    subjects: ['Mathematics', 'Physics'],
    subjectIds: ['maths', 'physics'],
    qualifications: [
      'BSc Mathematics (First Class), University of Manchester',
      'PGCE Secondary Mathematics',
      'A* at A-Level Maths and Further Maths'
    ],
    gcseGrades: 'Achieved 9s in Maths and Physics',
    experience: '6 years',
    examBoards: ['AQA', 'Edexcel', 'OCR'],
    bio: "Hi! I'm Sarah, and I absolutely love making maths click for students. I remember struggling with algebra when I was younger, so I know exactly how frustrating it can feel. My approach is all about breaking things down into simple steps and building your confidence one topic at a time. I've helped over 200 students improve their grades, and I'd love to help you too!",
    trustSignals: {
      dbsChecked: true,
      dbsDate: 'January 2024',
      references: true,
      safeguardingTrained: true,
      onlineTeachingCertified: true
    },
    availability: 'Weekday evenings and weekends',
    rating: 4.9,
    reviewCount: 127,
    featured: true
  },
  {
    id: 2,
    name: 'James Okonkwo',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    subjects: ['Biology', 'Chemistry', 'Combined Science'],
    subjectIds: ['biology', 'chemistry', 'combined-science'],
    qualifications: [
      'MSc Biochemistry, Imperial College London',
      'BSc Biology (2:1), UCL',
      'Currently training as a secondary science teacher'
    ],
    gcseGrades: 'Achieved A*s in Biology, Chemistry, and Physics',
    experience: '4 years',
    examBoards: ['AQA', 'Edexcel', 'OCR Gateway'],
    bio: "Science is everywhere, and I'm passionate about helping students see how amazing it really is! I specialise in making complex topics like genetics and organic chemistry feel manageable. I use lots of diagrams, real-world examples, and past paper practice to help you understand and remember key concepts. Let's make science your strength!",
    trustSignals: {
      dbsChecked: true,
      dbsDate: 'March 2024',
      references: true,
      safeguardingTrained: true,
      onlineTeachingCertified: true
    },
    availability: 'Flexible - including weekday daytime',
    rating: 4.8,
    reviewCount: 89,
    featured: true
  },
  {
    id: 3,
    name: 'Emma Richardson',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    subjects: ['English Language', 'English Literature'],
    subjectIds: ['english-language', 'english-literature'],
    qualifications: [
      'MA English Literature, University of Oxford',
      'BA English (First Class), Durham University',
      'Former GCSE examiner for AQA'
    ],
    gcseGrades: 'Achieved A*s in English Language and Literature',
    experience: '8 years',
    examBoards: ['AQA', 'Edexcel', 'WJEC', 'OCR'],
    bio: "As a former GCSE examiner, I know exactly what examiners are looking for in your answers. I'll teach you how to analyse texts effectively, structure your essays for top marks, and find your voice in creative writing. Whether you're studying Macbeth or tackling unseen poetry, I'll give you the tools and confidence to succeed.",
    trustSignals: {
      dbsChecked: true,
      dbsDate: 'November 2023',
      references: true,
      safeguardingTrained: true,
      onlineTeachingCertified: true,
      examinerExperience: true
    },
    availability: 'Weekday evenings',
    rating: 5.0,
    reviewCount: 203,
    featured: true
  },
  {
    id: 4,
    name: 'Dr. Amir Patel',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    subjects: ['Mathematics', 'Computer Science'],
    subjectIds: ['maths', 'computer-science'],
    qualifications: [
      'PhD Computer Science, University of Cambridge',
      'MEng Computer Science (First Class), Imperial College',
      'Professional software developer'
    ],
    gcseGrades: 'Achieved A*s in Maths and triple science',
    experience: '5 years tutoring',
    examBoards: ['AQA', 'OCR', 'Edexcel'],
    bio: "I work as a software developer during the day and love sharing my passion for computing and maths with GCSE students. I'll help you understand programming concepts through practical, hands-on projects and make sure you're confident with algorithms and theory too. My students often tell me I make coding feel less scary!",
    trustSignals: {
      dbsChecked: true,
      dbsDate: 'February 2024',
      references: true,
      safeguardingTrained: true,
      onlineTeachingCertified: true
    },
    availability: 'Evenings and weekends',
    rating: 4.9,
    reviewCount: 67,
    featured: false
  },
  {
    id: 5,
    name: 'Sophie Laurent',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
    subjects: ['French', 'Spanish'],
    subjectIds: ['french', 'spanish'],
    qualifications: [
      'BA Modern Languages (First Class), University of Leeds',
      'Native French speaker',
      'Lived in Spain for 3 years'
    ],
    gcseGrades: 'Achieved A*s in French and Spanish',
    experience: '5 years',
    examBoards: ['AQA', 'Edexcel', 'OCR'],
    bio: "Bonjour! Hola! I grew up speaking French at home and fell in love with Spanish during my time living in Barcelona. I know that language exams can feel daunting, especially the speaking component, but I'll help you build real confidence. We'll practise conversation, nail your grammar, and make sure you're ready for every part of the exam.",
    trustSignals: {
      dbsChecked: true,
      dbsDate: 'December 2023',
      references: true,
      safeguardingTrained: true,
      onlineTeachingCertified: true
    },
    availability: 'Weekday afternoons and evenings',
    rating: 4.8,
    reviewCount: 94,
    featured: false
  },
  {
    id: 6,
    name: 'Michael Thompson',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
    subjects: ['History', 'Geography'],
    subjectIds: ['history', 'geography'],
    qualifications: [
      'MA History, University of Edinburgh',
      'BA History and Politics (2:1), University of York',
      'QTS qualified teacher'
    ],
    gcseGrades: 'Achieved A*s in History and Geography',
    experience: '7 years',
    examBoards: ['AQA', 'Edexcel', 'OCR'],
    bio: "History and geography aren't just about memorising dates and maps – they're about understanding how the world works! I'll help you develop your source analysis skills, write compelling essays, and remember key facts using techniques that actually stick. I've been teaching in schools for years and know exactly how to help you succeed.",
    trustSignals: {
      dbsChecked: true,
      dbsDate: 'August 2023',
      references: true,
      safeguardingTrained: true,
      onlineTeachingCertified: true,
      qtsQualified: true
    },
    availability: 'Weekends and school holidays',
    rating: 4.7,
    reviewCount: 156,
    featured: false
  },
  {
    id: 7,
    name: 'Dr. Rachel Kim',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
    subjects: ['Physics', 'Mathematics'],
    subjectIds: ['physics', 'maths'],
    qualifications: [
      'PhD Physics, University of Bristol',
      'MPhys Physics (First Class), University of Manchester',
      'Former school physics teacher'
    ],
    gcseGrades: 'Achieved A*s in Maths and Physics',
    experience: '9 years',
    examBoards: ['AQA', 'Edexcel', 'OCR'],
    bio: "Physics was always my favourite subject, and now I get to share that love with my students! I specialise in helping students who find physics equations intimidating. Together, we'll break down each concept, practise lots of exam questions, and build your confidence step by step. No question is too basic – I'm here to help!",
    trustSignals: {
      dbsChecked: true,
      dbsDate: 'October 2023',
      references: true,
      safeguardingTrained: true,
      onlineTeachingCertified: true,
      qtsQualified: true
    },
    availability: 'Flexible availability',
    rating: 4.9,
    reviewCount: 178,
    featured: true
  },
  {
    id: 8,
    name: 'Tom Williams',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face',
    subjects: ['Chemistry', 'Biology'],
    subjectIds: ['chemistry', 'biology'],
    qualifications: [
      'MChem Chemistry, University of Oxford',
      'Currently studying medicine',
      'Worked as a lab demonstrator'
    ],
    gcseGrades: 'Achieved 9s in all sciences',
    experience: '3 years',
    examBoards: ['AQA', 'Edexcel', 'OCR'],
    bio: "I'm currently studying medicine and tutor because I remember how stressful GCSEs can be! I got 9s in all my sciences and developed loads of revision techniques that I'm excited to share with you. I focus on understanding rather than memorising, and I'll help you see the connections between different topics.",
    trustSignals: {
      dbsChecked: true,
      dbsDate: 'January 2024',
      references: true,
      safeguardingTrained: true,
      onlineTeachingCertified: true
    },
    availability: 'Weekends and university holidays',
    rating: 4.8,
    reviewCount: 45,
    featured: false
  }
];

export const getTutorById = (id) => {
  return tutors.find(tutor => tutor.id === parseInt(id));
};

export const getTutorsBySubject = (subjectId) => {
  return tutors.filter(tutor => tutor.subjectIds.includes(subjectId));
};

export const getFeaturedTutors = () => {
  return tutors.filter(tutor => tutor.featured);
};
