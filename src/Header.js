
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Header() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const switchTheme = (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
  };

    return  (<header id="site-header" className="fixed-top">
    <div className="container">
      <nav className="navbar navbar-expand-lg stroke">
        <Link className="navbar-brand" to="/" ><span className="fa fa-laptop"></span> Sriram</Link>
        
        <button className="navbar-toggler collapsed bg-gradient" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
          <span className="navbar-toggler-icon fa icon-close fa-times"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
              
            </li>
            <li className="nav-item @@about__active">
            <Link className="nav-link" to="/about">About</Link>
             
            </li>
            <li className="nav-item @@about__active">
            <Link className="nav-link" to="/services">Skills / Projects</Link>
             
            </li>
            <li className="nav-item @@contact__active">
            <Link className="nav-link" to="/contact">Contact</Link>
             
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
  </header>)
}
export default Header;