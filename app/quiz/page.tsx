'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import QuestionRenderer from './components/QuestionRenderer';
import { questions } from '@/data/questions'; 

export default function QuizPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [questionAnswered, setQuestionAnswered] = useState(false);
    const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false);
    const router = useRouter();

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) {
            setScore((prev) => prev + 1);
        }
        setLastAnswerCorrect(isCorrect);
        setQuestionAnswered(true);

    };

    const handleNext = () => {
        setQuestionAnswered(false);
        const next = currentIndex + 1;
        if (next < questions.length) {
            setCurrentIndex(next);
        } else {
            router.push(`/result?score=${score}&total=${questions.length}`);
        }
    };

    return (
        <>
            <h2 className="text-2xl font-semibold mb-4">Question {currentIndex + 1} of {questions.length}</h2>
            <QuestionRenderer
                question={questions[currentIndex]}
                onAnswer={handleAnswer}
                questionAnswered={questionAnswered}
            />

            {questionAnswered && (
                <div className="mt-4 ">
                    {lastAnswerCorrect ? (
                        <p className="text-green-700 font-semibold">Correct!</p>
                    ) : (
                        <p className="text-red-700 font-semibold">Sorry, that’s not right.</p>
                    )}

                    <div className="mt-2 flex justify-center">
                        <button
                            onClick={handleNext}
                            className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
