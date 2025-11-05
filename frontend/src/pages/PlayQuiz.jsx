// PlayQuiz.jsx (The new main page component)

import React, { useState, useCallback, useRef } from 'react';
import Sidebar from '../components/Sidebar'; // Import the new Sidebar
import QuizContent from '../components/QuizContent'; // Import the new QuizContent
import questionsData from "../assets/dummydata"; // Import data here to manage state
import { sidebarStyles } from '../assets/dummyStyles' // Style import is still needed for layout
import Navbar from '../components/Navbar';

const PlayQuiz = () => {
    // --- Central State Management ---
    const [selectedTech, setSelectedTech] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const submittedRef = useRef(false);

    // Initial state for sidebar on mobile is closed
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
    
    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

    // --- State Handlers / Logic ---
    const getQuestions = useCallback(() => {
        if (!selectedTech || !selectedLevel) return [];
        return questionsData?.[selectedTech]?.[selectedLevel] || []
    }, [selectedTech, selectedLevel]);

    const calculateScore = useCallback(() => {
        const questions = getQuestions();
        let correct = 0;
        questions.forEach((question, index) => {
            if (userAnswers[index] === question.correctAnswer) {
                correct++;
            }
        });
        return {
            correct,
            total: questions.length,
            percentage: questions.length
                ? Math.round((correct / questions.length) * 100)
                : 0,
        };
    }, [getQuestions, userAnswers]); // Depend on getQuestions/userAnswers

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setUserAnswers({});
        setShowResults(false);
        submittedRef.current = false;
    }
    
    // --- RENDERING ---
    return (
        <div className='flex flex-col'>
       
        <div className={`flex flex-row grow ${sidebarStyles.pageContainer} flex min-h-screen`}> 

            {/* 1. Sidebar Component (Handles tech/level selection) */}
            <Sidebar 
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                selectedTech={selectedTech}
                setSelectedTech={setSelectedTech}
                selectedLevel={selectedLevel}
                setSelectedLevel={setSelectedLevel}
                resetQuiz={resetQuiz} 
            />

            {/* 2. Main Content Area (Handles Quiz UI/Logic) */}
            <div className="flex-1 overflow-y-auto">
                <QuizContent 
                    // Pass Quiz State/Progress
                    selectedTech={selectedTech}
                    selectedLevel={selectedLevel}
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                    userAnswers={userAnswers}
                    setUserAnswers={setUserAnswers}
                    showResults={showResults}
                    setShowResults={setShowResults}
                    submittedRef={submittedRef}
                    
                    // Pass Quiz Logic
                    getQuestions={getQuestions}
                    calculateScore={calculateScore}
                    
                    // Pass Sidebar Interaction
                    toggleSidebar={toggleSidebar}
                    handleLevelSelect={(levelId) => { 
                        // This handles mobile level selection within QuizContent, 
                        // but calls the state setter logic from the parent (PlayQuiz)
                        setSelectedLevel(levelId);
                        resetQuiz();
                        if (window.innerWidth < 768) toggleSidebar(); 
                    }}
                />
            </div>

            <style>{sidebarStyles.customStyles}</style>
        </div>
        </div>
    );
};

export default PlayQuiz;