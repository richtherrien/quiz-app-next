'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/quiz');
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-4 ">Welcome to the Quiz</h1>
      <p className="text-lg mb-8 text-center text-gray-700 max-w-md">
        Test your knowledge with fun and challenging questions. Click below to begin your quiz journey.
      </p>
      <button
        onClick={handleStart}
        className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500"
      >
        Start Quiz
      </button>
    </>
  );
}
