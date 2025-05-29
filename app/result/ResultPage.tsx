'use client';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ResultPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const score = Number(searchParams.get('score') || 0);
    const total = Number(searchParams.get('total') || 0);

    const handleRetake = () => {
        router.push('/quiz');
    };

    return (
        <div >
            <h1 className="text-4xl font-bold mb-4 text-blue-600">Quiz Completed!</h1>

            <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
                <p className="text-2xl font-semibold mb-4">Your Results</p>
                <p className="text-lg mb-6">
                    You scored
                    <span className="font-bold text-green-600 mx-1">{score}</span>
                    out of
                    <span className="font-bold text-blue-600 mx-1">{total}</span>
                </p>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={handleRetake}
                        className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition"
                    >
                        Retake Quiz
                    </button>
                    <button
                        onClick={() => router.push('/')}
                        className="w-full px-4 py-2 bg-gray-400 text-white font-medium rounded hover:bg-gray-500 transition"
                    >
                        Home
                    </button>
                </div>
            </div>
        </div>
    );
}
