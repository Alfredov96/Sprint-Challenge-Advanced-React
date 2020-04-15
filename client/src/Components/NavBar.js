import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode'

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(); 
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };
    return (
      <nav className="navbar">
        <p>click the button and watch magic happen</p>
        <div className="dark-mode__toggle">
          <button
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </nav>
    );
  };

  export default Navbar;