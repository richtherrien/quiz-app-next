'use client';
import React, { useState, useEffect } from 'react';
import { Question } from '@/types/questions';

type Props = {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  questionAnswered: boolean;
};

export default function QuestionRenderer({ question, onAnswer, questionAnswered }: Props) {
  const [input, setInput] = useState('');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [matchingAnswers, setMatchingAnswers] = useState<Record<string, string>>({});
  const [ordering, setOrdering] = useState<string[]>([]);

  useEffect(() => {
    if (question.type === 'ordering' && question.options) {
      const shuffled = [...question.options].sort(() => Math.random() - 0.5);
      setOrdering(shuffled);
    }
    setInput('');
  }, [question]);


  const handleSubmit = () => {
    let isCorrect = false;

    switch (question.type) {
      case 'multiple-choice':
      case 'true-false':
        isCorrect = selectedOption === question.answer;
        break;
      case 'fill-in-the-blank':
        isCorrect = input.trim().toLowerCase() === question.answer.toLowerCase();
        break;
      case 'matching':
        isCorrect = Object.entries(question.answer).every(
          ([left, right]) => matchingAnswers[left] === right
        );
        break;
      case 'ordering':
        isCorrect = ordering.every((item, i) => item === question.answer[i]);
        break;
    }

    onAnswer(isCorrect);
  };
  const moveItem = (fromIndex: number, toIndex: number) => {
    const updated = [...ordering];
    const [movedItem] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, movedItem);
    setOrdering(updated);
  };
  return (
    <div className="space-y-4">
      <p className="text-lg font-medium">{question.question}</p>



      {(question.type === 'multiple-choice' || question.type === 'true-false') &&

        <div className="flex flex-col gap-4 w-full max-w-md">

          {question.options?.map((opt) => (
            <button key={opt}
              className={`px-4 py-2 border rounded
                ${selectedOption === opt ? 'bg-blue-200' : ''}
                ${!questionAnswered ? 'hover:bg-blue-100' : ''}
                ${questionAnswered && opt === question.answer ? 'bg-green-200 border-green-500' : ''}
                ${questionAnswered && selectedOption === opt && opt !== question.answer ? 'bg-red-200 border-red-500' : ''}
        
            `}

              onClick={() => setSelectedOption(opt)}
              disabled={questionAnswered}
            >
              {opt}
            </button>
          ))}
        </div>

      }
      { }
      {question.type === 'fill-in-the-blank' && (
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded w-full"
          disabled={questionAnswered}
        />
      )}

      {question.type === 'matching' && (
        <div className="grid grid-cols-2 gap-4">
          {question.pairs?.map(({ left }) => (
            <div key={left} className="flex items-center space-x-2">
              <span className="w-32">{left}</span>
              <select
                className="border p-1"
                value={matchingAnswers[left] || ''}
                onChange={(e) =>
                  setMatchingAnswers((prev) => ({
                    ...prev,
                    [left]: e.target.value,
                  }))
                }
                disabled={questionAnswered}
              >
                <option value="">Select</option>
                {question.pairs?.map((pair) => (
                  <option key={pair.right} value={pair.right}>
                    {pair.right}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}

      {question.type === 'ordering' && (
        <ul className="space-y-2">
          {ordering.map((item, idx) => (
            <li key={item} className="flex items-center space-x-2">
              <span>{idx + 1}.</span>
              <span className="border px-4 py-1 rounded flex-1">{item}</span>
              <div className="space-x-1">
                <button
                  disabled={idx === 0 || questionAnswered}
                  onClick={() => moveItem(idx, idx - 1)}
                  className="px-2 py-1 border rounded bg-gray-200 hover:bg-gray-300"
                >
                  ↑
                </button>
                <button
                  disabled={idx === ordering.length - 1 || questionAnswered}
                  onClick={() => moveItem(idx, idx + 1)}
                  className="px-2 py-1 border rounded bg-gray-200 hover:bg-gray-300"
                >
                  ↓
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}


      {!questionAnswered && (
        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500"
        >
          Submit
        </button>
      )}
    </div>
  );
}
