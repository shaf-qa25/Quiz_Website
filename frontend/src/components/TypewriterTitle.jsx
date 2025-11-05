import React, { useState, useEffect } from 'react';
const TARGET_TEXT = "The Code. The Challenge. The Mastery."
const TYPING_SPEED = 80; 
const CURSOR_BLINK_SPEED = 500; 

const TypewriterTitle = () => {
    const [displayedText, setDisplayedText] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
      
        const typingInterval = setInterval(() => {
          if (currentIndex < TARGET_TEXT.length) {
            const nextChar = TARGET_TEXT.charAt(currentIndex);
            setDisplayedText((prev) => prev + nextChar);
            currentIndex++;
          } else {
            clearInterval(typingInterval);
          }
        }, TYPING_SPEED);
      
        return () => clearInterval(typingInterval);
      }, []);
      
    useEffect(() => {
        let cursorInterval;
        
        if (displayedText.length === TARGET_TEXT.length) {
            cursorInterval = setInterval(() => {
                setCursorVisible((prev) => !prev);
            }, CURSOR_BLINK_SPEED); 
        }
        return () => {
            if (cursorInterval) {
                clearInterval(cursorInterval);
            }
        };
    }, [displayedText]); 

    return (
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#2C2C2C] mb-4 min-h-20">
            
            {displayedText}
            
            <span 
                className={`transition-opacity duration-300 ${cursorVisible ? 'opacity-100' : 'opacity-0'} inline-block w-1 md:w-1.5 h-8 md:h-12 ml-2 md:ml-3 bg-[#FF914D] align-middle`}
                style={{ verticalAlign: 'middle' }}
            >
            </span>
        </h2>
    );
};

export default TypewriterTitle;