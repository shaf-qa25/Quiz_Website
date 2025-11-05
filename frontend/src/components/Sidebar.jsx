

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { BookOpen, ChevronDown, ChevronRight, X } from 'lucide-react';
import { sidebarStyles } from '../assets/dummyStyles'

const technologies = [
    { id: "html", name: "HTML", icon: <BookOpen size={20} />, color: "bg-orange-50 text-orange-600 border-orange-200", }, 
    { id: "css", name: "CSS", icon: <BookOpen size={20} />, color: "bg-blue-50 text-blue-600 border-blue-200", },
    { id: "js", name: "JavaScript", icon: <BookOpen size={20} />, color: "bg-yellow-50 text-yellow-600 border-yellow-200", },
    { id: "react", name: "React", icon: <BookOpen size={20} />, color: "bg-cyan-50 text-cyan-600 border-cyan-200", },
    { id: "node", name: "Node.js", icon: <BookOpen size={20} />, color: "bg-green-50 text-green-600 border-green-200", },
    { id: "mongodb", name: "MongoDB", icon: <BookOpen size={20} />, color: "bg-emerald-50 text-emerald-600 border-emerald-200", },
    { id: "java", name: "Java", icon: <BookOpen size={20} />, color: "bg-red-50 text-red-600 border-red-200", },
    { id: "python", name: "Python", icon: <BookOpen size={20} />, color: "bg-indigo-50 text-indigo-600 border-indigo-200", },
    { id: "cpp", name: "C++", icon: <BookOpen size={20} />, color: "bg-purple-50 text-purple-600 border-purple-200", },
    { id: "bootstrap", name: "Bootstrap", icon: <BookOpen size={20} />, color: "bg-pink-50 text-pink-600 border-pink-200", },
];
    
const levels = [
    { id: "basic", name: "Basic", questions: 20, icon: <BookOpen size={16} />, color: "bg-green-50 text-green-600", },
    { id: "intermediate", name: "Intermediate", questions: 40, icon: <BookOpen size={16} />, color: "bg-blue-50 text-blue-600", },
    { id: "advanced", name: "Advanced", questions: 60, icon: <BookOpen size={16} />, color: "bg-purple-50 text-purple-600", },
];


const Sidebar = ({ isSidebarOpen, toggleSidebar, selectedTech, setSelectedTech, selectedLevel, setSelectedLevel, resetQuiz }) => {

    const asideRef = useRef(null);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
            document.body.style.overflow = isSidebarOpen ? "hidden" : "";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isSidebarOpen]);


    const handleTechSelect = (techId) => {
        if (selectedTech === techId) {
            setSelectedTech(null);
            setSelectedLevel(null);
        } else {
            setSelectedTech(techId);
            setSelectedLevel(null);
        }
        resetQuiz(); 
        if (window.innerWidth < 768) toggleSidebar(); 
    
        setTimeout(() => {
            const el = asideRef.current?.querySelector(`[data-tech="${techId}"]`);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 120);
    };

    const handleLevelSelect = (levelId) => {
        setSelectedLevel(levelId);
        resetQuiz(); 
        if (window.innerWidth < 768) toggleSidebar();
    };

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;


    return (
        <React.Fragment>
            {isSidebarOpen && isMobile && (
                <div onClick={toggleSidebar}
                    className={sidebarStyles.mobileOverlay}>
                </div>
            )}
            <aside
                ref={asideRef}
                className={`${sidebarStyles.sidebar} 
                           ${isMobile ? (isSidebarOpen ? "translate-x-0 " : "-translate-x-full") : "translate-x-0"}
                           md:translate-x-0`}
            >
                <div className={sidebarStyles.sidebarHeader}>
                    <div className={sidebarStyles.headerDecoration1}></div>
                    <div className={sidebarStyles.headerDecoration2}></div>

                    <div className={sidebarStyles.headerContent}>
                        <div className={sidebarStyles.logoContainer}>
                            <div className={sidebarStyles.logoIcon}>
                                <BookOpen size={28} className=" text-indigo-700" />
                            </div>
                            <h1 className={sidebarStyles.logoTitle}>Tech Quiz Master</h1>
                            <p className={sidebarStyles.logoSubtitle}>
                                Test your knowledge and improve skills
                            </p>
                        </div>
                        {isMobile && (
                             <button onClick={toggleSidebar}
                                className={sidebarStyles.closeButton}>
                                <X size={20} />
                            </button>
                        )}
                       
                    </div>
                </div>
                <div className={sidebarStyles.sidebarContent}>
                    <div className={sidebarStyles.technologiesHeader}>
                        <h2 className={sidebarStyles.technologiesTitle}>Technologies</h2>
                        <span className={sidebarStyles.technologiesCount}>{technologies.length} options</span>
                    </div>
                    {technologies.map((tech) => (
                        <div
                            key={tech.id}
                            className={sidebarStyles.techItem}
                            data-tech={tech.id}>
                            <button onClick={() => handleTechSelect(tech.id)} className={`${sidebarStyles.techButton} ${selectedTech === tech.id ? `${tech.color} ${sidebarStyles.techButtonSelected}` : sidebarStyles.techButtonNormal}`}>
                                <div className={sidebarStyles.techButtonContent}>
                                    <span className={`${sidebarStyles.techIcon} ${tech.color}`}>
                                        {tech.icon}
                                    </span>
                                    <span className={sidebarStyles.techName}>{tech.name}</span>
                                </div>

                                {selectedTech === tech.id ? (
                                    <ChevronDown size={18} className="text-current" />
                                ) : (
                                    <ChevronRight size={18} className='text-gray-400' />
                                )}
                            </button>

                            {selectedTech === tech.id && (
                                <div className={sidebarStyles.levelsContainer}>
                                    <h3 className={sidebarStyles.levelsTitle}>
                                        <span>Select Difficulty</span>
                                        <span className={sidebarStyles.techBadge}>
                                            {technologies.find((t) => t.id === selectedTech).name}
                                        </span>
                                    </h3>
                                    {levels.map((level) => (
                                        <button
                                            key={level.id}
                                            onClick={() => handleLevelSelect(level.id)}
                                            className={`${sidebarStyles.levelButton} ${selectedLevel === level.id ? `${level.color} ${sidebarStyles.levelButtonSelected}` : sidebarStyles.levelButtonNormal}`}>
                                            <div className={sidebarStyles.levelButtonContent}>
                                                <span className={`${sidebarStyles.levelIcon} ${selectedLevel === level.id ? 'bg-white/40' : 'bg-gray-100'}`}>
                                                    {level.icon}</span>
                                                <span>{level.name}</span>
                                            </div>
                                            <span className={sidebarStyles.levelQuestions}>
                                                {level.questions} Qs
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className={sidebarStyles.sidebarFooter}>
                    
                    <div className={sidebarStyles.footerContent}>
                        <div className={sidebarStyles.footerContentCenter}>
                            <p>Master your skills one quiz at a time</p>
                            <p className={sidebarStyles.footerHighlight}>
                                Keep Learning, Keep Growing!
                            </p>
                        </div>
                    </div>
                </div>
            </aside>
        </React.Fragment>
    );
};

export default Sidebar;