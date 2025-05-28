export type BaseQuestion = {
    question: string;
    type: 'multiple-choice' | 'fill-in-the-blank' | 'true-false' | 'matching' | 'ordering';
};

export type MultipleChoiceQuestion = BaseQuestion & {
    type: 'multiple-choice' | 'true-false';
    options: string[];
    answer: string;
};

export type FillInTheBlankQuestion = BaseQuestion & {
    type: 'fill-in-the-blank';
    answer: string;
};

export type MatchingQuestion = BaseQuestion & {
    type: 'matching';
    pairs: { left: string; right: string }[];
    answer: Record<string, string>;
};

export type OrderingQuestion = BaseQuestion & {
    type: 'ordering';
    options: string[];
    answer: string[];
};

export type Question =
    | MultipleChoiceQuestion
    | FillInTheBlankQuestion
    | MatchingQuestion
    | OrderingQuestion;
