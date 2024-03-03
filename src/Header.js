import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [theme, setTheme] = useState('dark');
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);

  

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const switchTheme = (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll >= 80) {
        document.getElementById('site-header').classList.add('nav-fixed');
      } else {
        document.getElementById('site-header').classList.remove('nav-fixed');
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 991) {
        setMobileMenuActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuActive((prevState) => !prevState);
  };

  const handleNavLinkClick = () => {
    setMobileMenuActive(false);
  };

  return (
    <header id="site-header" className={`fixed-top ${isMobileMenuActive ? 'active' : ''} ${theme}`}>
    <div className="container">
      <nav className={`navbar navbar-expand-lg stroke ${theme}`}>
          <Link className="navbar-brand" to="/" onClick={handleNavLinkClick}>
          <FontAwesomeIcon icon={faLaptop} />Sriram
          </Link>
          

          <button
            className={`navbar-toggler collapsed bg-gradient ${isMobileMenuActive ? 'active' : ''}`}
            type="button"
            onClick={handleMobileMenuToggle}
          >
            <FontAwesomeIcon icon={faBars} class="navbar-toggler-icon fa icon-expand" />
            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
          </button>

          <div className={`collapse navbar-collapse ${isMobileMenuActive ? 'show' : ''}`} id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/" onClick={handleNavLinkClick}>
                  Home<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item @@about__active">
                <Link className="nav-link" to="/about" onClick={handleNavLinkClick}>
                  About
                </Link>
              </li>
              <li className="nav-item @@about__active">
                <Link className="nav-link" to="/services" onClick={handleNavLinkClick}>
                  Skills / Projects
                </Link>
              </li>
              <li className="nav-item @@contact__active">
                <Link className="nav-link" to="/contact" onClick={handleNavLinkClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="mobile-position">
            <nav className="navigation">
              <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                  <input
                    type="checkbox"
                    id="checkbox"
                    checked={theme === 'dark'}
                    onChange={switchTheme}
                  />
                  <div className="mode-container">
                    <i className="gg-sun"></i>
                    <i className="gg-moon"></i>
                  </div>
                </label>
              </div>
            </nav>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
