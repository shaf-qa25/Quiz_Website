import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { navbarStyles } from "../assets/dummyStyles";
import { Award, LogOut, LogIn, X, Menu, UserPlus, TargetIcon } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    try {
      const u = localStorage.getItem("authToken");
      setLoggedIn(!!u);
    } catch (e) {
      setLoggedIn(false);
    }

    const handler = (ev) => {
      const detailUser = ev?.detail?.user ?? null;
      setLoggedIn(!!detailUser);
    };
    window.addEventListener("authChanged", handler);

    return () => window.removeEventListener("authChanged", handler);
  }, []);

  const handleLogout = () => {
    try {
      localStorage.removeItem('authToken');
    } catch (e) {
      console.error("Logout error", e);
    }
    window.dispatchEvent(
      new CustomEvent("authChanged", { detail: { user: null } })
    );
    setMenuOpen(false);
    try {
      navigate('/login');
    } catch (e) {
      window.location.href = "/login";
    }

    
  };
  const getNavLinkClassName = (isActive, baseStyle) => {
    return isActive 
      ? `${baseStyle} ${navbarStyles.activeLinkStyle || 'font-bold text-indigo-600'}` // 'font-bold text-indigo-600' is a placeholder
      : baseStyle;
  };

  return (
    <nav className={navbarStyles.nav}>
      <div style={{ backgroundImage: navbarStyles.decorativePatternBackground }}
        className={navbarStyles.decorativePattern}></div>

      <div className={navbarStyles.bubble1}></div>
      <div className={navbarStyles.bubble2}></div>
      <div className={navbarStyles.bubble3}></div>
      <div className={navbarStyles.container}>
        <div className={navbarStyles.logoContainer}>
          <Link to="/" className={navbarStyles.logoButton}>
            <div className={navbarStyles.logoInner}>
              <img
                src={
                  "https://images.unsplash.com/photo-1666458949289-563618017a86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464"
                }
                alt="QuizMaster logo"
                className={navbarStyles.logoImage}
              />
            </div>
          </Link>
        </div>

        <div className={navbarStyles.titleContainer}>
          <div className={navbarStyles.titleBackground}>
            <h1 className={navbarStyles.titleText}>MindUp</h1>
          </div>
        </div>

        <div className={navbarStyles.desktopButtonsContainer}>
          <div className={navbarStyles.spacer}></div>
          <NavLink
            to='/quiz'
            className={({ isActive }) => getNavLinkClassName(isActive, navbarStyles.resultsButton)}
          ><TargetIcon className={navbarStyles.buttonIcon}/>
          Play Quiz</NavLink>
          <NavLink to='/result' className={navbarStyles.resultsButton}>
            <Award className={navbarStyles.buttonIcon} />
            My Result
          </NavLink>

          {loggedIn ? (
            <button
              onClick={handleLogout} className={navbarStyles.loginButton}>
              <LogOut className={navbarStyles.buttonIcon} />
              Logout
            </button>
          ) :
            (
              <>
                <NavLink to="/signup" className={navbarStyles.loginButton}>
                  <UserPlus className={navbarStyles.buttonIcon} />
                  Sign Up
                </NavLink>
                <NavLink to="/login" className={navbarStyles.loginButton}>
                  <LogIn className={navbarStyles.buttonIcon} />
                  Login
                </NavLink>
              </>
            )}
        </div>
        <div className={navbarStyles.mobileMenuContainer}>
          <button onClick={() => setMenuOpen((s) => !s)}
            className={navbarStyles.menuToggleButton}>
            {menuOpen ? (
              <X className={navbarStyles.menuIcon} />
            ) : (
              <Menu className={navbarStyles.menuIcon} />
            )}
          </button>

          {menuOpen && (
            <div className={navbarStyles.mobileMenuPanel}>
              <ul className={navbarStyles.mobileMenuList}>

              <li>
                  <NavLink
                    to="/quiz"
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) => getNavLinkClassName(isActive, navbarStyles.mobileMenuItem)}
                  >
                    <Menu className={navbarStyles.mobileMenuIcon} />
                    Play Quiz
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/result" className={navbarStyles.mobileMenuItem} onClick={() => setMenuOpen(false)}>
                    <Award className={navbarStyles.mobileMenuIcon} />
                    My Result
                  </NavLink>
                </li>

                {loggedIn ? (
                  <li>
                    <button type='button' onClick={handleLogout} className={navbarStyles.mobileMenuItem}>
                      <LogOut className={navbarStyles.mobileMenuIcon} />
                      Logout
                    </button>
                  </li>
                ) : (
                  <>
                  <li>
                            <NavLink to="/signup" className={navbarStyles.mobileMenuItem} onClick={()=> setMenuOpen(false)}>
                                <UserPlus className={navbarStyles.mobileMenuIcon}/>
                                Sign Up
                            </NavLink>
                        </li>
                  <li>
                    <NavLink to="/login" className={navbarStyles.mobileMenuItem} onClick={() => setMenuOpen(false)}>
                      <LogIn className={navbarStyles.mobileMenuIcon} />
                      Login
                    </NavLink>
                  </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
      <style>{navbarStyles.animations}</style>
    </nav>
  );
};

export default Navbar
