import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DocumentRequest from './components/Document';
import CoursesList from './components/CoursesList';
import QuizList from './components/Quiz';
import SideBar from './components/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuizPage from './components/QuizPage';
import WeeklySchedule from './components/WeeklySchedule';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/WeeklySchedule" element={<WeeklySchedule />} />
            <Route path="/courses" element={<CoursesList />} />
            <Route path="/quizzes" element={<QuizList />} />
            <Route path="/quiz/:id" element={<QuizPage />} />
            <Route path="/documents" element={<DocumentRequest />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
