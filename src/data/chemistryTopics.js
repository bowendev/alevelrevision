// AQA A-Level Chemistry 7405 Specification Topics
export const chemistryTopics = {
  physical: {
    topicId: 'physical',
    topicName: 'Physical Chemistry',
    colour: '#F59E0B',
    icon: '⚗️',
    specSections: [
      { code: '1.1', name: 'Atomic structure' },
      { code: '1.2', name: 'Amount of substance' },
      { code: '1.3', name: 'Bonding' },
      { code: '1.4', name: 'Energetics' },
      { code: '1.5', name: 'Kinetics' },
      { code: '1.6', name: 'Chemical equilibria, Le Chatelier\'s principle and Kc' },
      { code: '1.7', name: 'Oxidation, reduction and redox equations' },
      { code: '1.8', name: 'Thermodynamics' },
      { code: '1.9', name: 'Rate equations' },
      { code: '1.10', name: 'Equilibrium constant Kp for homogeneous systems' },
      { code: '1.11', name: 'Electrode potentials and electrochemical cells' },
      { code: '1.12', name: 'Acids and bases' }
    ],
    totalQuestions: 50
  },

  inorganic: {
    topicId: 'inorganic',
    topicName: 'Inorganic Chemistry',
    colour: '#3B82F6',
    icon: '🧪',
    specSections: [
      { code: '2.1', name: 'Periodicity' },
      { code: '2.2', name: 'Group 2, the alkaline earth metals' },
      { code: '2.3', name: 'Group 7(17), the halogens' },
      { code: '2.4', name: 'Properties of Period 3 elements and their oxides' },
      { code: '2.5', name: 'Transition metals' },
      { code: '2.6', name: 'Reactions of ions in aqueous solution' }
    ],
    totalQuestions: 50
  },

  organic: {
    topicId: 'organic',
    topicName: 'Organic Chemistry',
    colour: '#10B981',
    icon: '🌿',
    specSections: [
      { code: '3.1', name: 'Introduction to organic chemistry' },
      { code: '3.2', name: 'Alkanes' },
      { code: '3.3', name: 'Halogenoalkanes' },
      { code: '3.4', name: 'Alkenes' },
      { code: '3.5', name: 'Alcohols' },
      { code: '3.6', name: 'Organic analysis' },
      { code: '3.7', name: 'Optical isomerism' },
      { code: '3.8', name: 'Aldehydes and ketones' },
      { code: '3.9', name: 'Carboxylic acids and derivatives' },
      { code: '3.10', name: 'Aromatic chemistry' },
      { code: '3.11', name: 'Amines' },
      { code: '3.12', name: 'Polymers' },
      { code: '3.13', name: 'Amino acids, proteins and DNA' },
      { code: '3.14', name: 'Organic synthesis' },
      { code: '3.15', name: 'Nuclear magnetic resonance spectroscopy' },
      { code: '3.16', name: 'Chromatography' }
    ],
    totalQuestions: 50
  }
};

// Helper functions
export const getAllTopics = () => {
  return Object.values(chemistryTopics);
};

export const getTopicById = (topicId) => {
  return chemistryTopics[topicId];
};

export const getSpecSection = (code) => {
  for (const topic of Object.values(chemistryTopics)) {
    const section = topic.specSections.find(s => s.code === code);
    if (section) {
      return { ...section, topic: topic.topicName, colour: topic.colour };
    }
  }
  return null;
};

export const getTotalQuestions = () => {
  return Object.values(chemistryTopics).reduce((sum, topic) => sum + topic.totalQuestions, 0);
};
