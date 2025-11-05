export const navbarStyles = {
  // Main nav container
  nav: "w-full bg-gradient-to-br from-[#FFF9F0] via-[#FFF9F0] to-[#FFF9F0] shadow-2xl py-3 sm:py-4 px-4 sm:px-6 lg:px-10 relative overflow-visible",

  // Decorative pattern
  decorativePattern:
    "absolute inset-0 opacity-10 pointer-events-none hidden sm:block",
  decorativePatternBackground: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 15c-12.5 0-22.5 10-22.5 22.5h10c0-7 5.5-12.5 12.5-12.5s12.5 5.5 12.5 12.5c0 5-3 7.5-7.5 10-4.5 2.5-7.5 7.5-7.5 12.5v5h10v-5c0-2.5 1.5-4 5-5.5 5.5-2.5 10-6.5 10-12 0-12.5-10-22.5-22.5-22.5zm0 55c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5z' fill='%232C2C2C'/%3E%3C/svg%3E")`,

  // Floating bubbles
  bubble1:
    "hidden md:block absolute top-10 left-1/4 w-36 h-36 sm:w-40 sm:h-40 bg-[#FF914D] rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float-slow",
  bubble2:
    "hidden lg:block absolute bottom-5 right-20 w-28 h-28 lg:w-32 lg:h-32 bg-[#CBA1FF] rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float-slower",
  bubble3:
    "hidden md:block absolute top-1/3 left-20 w-20 h-20 md:w-24 md:h-24 bg-[#FFD93D] rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float-slowest",

  // Main container
  container: "max-w-6xl mx-auto flex items-center justify-between relative z-10",

  // Logo section
  logoContainer: "flex items-center flex-shrink-0 gap-3 ",
  logoButton:
    "inline-flex items-center p-0 bg-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CBA1FF] transform transition-transform duration-200",
  logoLink:
    "relative bg-gradient-to-br from-[#FF914D] to-[#CBA1FF] p-0.5 rounded-full flex-shrink-0",
  logoInner: "bg-gradient-to-b from-[#FF914D] to-[#CBA1FF] p-1 rounded-full",
  logoImage:
    "h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border-2 border-[#CBA1FF]",

  // Title section
  titleContainer: "flex items-center gap-3 cursor-pointer",
  titleBackground:
    "bg-gradient-to-r from-[#FF914D]/25 via-[#CBA1FF]/25 to-[#FF914D]/25 xl:ml-40 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-[#FFFFFF]/10 shadow-md max-w-full",
  titleText:
    "text-sm sm:text-base md:text-lg lg:text-2xl font-bold font-[pacifico] text-transparent bg-clip-text bg-gradient-to-r from-[#FF914D] to-[#CBA1FF] text-center truncate",

  // Desktop buttons
  desktopButtonsContainer:
    "hidden md:flex items-center cursor-pointer flex-shrink-0 space-x-3",
  spacer: "hidden sm:block w-2",

  // Button styles
  resultsButton:
    "inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-[#FF914D] to-[#FFD93D] text-white text-sm font-medium shadow-md cursor-pointer transform transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CBA1FF]",
  logoutButton:
    "inline-flex cursor-pointer items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-[#FFD93D] to-[#FF914D] text-white text-sm font-medium shadow-md transform transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CBA1FF]",
  loginButton:
    "inline-flex cursor-pointer items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-[#CBA1FF] to-[#FF914D] text-white text-sm font-medium shadow-md transform transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CBA1FF]",
  buttonIcon: "h-4 w-4 flex-shrink-0",

  activeLinkStyle: 
    "bg-gradient-to-r from-[#e76e1a] to-[#d6c230]  shadow-xl ring-2 ring-offset-2 ring-[#FFD93D]",

  // Mobile menu
  mobileMenuContainer: "md:hidden flex items-center",
  menuToggleButton:
    "inline-flex items-center justify-center p-2 rounded-full bg-white/90 shadow-sm hover:scale-105 transform transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CBA1FF]",
  menuIcon: "h-5 w-5",
  mobileMenuPanel:
    "absolute right-4 top-full mt-3 w-48 bg-[#FFFFFF] rounded-lg shadow-lg border z-50 overflow-hidden",
  mobileMenuList: "divide-y",
  mobileMenuItem:
    "w-full text-left px-4 py-3 flex items-center gap-2 text-sm hover:bg-[#FFF9F0]",
  mobileMenuIcon: "h-4 w-4",

  mobileActiveMenuItem: 
    "font-bold text-[#FF914D] bg-[#FFF9F0] border-l-4 border-[#FF914D]",

  // Animations and utility styles
  animations: `
    @keyframes float-slow {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-16px); }
      100% { transform: translateY(0px); }
    }
    @keyframes float-slower {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    @keyframes float-slowest {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-6px); }
      100% { transform: translateY(0px); }
    }
    .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
    .animate-float-slower { animation: float-slower 9s ease-in-out infinite; }
    .animate-float-slowest { animation: float-slowest 11s ease-in-out infinite; }

    @media (max-width: 420px) {
      nav { padding-left: 12px; padding-right: 12px; }
    }
  `,
};
export const loginStyles = {
  // Page container
  pageContainer:
    "min-h-screen bg-gradient-to-br from-[#FFF9F0] via-[#FFF9F0] to-[#FFF9F0] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden",

  // Background bubbles
  bubble1:
    "pointer-events-none hidden md:block absolute -top-10 -left-24 w-72 h-72 bg-[#FF914D]/30 rounded-full blur-3xl opacity-30 animate-float-slow",
  bubble2:
    "pointer-events-none hidden md:block absolute bottom-10 right-10 w-56 h-56 bg-[#CBA1FF]/30 rounded-full blur-3xl opacity-30 animate-float-slower",

  // Back button
  backButton:
    "absolute top-5 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 text-[#2C2C2C] bg-[#FFFFFF]/70 backdrop-blur-sm px-3 py-2 rounded-full shadow hover:scale-105 transform transition",
  backButtonIcon: "w-4 h-4",
  backButtonText: "text-xs sm:text-sm font-medium",

  // Form container
  formContainer:
    "w-full max-w-sm pt-10 sm:max-w-md md:max-w-lg lg:max-w-lg relative z-20",
  form: "w-full",
  formWrapper: "relative",
  animatedBorder:
    "rounded-3xl p-1 sm:p-[2px] bg-gradient-to-r from-[#FF914D] via-[#FFD93D] to-[#CBA1FF] animate-border",
  formContent:
    "bg-[#FFFFFF]/95 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl",

  // Heading
  heading:
    "flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-semibold mb-5 sm:mb-6",
  headingIcon:
    "inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#FF914D] to-[#CBA1FF] text-white shadow-md",
  headingIconInner: "w-4 h-4 sm:w-5 sm:h-5",
  headingText: "text-[#FF914D]",

  // Subtitle
  subtitle: "text-sm text-[#2C2C2C]/70 mb-5 sm:mb-6",

  // Form labels and inputs
  label: "block mb-4",
  labelText: "text-sm font-medium text-[#2C2C2C]",
  inputContainer: "mt-2 relative",
  inputIcon:
    "absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none",
  inputIconInner: "w-4 h-4 sm:w-5 sm:h-5 text-[#CBA1FF]",
  input:
    "w-full pl-10 sm:pl-12 py-3 rounded-xl transition-shadow duration-150 border focus:outline-none focus:ring-2 focus:ring-[#FFD93D] focus:shadow-md bg-[#FFFFFF]",
  inputNormal: "border-[#FFD93D]/50",
  inputError: "border-red-300",
  passwordInput: "pr-12",
  passwordToggle:
    "absolute inset-y-0 right-0 pr-2 sm:pr-3 flex items-center text-[#2C2C2C]",
  passwordToggleIcon: "w-4 h-4 sm:w-5 sm:h-5",

  // Error messages
  errorText: "mt-2 text-xs text-red-600",
  submitError: "text-sm text-red-600 mb-3",

  // Buttons container
  buttonsContainer: "mt-4 grid gap-3",
  submitButton:
    "w-full inline-flex items-center cursor-pointer justify-center gap-3 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#FF914D] to-[#CBA1FF] text-white font-semibold shadow-lg transform transition disabled:opacity-60",
  submitButtonIcon: "w-4 h-4",
  submitButtonText: "text-sm sm:text-base",

  // Signup section
  signupContainer: "mt-6",
  signupContent:
    "flex flex-col sm:flex-row items-center justify-center gap-3 px-4 py-3 rounded-full bg-[#FFFFFF]/80 backdrop-blur-sm shadow",
  signupText: "text-sm text-[#2C2C2C]",
  signupLink: "text-[#FF914D] font-semibold hover:underline",

  // Animations and styles
  animations: `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');:root{--card-radius:24px;}@keyframes gradient-anim{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}.animate-border{border-radius:var(--card-radius);padding:2px;background:linear-gradient(90deg,rgba(255,145,77,0.95),rgba(203,161,255,0.9),rgba(255,217,61,0.95));background-size:200% 200%;animation:gradient-anim 6s ease infinite}@keyframes float-slow{0%{transform:translateY(0px)}50%{transform:translateY(-18px)}100%{transform:translateY(0px)}}@keyframes float-slower{0%{transform:translateY(0px)}50%{transform:translateY(-10px)}100%{transform:translateY(0px)}}.animate-float-slow{animation:float-slow 8s ease-in-out infinite}.animate-float-slower{animation:float-slower 10s ease-in-out infinite}#login-heading,form,input,button,a,p,label,span{font-family:'Poppins',system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial}@media(max-width:360px){.rounded-3xl{border-radius:14px}}@media(min-width:1024px){.rounded-3xl{border-radius:24px}}`,
};

export const signupStyles = {
  // Page container
  pageContainer:
    "min-h-screen bg-gradient-to-br from-[#FFF9F0] via-[#FFD93D]/30 to-[#FF914D]/30 flex items-center justify-center p-4 sm:p-6 relative",

  // Back button
  backButton:
    "absolute top-5 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 text-[#2C2C2C] bg-white/80 backdrop-blur-sm px-2.5 sm:px-3 py-2 rounded-full shadow hover:scale-105 transform transition",
  backButtonIcon: "w-4 h-4",
  backButtonText: "text-xs sm:text-sm font-medium",

  // Form container
  formContainer: "w-full max-w-sm pt-15 sm:max-w-md md:max-w-lg relative z-10",
  animatedBorder:
    "rounded-3xl p-1 sm:p-[2px] bg-gradient-to-r from-[#FF914D] via-[#FFD93D] to-[#CBA1FF] animate-border",
  formContent:
    "bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl",

  // Heading
  heading:
    "flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4",
  headingIcon:
    "inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#FF914D] to-[#FFD93D] text-white shadow-md",
  headingIconInner: "w-4 h-4 sm:w-5 sm:h-5",
  headingText: "text-[#FF914D]",

  // Subtitle
  subtitle: "text-sm text-gray-600 mb-5 sm:mb-6",

  // Form labels and inputs
  label: "block mb-3 sm:mb-4",
  labelText: "text-sm font-medium text-gray-700",
  inputContainer: "mt-2 relative",
  inputIcon:
    "absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none",
  inputIconInner: "w-4 h-4 sm:w-5 sm:h-5 text-gray-400",
  input:
    "w-full pl-10 sm:pl-12 py-3 rounded-xl transition-shadow duration-150 border focus:outline-none focus:ring-2 focus:ring-[#FF914D]/40 focus:shadow-md bg-white",
  inputNormal: "border-gray-200",
  inputError: "border-red-300",
  passwordInput: "pr-12",
  passwordToggle:
    "absolute inset-y-0 right-0 pr-2 sm:pr-3 flex items-center text-gray-600",
  passwordToggleIcon: "w-4 h-4 sm:w-5 sm:h-5",

  // Error messages
  errorText: "mt-2 text-xs text-red-600",
  submitError: "text-sm text-red-600 mb-3",

  // Buttons container
  buttonsContainer: "mt-4 grid gap-3",
  submitButton:
    "w-full inline-flex cursor-pointer items-center justify-center gap-3 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#FF914D] to-[#FFD93D] text-white font-semibold shadow-lg transform transition hover:scale-[1.02] disabled:opacity-60",

  // Login prompt section
  loginPromptContainer: "mt-5 sm:mt-6",
  loginPromptContent:
    "flex flex-col sm:flex-row items-center justify-center gap-3 px-3 sm:px-4 py-3 rounded-full bg-white/80 backdrop-blur-sm shadow",
  loginPromptText: "text-sm text-gray-700",
  loginPromptLink: "text-[#FF914D] font-semibold hover:underline",

  // Animations and styles
  animations: `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
  :root{--card-radius:24px;}
  @keyframes gradient-anim{
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
  .animate-border{
    border-radius:var(--card-radius);
    padding:2px;
    background:linear-gradient(90deg,#FF914D,#FFD93D,#CBA1FF);
    background-size:200% 200%;
    animation:gradient-anim 6s ease infinite
  }
  #signup-heading,form,input,button,a,p,label,span{
    font-family:'Poppins',system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial
  }
  @media(max-width:360px){.rounded-3xl{border-radius:14px}}
  @media(min-width:1024px){
    .rounded-3xl{border-radius:24px}
    .bg-white\\/95{padding:2.5rem}
  }`
};


export const sidebarStyles = {
  // Page container
  pageContainer: "min-h-screen bg-gradient-to-br from-[#FFF9F0] to-[#FFEAC2]",

  // Mobile overlay 
  mobileOverlay: "fixed inset-0 bg-black/30 z-30 **md:hidden**",

  // Main container
  mainContainer: "flex xl:h-screen xl:overflow-y-hidden",

  // Sidebar styles
  sidebar:
  "fixed top-0 left-0 h-full w-80 z-40 transform transition-transform duration-300 ease-in-out bg-white shadow-lg rounded-r-2xl border-r border-[#FFD93D]/30 overflow-y-auto md:relative md:h-auto md:translate-x-0 md:flex md:flex-col",

  // Sidebar header
  sidebarHeader:
    "top-0 z-20 p-6 bg-gradient-to-r from-[#FF914D]/20 to-[#FFD93D]/30 text-[#2C2C2C] relative overflow-hidden",
  headerDecoration1:
    "absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 bg-white opacity-20 rounded-full",
  headerDecoration2:
    "absolute bottom-0 left-0 w-24 h-24 -mb-12 -ml-12 bg-[#FF914D]/30 opacity-40 rounded-full",
  headerContent: "flex font-[pacifico] items-center justify-between relative z-10",
  logoContainer: "flex items-center space-x-3",
  logoIcon:
    "p-2 bg-white/50 rounded-xl backdrop-blur-sm border border-white shadow-sm",
  logoTitle: "text-2xl font-bold text-[#FF914D]",
  logoSubtitle: "mt-1 text-[#2C2C2C]/70 text-sm",
  closeButton: "md:hidden p-2 rounded-md hover:bg-white/50",

  // Sidebar content
  sidebarContent: "sidebar-content flex-1 overflow-y-auto p-4",
  technologiesHeader: "mb-4 flex items-center justify-between",
  technologiesTitle: "text-lg font-semibold text-[#2C2C2C]",
  technologiesCount:
    "text-xs bg-[#FFD93D]/30 text-[#FF914D] px-2 py-1 rounded-full",

  // Technology items
  techItem: "mb-3",
  techButton:
    "w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 border",
  techButtonSelected: "border-current shadow-md transform scale-[1.02]",
  techButtonNormal:
    "border-gray-100 hover:border-[#FF914D]/40 hover:bg-[#FFF9F0]",
  techButtonContent: "flex items-center space-x-3",
  techIcon: "p-2 rounded-lg border border-[#FFD93D]/30",
  techName: "font-medium text-[#2C2C2C]",

  // Levels container
  levelsContainer:
    " ml-2  bg-[#FFF9F0] rounded-xl border border-[#FFD93D]/30",
  levelsTitle: "text-sm font-medium text-[#2C2C2C] mb-2 flex items-center",
  techBadge:
    "ml-2 text-xs bg-[#FFD93D]/40 text-[#2C2C2C] px-2 py-0.5 rounded-full",

  // Level buttons
  levelButton:
    "w-full flex items-center justify-between cursor-pointer p-3 my-2 rounded-lg border transition-all",
  levelButtonSelected: "border-current shadow-sm font-bold text-[#FF914D]",
  levelButtonNormal: "border-gray-100 hover:bg-white",
  levelButtonContent: "flex items-center space-x-2",
  levelIcon: "p-1.5 rounded-md bg-[#FFD93D]/20",
  levelQuestions:
    "text-xs bg-[#FFD93D]/30 text-[#2C2C2C] px-2 py-1 rounded-full",

  // Sidebar footer
  sidebarFooter:
    "sticky bottom-0 z-20 p-4 border-t border-[#FFD93D]/20 bg-white",
  footerContent: "flex items-center justify-center text-[#2C2C2C]/70",
  footerContentCenter: "text-center text-xs",
  footerHighlight: "mt-1 text-[#FF914D] font-medium",

  // Main content (MODIFIED: Added transition-all)
  mainContent: "flex-1 min-h-screen p-4 md:p-8 ml-0 md:ml-0 **transition-all duration-300 ease-in-out**",

  // Mobile header (MODIFIED: Added md:hidden back)
  mobileHeader: "flex items-center justify-between mb-4 **md:hidden**",
  menuButton: "p-2 rounded-md bg-white shadow-sm",
  mobileTitle: "flex-1 mx-3",
  mobileTechInfo:
    "flex items-center font-[pacifico] justify-center space-x-3",
  mobileTechIcon: "p-2 rounded-md border border-[#FFD93D]/40",
  mobileTechText: "text-center",
  mobileTechName: "text-sm font-semibold text-[#2C2C2C]",
  mobileTechLevel: "text-xs text-[#2C2C2C]/70",
  mobilePlaceholder: "text-center text-sm text-[#2C2C2C]/70",

  // Mobile levels
  mobileLevels: "md:hidden mb-4",
  mobileLevelsContainer: "flex gap-2 overflow-x-auto",
  mobileLevelButton:
    "flex-none px-4 py-2 rounded-xl border border-[#FFD93D]/40 bg-white shadow-sm text-sm font-medium",

  // Welcome screen
  welcomeContainer:
    "h-200 xl:pt-75 font-[pacifico] lg:pb-90 flex items-center justify-center",
  welcomeContent:
    "text-center font-[pacifico] max-w-2xl mx-auto bg-white/90 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-lg border border-white",
  welcomeIcon:
    "inline-flex items-center justify-center p-4 bg-gradient-to-r from-[#FFD93D]/30 to-[#FF914D]/30 rounded-full shadow mb-6",
  welcomeTitle:
    "text-2xl md:text-4xl font-bold text-[#2C2C2C] mb-4 font-[pacifico]",
  welcomeDescription:
    "text-sm md:text-lg text-[#2C2C2C]/70 mb-6 max-w-md mx-auto",

  // Features grid
  featuresGrid:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6",
  featureCard:
    "bg-gradient-to-br from-[#FFF9F0] to-[#FFEAC2] p-4 md:p-5 rounded-2xl border border-[#FFD93D]/30 text-center",
  featureIcon:
    "inline-flex items-center justify-center p-3 bg-[#CBA1FF]/20 text-[#CBA1FF] rounded-full mb-3",
  featureTitle: "font-semibold text-[#2C2C2C] mb-2",
  featureDescription: "text-xs md:text-sm text-[#2C2C2C]/70",

  // Welcome prompt
  welcomePrompt:
    "bg-gradient-to-r from-[#FFD93D]/30 to-[#FF914D]/30 p-3 md:p-4 rounded-2xl border border-[#FFD93D]/30 shadow-inner",
  welcomePromptText: "text-[#2C2C2C] font-medium flex items-center justify-center",

  // Level selection
  levelSelectionContainer:
    "h-full xl:mt-60 md:pb-200 pb-30 flex items-center justify-center",
  levelSelectionContent:
    "text-center bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-[#FFD93D]/30 max-w-md",
  techSelectionIcon:
    "p-5 rounded-2xl inline-flex mb-6 shadow-sm bg-gradient-to-r from-[#FFD93D]/30 to-[#CBA1FF]/30",
  techSelectionTitle:
    "text-2xl md:text-3xl font-bold text-[#2C2C2C] mb-2",
  techSelectionDescription: "text-[#2C2C2C]/70 mb-6",
  techSelectionPrompt:
    "bg-gradient-to-r from-[#FFD93D]/20 to-[#FF914D]/20 p-4 rounded-xl border border-[#FFD93D]/30",
  techSelectionPromptText: "text-[#2C2C2C] font-medium",

  // Results screen
  resultsContainer:
    "h-full lg:pb-140 xl:pb-0 md:pb-90 flex items-center justify-center",
  resultsContent:
    "bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-[#FFD93D]/30 max-w-2xl w-full",
  resultsHeader: "text-center",
  performanceIcon:
    "p-4 rounded-2xl inline-flex mb-6 shadow-sm bg-gradient-to-r from-[#FFD93D]/30 to-[#CBA1FF]/30",
  resultsTitle:
    "text-2xl md:text-4xl font-bold text-[#2C2C2C] mb-2 font-[pacifico]",
  resultsSubtitle: "text-[#2C2C2C]/70 mb-2",
  performanceBadge:
    "inline-block text-[#2C2C2C] px-4 py-1 rounded-full text-sm font-medium mb-6 bg-[#FFD93D]/30",

  // Score grid
  scoreGrid: "grid grid-cols-2 gap-4 mb-6",
  scoreCard:
    "bg-gradient-to-br from-[#FFF9F0] to-[#FFD93D]/20 p-4 rounded-2xl border border-[#FFD93D]/30 text-center",
  scoreIcon:
    "inline-flex items-center justify-center w-12 h-12 bg-[#FFD93D]/30 text-[#FF914D] rounded-full mb-3 shadow-inner",
  scoreNumber: "text-2xl font-bold text-[#FF914D]",
  scoreLabel: "text-[#2C2C2C] font-medium",

  // Score progress
  scoreProgress:
    "bg-gradient-to-r from-[#FFF9F0] to-[#FFD93D]/20 p-4 rounded-2xl border border-[#FFD93D]/30 mb-6",
  scoreProgressHeader: "flex items-center justify-between mb-4",
  scoreProgressTitle: "text-[#FF914D] font-semibold",
  scoreProgressPercentage: "text-[#FF914D] font-bold",
  scoreProgressBar: "w-full bg-gray-200 rounded-full h-4",
  scoreProgressFill:
    "h-4 rounded-full transition-all duration-500 bg-gradient-to-r from-[#FF914D] to-[#FFD93D]",

  // Quiz container
  quizContainer: "max-w-3xl mx-auto",
  quizHeader:
    "mb-4 bg-white p-4 md:p-6 rounded-2xl shadow-md border border-[#FFD93D]/30",
  quizTitleContainer: "flex items-center justify-between mb-2",
  quizTitle: "text-xl md:text-2xl font-bold text-[#2C2C2C]",
  quizCounter:
    "text-sm bg-[#FFD93D]/30 text-[#FF914D] px-3 py-1 rounded-full font-medium",
  progressBar: "w-full bg-gray-200 rounded-full h-2.5 mb-2",
  progressFill:
    "bg-gradient-to-r from-[#FF914D] to-[#FFD93D] h-2.5 rounded-full transition-all duration-500",

  // Question container
  questionContainer:
    "bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-[#FFD93D]/30",
  questionHeader: "flex items-center mb-2",
  questionIcon:
    "bg-[#FFD93D]/40 text-[#FF914D] p-2 rounded-lg mr-3",
  questionText: "text-lg md:text-xl font-semibold text-[#2C2C2C]",

  // Options container
  optionsContainer: "space-y-4 mt-6",
  optionButton:
    "w-full cursor-pointer text-left p-4 md:p-5 rounded-2xl border-2 transition-all duration-300",
  optionNormal:
    "border-gray-100 hover:border-[#FFD93D]/40 hover:bg-[#FFF9F0] hover:shadow-sm",
  optionCorrect:
    "bg-green-50 border-green-300 text-green-700 shadow-sm",
  optionIncorrect:
    "bg-red-50 border-red-300 text-red-700 shadow-sm",
  optionContent: "flex items-center",
  optionIconCorrect: "mr-3 text-green-500 flex-shrink-0",
  optionIconIncorrect: "mr-3 text-red-500 flex-shrink-0",
  optionIconEmpty:
    "w-5 h-5 rounded-full border-2 border-gray-200 mr-3 flex-shrink-0",
  optionText: "text-sm md:text-lg",

  // Loading container
  loadingContainer: "h-full flex items-center justify-center",
  loadingContent:
    "text-center bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-[#FFD93D]/30",
  loadingSpinner:
    "animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF914D] mx-auto mb-4",
  loadingTitle:
    "text-lg md:text-xl font-semibold text-[#2C2C2C] mb-2",
  loadingDescription:
    "text-sm md:text-base text-[#2C2C2C]/70",

  // Custom styles
  customStyles: `
   .sidebar-content {
   -webkit-overflow-scrolling: touch;
   }
  
  aside .sidebar-content::-webkit-scrollbar {
   width: 10px;
   }
   aside .sidebar-content::-webkit-scrollbar-track {
    background: transparent;
   }
   aside .sidebar-content::-webkit-scrollbar-thumb {
    background-color: rgba(255,145,77,0.2);
    border-radius: 999px;
    border: 2px solid transparent;
    background-clip: padding-box;
    }
   aside .sidebar-content::-webkit-scrollbar-thumb:hover {
   background-color: rgba(255,145,77,0.3);
   }
  
   aside .sidebar-content {
   scrollbar-width: thin;
   scrollbar-color: rgba(255,145,77,0.25) transparent;
   }
   `,
};
export const resultStyles = {
  // Page container
  pageContainer: "min-h-screen bg-[#FFF9F0] p-6",
  container: "max-w-6xl font-[pacifico] mx-auto",

  // Header
  header: "mb-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4",
  title: "text-2xl md:text-3xl lg:text-2xl font-semibold text-[#2C2C2C]",
  headerControls: "flex items-center gap-3",

  // Filter section
  filterContainer: "mb-4",
  filterContent: "flex items-center justify-between gap-3",
  filterButtons: "flex flex-wrap items-center gap-2",
  filterLabel: "text-sm text-[#2C2C2C] mr-2",
  filterButton: "px-3 py-1 rounded-full text-sm font-medium border shadow-sm focus:outline-none",
  filterButtonActive: "bg-[#FF914D] text-white",
  filterButtonInactive: "bg-white text-[#2C2C2C]",
  filterStatus: "text-sm text-gray-500",

  // Loading state
  loadingContainer: "text-center py-20",
  loadingSpinner: "inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF914D] mb-4",
  loadingText: "text-[#2C2C2C]",

  // Track sections
  trackSection: "mb-6",
  trackTitle: "text-lg md:text-xl lg:text-lg font-semibold mb-3 text-[#2C2C2C]",

  // Results grid
  resultsGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-4",

  // Empty state
  emptyState: "text-center py-12 text-[#2C2C2C]",

  // Badge styles
  badgeExcellent: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#CBA1FF] text-[#2C2C2C]",
  badgeGood: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#FFD93D] text-[#2C2C2C]",
  badgeAverage: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#FF914D]/20 text-[#2C2C2C]",
  badgeNeedsWork: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800",

  // Card styles
  card: "relative bg-white rounded-lg shadow-sm overflow-hidden border hover:shadow-md transition",
  cardAccent: "absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF914D] to-[#FFD93D]",
  cardContent: "p-4 md:p-5 lg:p-4 flex flex-col h-full",

  // Card header
  cardHeader: "flex items-start justify-between gap-3",
  cardInfo: "flex items-center gap-3 min-w-0",
  levelAvatar: "flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 rounded-md font-semibold text-lg md:text-xl lg:text-lg",
  levelBasic: "bg-[#FFD93D]/30 text-[#2C2C2C]",
  levelIntermediate: "bg-[#CBA1FF]/40 text-[#2C2C2C]",
  levelAdvanced: "bg-[#FF914D]/30 text-[#2C2C2C]",
  cardText: "min-w-0",
  cardTitle: "text-sm md:text-base lg:text-sm font-medium truncate text-[#2C2C2C]",
  cardMeta: "text-xs md:text-sm lg:text-xs text-gray-500",

  // Card performance
  cardPerformance: "text-right",
  performanceLabel: "text-md md:text-md lg:text-md text-gray-500",
  badgeContainer: "mt-1",

  // Card stats
  cardStats: "mt-4",
  statItem: "text-md md:text-md lg:text-md text-[#2C2C2C]",
  statNumber: "font-semibold text-lg md:text-xl lg:text-lg text-[#FF914D]",
};
