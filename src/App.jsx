import React from 'react';
import { BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom';
import HomePage, { QUIZ_LIST } from './HomePage.jsx';
import QuizRunner from './components/QuizRunner.jsx';

import { ALL_QUESTIONS as quiz1 } from './data/quiz1Data.js';
import { ALL_QUESTIONS as quiz2 } from './data/quiz2Data.js';
import { ALL_QUESTIONS as quiz3 } from './data/quiz3Data.js';
import { ALL_QUESTIONS as quiz4 } from './data/quiz4Data.js';
import { ALL_QUESTIONS as quiz5 } from './data/quiz5Data.js';
import { ALL_QUESTIONS as quiz6 } from './data/quiz6Data.js';
import { ALL_QUESTIONS as quiz7 } from './data/quiz7Data.js';
import { ALL_QUESTIONS as quiz8 } from './data/quiz8Data.js';
import { ALL_QUESTIONS as quiz9 } from './data/quiz9Data.js';
import { ALL_QUESTIONS as quiz10 } from './data/quiz10Data.js';
import { ALL_QUESTIONS as quiz11 } from './data/quiz11Data.js';
import { ALL_QUESTIONS as quiz12 } from './data/quiz12Data.js';
import { ALL_QUESTIONS as quiz13 } from './data/quiz13Data.js';
import { ALL_QUESTIONS as quiz14 } from './data/quiz14Data.js';
import { ALL_QUESTIONS as quiz15 } from './data/quiz15Data.js';
import { ALL_QUESTIONS as quiz16 } from './data/quiz16Data.js';
import { ALL_QUESTIONS as quiz17 } from './data/quiz17Data.js';
import { ALL_QUESTIONS as quiz18 } from './data/quiz18Data.js';

const QUIZ_DATA_MAP = {
  1: quiz1,
  2: quiz2,
  3: quiz3,
  4: quiz4,
  5: quiz5,
  6: quiz6,
  7: quiz7,
  8: quiz8,
  9: quiz9,
  10: quiz10,
  11: quiz11,
  12: quiz12,
  13: quiz13,
  14: quiz14,
  15: quiz15,
  16: quiz16,
  17: quiz17,
  18: quiz18
};

function QuizRouteWrapper() {
  const { id } = useParams();
  const quizId = parseInt(id, 10);
  const quizMeta = QUIZ_LIST.find(q => q.id === quizId);
  const questionsData = QUIZ_DATA_MAP[quizId];

  if (!quizMeta || !questionsData) {
    return <Navigate to="/" replace />;
  }

  return (
    <QuizRunner
      quizTitle={quizMeta.title}
      questionsData={questionsData}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kuis/:id" element={<QuizRouteWrapper />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
