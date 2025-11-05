import React, { useState, useCallback, useRef } from 'react';
import Sidebar from '../components/Sidebar'; // Import the new Sidebar
import QuizContent from '../components/QuizContent'; // Import the new QuizContent
import questionsData from "../assets/questions"; // Import data here to manage state
import { sidebarStyles } from '../assets/themeStyles' // Style import is still needed for layout
import Navbar from '../components/Navbar';

const PlayQuiz = () => {
    const [selectedTech, setSelectedTech] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const submittedRef = useRef(false);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
    
    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

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
    }, [getQuestions, userAnswers]);

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setUserAnswers({});
        setShowResults(false);
        submittedRef.current = false;
    }
    
    return (
        <div className='flex flex-col'>
       
        <div className={`flex flex-row grow ${sidebarStyles.pageContainer} flex min-h-screen`}> 

            <Sidebar 
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                selectedTech={selectedTech}
                setSelectedTech={setSelectedTech}
                selectedLevel={selectedLevel}
                setSelectedLevel={setSelectedLevel}
                resetQuiz={resetQuiz} 
            />

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
                    
                    getQuestions={getQuestions}
                    calculateScore={calculateScore}
                    
                    toggleSidebar={toggleSidebar}
                    handleLevelSelect={(levelId) => { 
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