
import menuBarIcon from '../../Assets/Images/menu-bar-icon.svg';
import jimIllustration from '../../Assets/Images/jim-lister-illustration.png'; 
import homeIcon from '../../Assets/Images/home icon.svg'; 
import './index.scss';
const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-top'>
                <img className="home-icon" src ={ homeIcon } alt ="Home Icon" />
                
                <h1>
                    Jim Lister Full Stack Designer Developer
                </h1>
            </div>
            <div className='header-bottom'>
                <img className="jim-illustration" src={jimIllustration} alt="Jim Lister Illustration" />
                <img className="hamburger-menu" src={menuBarIcon} alt="Hamburger Menu" />
            </div>
        </div>
    )
}

export default Header