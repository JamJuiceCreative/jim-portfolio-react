import React, { useState } from 'react';
import menuBarIcon from '../Assets/Images/menu-bar-icon.svg';
import jimIllustration from '../Assets/Images/jim-lister-illustration.png'; 
import homeIcon from '../Assets/Images/home icon.svg'; 
import '../index.scss';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <div className='header-container'>
            <div className='header-top'>
                <img className="home-icon" src ={ homeIcon } alt ="Home Icon" />
                <div className = "outside-nav">
                    <nav className ="nav">
                        <ul>
                            <span className ="header-top-span"></span>
                            <li>
                                <a href="/index.html">About</a>
                            </li>
                            <li>
                                <a href="./pages/projects.html">Projects</a>
                            </li>
                            <li>
                                <a href="./pages/gallery.html">Gallery</a>
                            </li>
                            <li>
                                <a href="./pages/blog.html">Blog</a>
                            </li>
                            <li>
                                <a href="./pages/contact.html">Say Hi</a>
                            </li>
                        </ul>
                    </nav>
                    
                    <h1>
                        Jim Lister Full Stack Designer Developer
                    </h1>
                </div>
            </div>
            <div className='header-bottom'>
                <img className="jim-illustration" src={jimIllustration} alt="Jim Lister Illustration" />
                <img className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
                    src={menuBarIcon}
                    alt="Hamburger Menu"
                    onClick={toggleMenu}/>
            </div>
            {isMenuOpen && (
                <div className="dropdown-menu">
                <ul>
                    <li>
                    <a href="#">About</a>
                    </li>
                    <li>
                    <a href="#">Projects</a>
                    </li>
                    <li>
                    <a href="#">Gallery</a>
                    </li>
                    <li>
                    <a href="#">Blog</a>
                    </li>
                    <li>
                    <a href="#">Say Hi</a>
                    </li>
                </ul>
                </div>
            )}
        </div>
    );
};

export default Header