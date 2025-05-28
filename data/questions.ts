import { Question } from '@/types/questions';

export const questions: Question[] = [
    {
        type: 'multiple-choice',
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        answer: 'Mars',
    },
    {
        type: 'fill-in-the-blank',
        question: 'Who wrote the Declaration of Independence?',
        answer: 'Thomas Jefferson',
    },
    {
        type: 'ordering',
        question: 'Order the following historical periods from earliest to latest.',
        options: ['Renaissance', 'Middle Ages', 'Industrial Revolution', 'Ancient Rome'],
        answer: ['Ancient Rome', 'Middle Ages', 'Renaissance', 'Industrial Revolution'],
    },
    {
        type: 'true-false',
        question: 'The Pacific Ocean is the largest ocean on Earth.',
        options: ['True', 'False'],
        answer: 'True',
    },
    {
        type: 'multiple-choice',
        question: 'Which country is home to the Great Barrier Reef?',
        options: ['USA', 'Australia', 'Brazil', 'South Africa'],
        answer: 'Australia',
    },
    {
        type: 'matching',
        question: 'Match the scientist with their discovery.',
        pairs: [
            { left: 'Isaac Newton', right: 'Gravity' },
            { left: 'Louis Pasteur', right: 'Vaccines' },
            { left: 'Marie Curie', right: 'Radioactivity' },
        ],
        answer: {
            'Isaac Newton': 'Gravity',
            'Louis Pasteur': 'Vaccines',
            'Marie Curie': 'Radioactivity',
        },
    },
    {
        type: 'true-false',
        question: 'Lightning is hotter than the surface of the sun.',
        options: ['True', 'False'],
        answer: 'True',
    },
    {
        type: 'multiple-choice',
        question: 'What is the capital of Canada?',
        options: ['Toronto', 'Ottawa', 'Vancouver', 'Montreal'],
        answer: 'Ottawa',
    },
    {
        type: 'fill-in-the-blank',
        question: 'The process by which plants make food is called ________.',
        answer: 'Photosynthesis',
    },
    {
        type: 'ordering',
        question: 'Order these scientific units from smallest to largest.',
        options: ['Millimeter', 'Centimeter', 'Meter', 'Kilometer'],
        answer: ['Millimeter', 'Centimeter', 'Meter', 'Kilometer'],
    },
    {
        type: 'true-false',
        question: 'The Battle of Hastings occurred in 1066.',
        options: ['True', 'False'],
        answer: 'True',
    },
    {
        type: 'multiple-choice',
        question: 'Which gas do humans exhale?',
        options: ['Oxygen', 'Hydrogen', 'Carbon Dioxide', 'Nitrogen'],
        answer: 'Carbon Dioxide',
    },
    {
        type: 'matching',
        question: 'Match the countries to their flags colors (simplified).',
        pairs: [
            { left: 'Japan', right: 'White and Red' },
            { left: 'Italy', right: 'Green, White, Red' },
            { left: 'Germany', right: 'Black, Red, Yellow' },
        ],
        answer: {
            'Japan': 'White and Red',
            'Italy': 'Green, White, Red',
            'Germany': 'Black, Red, Yellow',
        },
    },
    {
        type: 'fill-in-the-blank',
        question: 'Mount Everest is located in the ________ mountain range.',
        answer: 'Himalayas',
    },
    {
        type: 'true-false',
        question: 'Water boils at 90°C at sea level.',
        options: ['True', 'False'],
        answer: 'False',
    },
    {
        type: 'multiple-choice',
        question: 'Which empire built the Colosseum?',
        options: ['Greek', 'Roman', 'Egyptian', 'Persian'],
        answer: 'Roman',
    },
    {
        type: 'ordering',
        question: 'Arrange these US Presidents in order of service.',
        options: ['Abraham Lincoln', 'George Washington', 'Barack Obama', 'Franklin D. Roosevelt'],
        answer: ['George Washington', 'Abraham Lincoln', 'Franklin D. Roosevelt', 'Barack Obama'],
    },
    {
        type: 'fill-in-the-blank',
        question: 'The powerhouse of the cell is the ________.',
        answer: 'Mitochondria',
    },
    {
        type: 'true-false',
        question: 'The Great Wall of China is visible from the moon.',
        options: ['True', 'False'],
        answer: 'False',
    },
    {
        type: 'multiple-choice',
        question: 'Which continent has the most countries?',
        options: ['Asia', 'Africa', 'Europe', 'South America'],
        answer: 'Africa',
    },
    {
        type: 'matching',
        question: 'Match the invention to its inventor.',
        pairs: [
            { left: 'Telephone', right: 'Alexander Graham Bell' },
            { left: 'Light bulb', right: 'Thomas Edison' },
            { left: 'Airplane', right: 'Wright Brothers' },
        ],
        answer: {
            'Telephone': 'Alexander Graham Bell',
            'Light bulb': 'Thomas Edison',
            'Airplane': 'Wright Brothers',
        },
    },
    {
        type: 'multiple-choice',
        question: 'Which layer of Earth do we live on?',
        options: ['Mantle', 'Inner Core', 'Crust', 'Outer Core'],
        answer: 'Crust',
    },
    {
        type: 'true-false',
        question: 'Albert Einstein won the Nobel Prize for his theory of relativity.',
        options: ['True', 'False'],
        answer: 'False',
    },
    {
        type: 'ordering',
        question: 'Put these bodies of water in order from smallest to largest.',
        options: ['Pond', 'Lake', 'Sea', 'Ocean'],
        answer: ['Pond', 'Lake', 'Sea', 'Ocean'],
    },
    {
        type: 'fill-in-the-blank',
        question: 'The atomic number of Carbon is ________.',
        answer: '6',
    },
];
