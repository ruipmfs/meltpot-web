import MeltpotLogo from '../assets/mp_logo.png'
import MeltpotLogoNegative from '../assets/mp_logo_negative.png'
import '../sass/_header.scss'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { toggleLanguage } from '../store';

interface HeaderProps {
    changeLanguage: () => void;
    isLightMode?: boolean
}

// @ts-ignore
const Header: React.FC<HeaderProps> = ({ changeLanguage, isLightMode= false }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const checkIsScrolled = () => {
        if (window.scrollY >= 80) {
            setIsScrolled(true)
        }
        else {
            setIsScrolled(false)
        }
    }

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
    const [hasSlogan, setHasSlogan] = useState(window.innerWidth >= 1400);
    const checkIsMobile = () => {
        if (window.innerWidth <= 900) {
            setIsMobile(true)
        }
        else {
            setIsMobile(false)
        }
    }

    const checkHasSlogan = () => {
        if (window.innerWidth >= 1400) {
            setHasSlogan(true)
        }
        else {
            setHasSlogan(false)
        }
    }

    const [isOpen, handleClick] = useState(false);
    const [isPortuguese, setIsPortuguese] = useState(true);

    window.addEventListener('scroll', checkIsScrolled);
    window.addEventListener('resize', checkHasSlogan);
    window.addEventListener('resize', checkIsMobile);

    if (isLightMode) {
        return (
            <div className="lf-header" >
                <img className="lf-header__image-delete" src={MeltpotLogoNegative} alt="Logo"></img>
                <div className="lf-header__options">
                    <button className={isPortuguese ? "lf-bold lf-header__options--selected" : "lf-bold"} onClick={() => { changeLanguage(); setIsPortuguese(true); }}>PT</button>
                    <span>|</span>
                    <button className={!isPortuguese ? "lf-bold lf-header__options--selected" : "lf-bold"} onClick={() => { changeLanguage(); setIsPortuguese(false); }}>EN</button>
                </div>
            </div>
        )
    }

    if (isMobile) {
        return (
            <div className={isScrolled ? 'lf-header lf-header-white' : 'lf-header' && isOpen ? 'lf-header lf-header-white' : 'lf-header'}>
                <div className="lf-header__container">
                    <a className="lf-header__image" href="#"><img src={(isScrolled || isOpen) ? MeltpotLogoNegative : MeltpotLogo} alt="Logo"></img></a>
                    <a className="lf-header__button" onClick={ () => handleClick(!isOpen) }><FontAwesomeIcon icon={faChevronDown} beat style={(isOpen || isScrolled) ? {color: "#000000", height: 40, width: 40} : {color: "#ffffff", height: 40, width: 40}} /></a>
                </div>
                {isOpen && <nav className="lf-header__nav">
                    <a href="#about" onClick={ () => handleClick(!isOpen) }>{ isPortuguese ? "Como funciona?" : "How does it work?"}</a>
                    <a href="#events" onClick={ () => handleClick(!isOpen) }>{isPortuguese ? "Onde estamos?" : "Where are we?"}</a>
                    <a href="#t&c" onClick={ () => handleClick(!isOpen) }>T&C</a>
                    <div className="lf-header__nav-lang">
                        <button className={isPortuguese ? "lf-bold lf-header__nav-lang--selected" : "lf-bold"} onClick={() => { changeLanguage(); setIsPortuguese(true); }}>PT</button>
                        <span>|</span>
                        <button className={!isPortuguese ? "lf-bold lf-header__nav-lang--selected" : "lf-bold"} onClick={() => { changeLanguage(); setIsPortuguese(false); }}>EN</button>
                    </div>
                </nav>}
            </div>
        );
    }
    else {
        return (
            <div className={isScrolled ? 'lf-header lf-header-white' : 'lf-header'}>
                {hasSlogan && <a className="lf-header__image" href="#"><img src={isScrolled ? MeltpotLogoNegative : MeltpotLogo} alt="Logo"></img></a>}
                {!hasSlogan && <a className="lf-header__image" href="#"><img src={isScrolled ? MeltpotLogoNegative : MeltpotLogo} alt="Logo"></img></a>}
                <nav className="lf-header__nav">
                    <a href="#about">{ isPortuguese ? "Como funciona?" : "How does it work?"}</a>
                    <a href="#events">{ isPortuguese ? "Onde estamos?" : "Where are we?"}</a>
                    <a href="#t&c">T&C</a>
                    <div className="lf-header__nav-lang">
                        <button className={isPortuguese ? "lf-bold lf-header__nav-lang--selected" : "lf-bold"} onClick={() => { changeLanguage(); setIsPortuguese(true); }}>PT</button>
                        <span>|</span>
                        <button className={!isPortuguese ? "lf-bold lf-header__nav-lang--selected" : "lf-bold"} onClick={() => { changeLanguage(); setIsPortuguese(false); }}>EN</button>
                    </div>
                </nav>
            </div>
        );
    }
}
// @ts-ignore
const mapStateToProps = (state) => ({
    isPortuguese: state.isPortuguese,
});

// @ts-ignore
const mapDispatchToProps = (dispatch) => ({
    changeLanguage: () => dispatch(toggleLanguage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);