'use client';

import { Suspense } from 'react';
import ResultPage from './ResultPage';

export default function ResultPageWrapper() {
    return (
        <Suspense fallback={<div>Loading result...</div>}>
            <ResultPage />
        </Suspense>
    );
}
