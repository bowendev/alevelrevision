/**
 * AQA A-Level Chemistry Questions
 * 150 questions covering Physical, Inorganic, and Organic Chemistry
 */

// Starting with sample questions - will expand to 150 total
export const chemistryQuestions = [
  // PHYSICAL CHEMISTRY - Topic 1.2: Amount of substance (8 questions)
  {
    id: 'phys-1.2-001',
    topic: 'Physical Chemistry',
    specSection: '1.2 Amount of substance',
    type: 'numerical',
    difficulty: 'foundation',
    question: 'Calculate the number of moles in 44 g of CO₂. (Relative atomic masses: C = 12, O = 16)',
    correctAnswer: '1.0',
    explanation: 'Mr of CO₂ = 12 + (2 × 16) = 44. Moles = mass/Mr = 44/44 = 1.0 mol',
    workingSteps: [
      'Step 1: Calculate Mr of CO₂ = 12 + 16 + 16 = 44',
      'Step 2: Use formula: moles = mass ÷ Mr',
      'Step 3: moles = 44 ÷ 44 = 1.0 mol'
    ],
    tags: ['moles', 'Mr', 'calculation']
  },
  {
    id: 'phys-1.2-002',
    topic: 'Physical Chemistry',
    specSection: '1.2 Amount of substance',
    type: 'mcq',
    difficulty: 'foundation',
    question: 'What is the Avogadro constant?',
    options: ['6.02 × 10²³', '6.02 × 10²²', '1.66 × 10⁻²⁷', '8.31'],
    correctAnswer: '6.02 × 10²³',
    explanation: 'The Avogadro constant (Nₐ) is 6.02 × 10²³ mol⁻¹. This is the number of particles in one mole of a substance.',
    tags: ['Avogadro', 'constant', 'definition']
  },
  {
    id: 'phys-1.2-003',
    topic: 'Physical Chemistry',
    specSection: '1.2 Amount of substance',
    type: 'mcq',
    difficulty: 'higher',
    question: '25.0 cm³ of 0.100 mol dm⁻³ sodium carbonate is neutralised by 20.0 cm³ of hydrochloric acid. What is the concentration of the acid in mol dm⁻³?\n\nNa₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂',
    options: ['0.125', '0.250', '0.500', '1.000'],
    correctAnswer: '0.250',
    explanation: 'Moles of Na₂CO₃ = 0.025 dm³ × 0.100 mol dm⁻³ = 0.0025 mol. From the equation, moles of HCl = 2 × 0.0025 = 0.005 mol. Concentration of HCl = 0.005 mol ÷ 0.020 dm³ = 0.250 mol dm⁻³',
    workingSteps: [
      'Convert volumes to dm³: 25.0 cm³ = 0.025 dm³, 20.0 cm³ = 0.020 dm³',
      'Calculate moles of Na₂CO₃ = concentration × volume = 0.100 × 0.025 = 0.0025 mol',
      'Use stoichiometry: 1 Na₂CO₃ : 2 HCl, so moles HCl = 2 × 0.0025 = 0.005 mol',
      'Calculate HCl concentration = moles ÷ volume = 0.005 ÷ 0.020 = 0.250 mol dm⁻³'
    ],
    tags: ['titration', 'concentration', 'stoichiometry', 'neutralisation']
  },
  {
    id: 'phys-1.2-004',
    topic: 'Physical Chemistry',
    specSection: '1.2 Amount of substance',
    type: 'numerical',
    difficulty: 'higher',
    question: 'A gas occupies a volume of 2.4 dm³ at 100 kPa and 25°C. Calculate the number of moles of gas present. (Gas constant R = 8.31 J K⁻¹ mol⁻¹)',
    correctAnswer: '0.097',
    explanation: 'Using the ideal gas equation PV = nRT. First convert: P = 100 kPa = 100,000 Pa, V = 2.4 dm³ = 0.0024 m³, T = 25 + 273 = 298 K. Rearranging: n = PV/RT = (100,000 × 0.0024)/(8.31 × 298) = 0.097 mol',
    workingSteps: [
      'Convert units: P = 100 kPa = 100,000 Pa, V = 2.4 dm³ = 0.0024 m³',
      'Convert temperature: T = 25 + 273 = 298 K',
      'Use PV = nRT, rearrange to n = PV/RT',
      'n = (100,000 × 0.0024)/(8.31 × 298) = 240/2476.38 = 0.097 mol'
    ],
    tags: ['ideal gas equation', 'PV=nRT', 'moles', 'calculation']
  },
  {
    id: 'phys-1.2-005',
    topic: 'Physical Chemistry',
    specSection: '1.2 Amount of substance',
    type: 'mcq',
    difficulty: 'higher',
    question: 'A compound contains 40.0% carbon, 6.7% hydrogen and 53.3% oxygen by mass. What is its empirical formula? (Ar: C = 12, H = 1, O = 16)',
    options: ['CHO', 'CH₂O', 'C₂H₄O₂', 'CH₃O'],
    correctAnswer: 'CH₂O',
    explanation: 'Divide each % by Ar: C = 40/12 = 3.33, H = 6.7/1 = 6.7, O = 53.3/16 = 3.33. Divide by smallest (3.33): C = 1, H = 2, O = 1. Empirical formula = CH₂O',
    workingSteps: [
      'Assume 100g sample: 40.0g C, 6.7g H, 53.3g O',
      'Calculate moles: C = 40/12 = 3.33, H = 6.7/1 = 6.7, O = 53.3/16 = 3.33',
      'Divide by smallest value (3.33): C = 1, H = 2.01 ≈ 2, O = 1',
      'Empirical formula = CH₂O'
    ],
    tags: ['empirical formula', 'composition', 'calculation']
  },
  {
    id: 'phys-1.2-006',
    topic: 'Physical Chemistry',
    specSection: '1.2 Amount of substance',
    type: 'numerical',
    difficulty: 'higher',
    question: 'In an experiment, 4.2 g of ethene (C₂H₄) was produced. The theoretical yield was 6.0 g. Calculate the percentage yield. (Give your answer to 1 decimal place)',
    correctAnswer: '70.0',
    explanation: 'Percentage yield = (actual yield / theoretical yield) × 100 = (4.2 / 6.0) × 100 = 70.0%',
    workingSteps: [
      'Use formula: % yield = (actual yield / theoretical yield) × 100',
      '% yield = (4.2 / 6.0) × 100',
      '% yield = 0.7 × 100 = 70.0%'
    ],
    tags: ['percentage yield', 'calculation', 'practical']
  },
  {
    id: 'phys-1.2-007',
    topic: 'Physical Chemistry',
    specSection: '1.2 Amount of substance',
    type: 'mcq',
    difficulty: 'higher',
    question: 'Ethanol can be produced from ethene via the following equation:\n\nC₂H₄ + H₂O → C₂H₅OH\n\nWhat is the atom economy for this reaction? (Mr: C₂H₄ = 28, H₂O = 18, C₂H₅OH = 46)',
    options: ['60.9%', '82.6%', '100%', '164%'],
    correctAnswer: '100%',
    explanation: 'Atom economy = (Mr of desired product / sum of Mr of all reactants) × 100 = (46 / (28 + 18)) × 100 = (46/46) × 100 = 100%. All atoms from reactants form the desired product.',
    workingSteps: [
      'Identify desired product: C₂H₅OH (Mr = 46)',
      'Sum Mr of all reactants: 28 + 18 = 46',
      'Atom economy = (46/46) × 100 = 100%',
      'This reaction has 100% atom economy as no by-products are formed'
    ],
    tags: ['atom economy', 'green chemistry', 'calculation']
  },
  {
    id: 'phys-1.2-008',
    topic: 'Physical Chemistry',
    specSection: '1.2 Amount of substance',
    type: 'mcq',
    difficulty: 'foundation',
    question: 'What is the concentration in mol dm⁻³ of a solution containing 0.50 mol of NaCl dissolved in 250 cm³ of water?',
    options: ['0.50', '1.0', '2.0', '4.0'],
    correctAnswer: '2.0',
    explanation: 'Concentration = moles / volume. Convert 250 cm³ to dm³: 250/1000 = 0.25 dm³. Concentration = 0.50 / 0.25 = 2.0 mol dm⁻³',
    workingSteps: [
      'Convert volume to dm³: 250 cm³ = 250/1000 = 0.25 dm³',
      'Use formula: concentration = moles / volume',
      'Concentration = 0.50 / 0.25 = 2.0 mol dm⁻³'
    ],
    tags: ['concentration', 'moles', 'calculation']
  },

  // PHYSICAL CHEMISTRY - Topic 1.4: Energetics (6 questions)
  {
    id: 'phys-1.4-001',
    topic: 'Physical Chemistry',
    specSection: '1.4 Energetics',
    type: 'mcq',
    difficulty: 'foundation',
    question: 'Which of the following processes is exothermic?',
    options: ['Melting ice', 'Boiling water', 'Combustion of methane', 'Photosynthesis'],
    correctAnswer: 'Combustion of methane',
    explanation: 'Combustion reactions are exothermic - they release energy to the surroundings. Melting and boiling are endothermic (require energy input). Photosynthesis is also endothermic.',
    tags: ['exothermic', 'endothermic', 'energy']
  },
  {
    id: 'phys-1.4-002',
    topic: 'Physical Chemistry',
    specSection: '1.4 Energetics',
    type: 'numerical',
    difficulty: 'higher',
    question: 'Calculate the enthalpy change when 50.0 cm³ of 1.00 mol dm⁻³ HCl is mixed with 50.0 cm³ of 1.00 mol dm⁻³ NaOH. The temperature rises by 6.8°C. Give your answer in kJ mol⁻¹.\n\n(Assume: specific heat capacity c = 4.18 J g⁻¹ K⁻¹, density = 1.00 g cm⁻³)',
    correctAnswer: '-57',
    explanation: 'Total volume = 100 cm³, mass = 100 g. Energy released = mcΔT = 100 × 4.18 × 6.8 = 2842 J. Moles of HCl (limiting reagent) = 0.050 dm³ × 1.00 mol dm⁻³ = 0.050 mol. ΔH = -2842 J ÷ 0.050 mol = -56,840 J mol⁻¹ = -57 kJ mol⁻¹ (negative because exothermic)',
    workingSteps: [
      'Calculate total mass: 50 + 50 = 100 cm³ = 100 g (density = 1 g cm⁻³)',
      'Energy = mcΔT = 100 × 4.18 × 6.8 = 2842.4 J',
      'Moles = 0.050 dm³ × 1.00 mol dm⁻³ = 0.050 mol',
      'ΔH = -2842.4 ÷ 0.050 = -56,848 J mol⁻¹ ≈ -57 kJ mol⁻¹'
    ],
    tags: ['enthalpy', 'calorimetry', 'neutralisation', 'calculation']
  },

  // INORGANIC CHEMISTRY - Topic 2.1: Periodicity (8 questions)
  {
    id: 'inorg-2.1-001',
    topic: 'Inorganic Chemistry',
    specSection: '2.1 Periodicity',
    type: 'mcq',
    difficulty: 'foundation',
    question: 'What is the trend in atomic radius across Period 3 from Na to Cl?',
    options: ['Increases', 'Decreases', 'Stays constant', 'Increases then decreases'],
    correctAnswer: 'Decreases',
    explanation: 'Atomic radius decreases across a period because the nuclear charge increases, pulling electrons closer to the nucleus, while shielding remains roughly constant.',
    tags: ['periodic trends', 'atomic radius', 'Period 3']
  },
  {
    id: 'inorg-2.1-002',
    topic: 'Inorganic Chemistry',
    specSection: '2.1 Periodicity',
    type: 'truefalse',
    difficulty: 'foundation',
    question: 'True or False: First ionisation energy generally increases across a period.',
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'True. First ionisation energy generally increases across a period due to increasing nuclear charge and decreasing atomic radius, making it harder to remove an electron.',
    tags: ['ionisation energy', 'periodic trends']
  },

  // INORGANIC CHEMISTRY - Topic 2.2: Group 2 (8 questions)
  {
    id: 'inorg-2.2-001',
    topic: 'Inorganic Chemistry',
    specSection: '2.2 Group 2, the alkaline earth metals',
    type: 'mcq',
    difficulty: 'foundation',
    question: 'What is the trend in reactivity of Group 2 metals down the group?',
    options: ['Increases', 'Decreases', 'Stays constant', 'No clear trend'],
    correctAnswer: 'Increases',
    explanation: 'Reactivity increases down Group 2. Larger atoms lose electrons more easily due to greater atomic radius and increased shielding, despite higher nuclear charge.',
    tags: ['Group 2', 'reactivity', 'trends']
  },

  // ORGANIC CHEMISTRY - Topic 3.2: Alkanes (4 questions)
  {
    id: 'org-3.2-001',
    topic: 'Organic Chemistry',
    specSection: '3.2 Alkanes',
    type: 'mcq',
    difficulty: 'foundation',
    question: 'What is the general formula for alkanes?',
    options: ['CₙH₂ₙ', 'CₙH₂ₙ₊₂', 'CₙH₂ₙ₋₂', 'CₙH₂ₙ₊₁OH'],
    correctAnswer: 'CₙH₂ₙ₊₂',
    explanation: 'The general formula for alkanes is CₙH₂ₙ₊₂. Alkanes are saturated hydrocarbons with single C-C bonds only.',
    tags: ['alkanes', 'general formula', 'homologous series']
  },
  {
    id: 'org-3.2-002',
    topic: 'Organic Chemistry',
    specSection: '3.2 Alkanes',
    type: 'mcq',
    difficulty: 'higher',
    question: 'Which of the following best describes the mechanism for the reaction between methane and chlorine in UV light?',
    options: ['Electrophilic addition', 'Nucleophilic substitution', 'Free radical substitution', 'Electrophilic substitution'],
    correctAnswer: 'Free radical substitution',
    explanation: 'The reaction between alkanes and halogens in UV light proceeds via free radical substitution. UV light provides energy to break the Cl-Cl bond homolytically, forming chlorine radicals.',
    tags: ['alkanes', 'halogenation', 'free radical', 'mechanism']
  },

  // ORGANIC CHEMISTRY - Topic 3.4: Alkenes (5 questions)
  {
    id: 'org-3.4-001',
    topic: 'Organic Chemistry',
    specSection: '3.4 Alkenes',
    type: 'mcq',
    difficulty: 'foundation',
    question: 'What is the functional group in alkenes?',
    options: ['C=O', 'C=C', 'C≡C', 'OH'],
    correctAnswer: 'C=C',
    explanation: 'Alkenes contain a carbon-carbon double bond (C=C) as their functional group. This makes them unsaturated hydrocarbons.',
    tags: ['alkenes', 'functional group', 'double bond']
  },
  {
    id: 'org-3.4-002',
    topic: 'Organic Chemistry',
    specSection: '3.4 Alkenes',
    type: 'truefalse',
    difficulty: 'foundation',
    question: 'True or False: Alkenes react with bromine water, turning it from orange to colourless.',
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'True. Alkenes undergo electrophilic addition with bromine water, decolourising it from orange/brown to colourless. This is a test for C=C bonds.',
    tags: ['alkenes', 'bromine water', 'test', 'electrophilic addition']
  },

  // PHYSICAL CHEMISTRY - Topic 1.3: Bonding (6 questions)
  {
    id: 'phys-1.3-001',
    topic: 'Physical Chemistry',
    specSection: '1.3 Bonding',
    type: 'mcq',
    difficulty: 'foundation',
    question: 'Which type of bonding is present in sodium chloride?',
    options: ['Ionic', 'Covalent', 'Metallic', 'Hydrogen'],
    correctAnswer: 'Ionic',
    explanation: 'Sodium chloride (NaCl) contains ionic bonding. Sodium (metal) transfers an electron to chlorine (non-metal), forming Na⁺ and Cl⁻ ions held together by electrostatic attraction.',
    tags: ['ionic bonding', 'NaCl', 'structure']
  },

  // INORGANIC CHEMISTRY - Topic 2.3: Group 7 (10 questions)
  {
    id: 'inorg-2.3-001',
    topic: 'Inorganic Chemistry',
    specSection: '2.3 Group 7(17), the halogens',
    type: 'mcq',
    difficulty: 'foundation',
    question: 'What is the trend in boiling point of the halogens down Group 7?',
    options: ['Increases', 'Decreases', 'Stays constant', 'No pattern'],
    correctAnswer: 'Increases',
    explanation: 'Boiling point increases down Group 7. Larger halogen molecules have more electrons, leading to stronger London dispersion forces between molecules, requiring more energy to overcome.',
    tags: ['halogens', 'boiling point', 'intermolecular forces']
  },

  // Sample question for quick testing - will be replaced with 150 total
];

// Helper to get questions by topic
export const getQuestionsByTopic = (topic) => {
  return chemistryQuestions.filter(q => q.topic === topic);
};

// Helper to get questions by spec section
export const getQuestionsBySpecSection = (specSection) => {
  return chemistryQuestions.filter(q => q.specSection === specSection);
};

// Helper to get question by ID
export const getQuestionById = (id) => {
  return chemistryQuestions.find(q => q.id === id);
};

// Get total count
export const getTotalQuestionCount = () => chemistryQuestions.length;

// Note: This is a starting set of questions. The full implementation will have 150 questions:
// - Physical Chemistry: 50 questions (topics 1.1-1.12)
// - Inorganic Chemistry: 50 questions (topics 2.1-2.6)
// - Organic Chemistry: 50 questions (topics 3.1-3.16)
