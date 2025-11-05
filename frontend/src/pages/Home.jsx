import React from 'react';
import { sidebarStyles } from '../assets/themeStyles';
import { Link } from 'react-router-dom';
import { Target, Trophy, Layers, Code, Zap, Globe, Cpu, Coffee, ArrowRight } from 'lucide-react';

import TypewriterTitle from '../components/TypewriterTitle';

const Home = () => {
    const HomeSection = ({ children, className = "" }) => (
        <div className={`py-16 md:py-24 ${className}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </div>
    );

    return (
        <div className={sidebarStyles.pageContainer}>
            
           
            <HomeSection className="pt-20 md:pt-32 pb-16 md:pb-24">
                <div className="text-center">
                    <div className={sidebarStyles.welcomeIcon}>
                        <Trophy size={64} className="text-[#FF914D]" />
                    </div>
                    <div className="mb-8"> 
    <TypewriterTitle/>
</div>
                    <p className="text-lg md:text-xl text-[#2C2C2C]/70 max-w-3xl mx-auto mb-8">
                        The ultimate platform to test, track, and significantly boost your knowledge in the world's most demanded technologies.
                    </p>
                    
                    <Link 
                        to="/quiz"
                        className="inline-flex items-center px-10 py-4 text-xl font-bold rounded-xl shadow-2xl transition-all duration-300
                                   bg-linear-to-r from-[#FF914D] to-[#FFD93D] text-white 
                                   hover:shadow-lg hover:scale-[1.05] transform"
                    >
                        Start Coding Challenge Now
                        <ArrowRight size={22} className="ml-4" />
                    </Link>
                </div>
            </HomeSection>

            <HomeSection className="bg-white/70 shadow-inner">
                <h3 className="text-3xl md:text-4xl font-bold text-center text-[#2C2C2C] mb-12">
                    How It Works
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        { icon: Layers, title: "1. Select Your Tech", desc: "Choose from our extensive list: JavaScript, React, Python, and more." },
                        { icon: Target, title: "2. Pick Your Level", desc: "Start with Basic, challenge yourself with Intermediate, or aim for Advanced." },
                        { icon: Zap, title: "3. Get Instant Results", desc: "Complete the quiz and receive immediate, detailed performance analysis." },
                    ].map((item, index) => (
                        <div key={index} className="p-6 rounded-2xl border border-[#FFD93D]/30 transition-shadow hover:shadow-xl hover:bg-[#FFF9F0]">
                            <item.icon size={40} className="text-[#FF914D] mx-auto mb-4" />
                            <h4 className="text-xl font-semibold text-[#2C2C2C] mb-2">{item.title}</h4>
                            <p className="text-[#2C2C2C]/70">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </HomeSection>


<HomeSection>
  <h3 className="text-3xl md:text-4xl font-bold text-center text-[#2C2C2C] mb-12">
    Technologies We Cover
  </h3>

  {(() => {
    const [selectedTech, setSelectedTech] = React.useState(null);

    const techLinks = {
      "HTML/CSS": "https://www.w3schools.com/html/",
      JavaScript: "https://www.w3schools.com/js/",
      React: "https://www.w3schools.com/react/",
      "Node.js": "https://www.w3schools.com/nodejs/",
      Java: "https://www.w3schools.com/java/",
      Python: "https://www.w3schools.com/python/",
      MongoDB: "https://www.w3schools.com/mongodb/",
      "C++": "https://www.w3schools.com/cpp/",
      Bootstrap: "https://www.w3schools.com/bootstrap5/",
      SQL: "https://www.w3schools.com/sql/",
    };

    const icons = [Globe, Code, Cpu, Target, Coffee, Layers, Zap, Trophy];

    return (
      <>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {Object.entries(techLinks).map(([name, url], index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={name}
                onClick={() => setSelectedTech({ name, url })}
                className="flex flex-col items-center p-4 rounded-xl border border-[#FFD93D]/50 bg-white/80 shadow-sm 
                           hover:shadow-lg hover:scale-[1.05] cursor-pointer transition-transform"
              >
                <Icon size={30} className="text-[#FF914D] mb-2" />
                <span className="text-sm font-medium text-[#2C2C2C]">{name}</span>
              </div>
            );
          })}
        </div>

        
        {selectedTech && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-[90%] md:w-[80%] lg:w-[60%] h-[60vh] p-6 relative">
              <button
                onClick={() => setSelectedTech(null)}
                className="absolute top-3 right-4 text-gray-600 hover:text-[#FF914D] text-xl font-bold"
              >
                ✕
              </button>

              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <h4 className="text-2xl font-semibold text-[#2C2C2C]">
                  {selectedTech.name}
                </h4>
                <p className="text-gray-600">
                  Learn {selectedTech.name} in detail on W3Schools.
                </p>
                <a
                  href={selectedTech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF914D] hover:bg-[#ff7a1f] text-white px-6 py-2 rounded-lg transition-all shadow-md"
                >
                  Go to Learning Page ↗
                </a>
              </div>
            </div>
          </div>
        )}
      </>
    );
  })()}
</HomeSection>
            <div className={`text-center py-12 ${sidebarStyles.sidebarHeader}`}>
                <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">
                    Ready to prove your skills?
                </h3>
                <Link 
                    to="/quiz" 
                    className="inline-flex items-center px-8 py-3 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300
                               bg-white text-[#FF914D] hover:bg-gray-100 hover:scale-[1.05] transform"
                >
                    Start Quiz Now
                    <ArrowRight size={20} className="ml-3" />
                </Link>
            </div>
        </div>
    );
};

export default Home;