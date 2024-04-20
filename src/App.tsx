import './App.scss';
import BackgroundVid from './assets/background-vid.mp4';
import Logo from './assets/mp_logo_noname.png';
import Header from "./components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { TypeAnimation } from "react-type-animation";
import {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { toggleLanguage } from './store';

function App() {
    // @ts-ignore
    const isPortuguese = useSelector((state) => state.isPortuguese);
    const dispatch = useDispatch();
    const updateLang = () => {
        dispatch(toggleLanguage());
    }

    const [isScrolled, setIsScrolled] = useState(false);
    const checkIsScrolled = () => {
        if (window.scrollY >= 80) {
            setIsScrolled(true)
        }
        else {
            setIsScrolled(false)
        }
    }

    window.addEventListener('scroll', checkIsScrolled);

    return (
        <div className="mp-homepage">
            <video autoPlay loop muted playsInline className="mp-homepage__background-vid">
                <source src={BackgroundVid} type="video/mp4"></source>
            </video>
            {/* @ts-ignore*/}
            <Header changeLanguage={ updateLang } />
            <div className="mp-homepage__container">
                <TypeAnimation className="mp-homepage__container__type-animation"
                    style={{ whiteSpace: 'pre-line', height: '420', display: 'block', fontFamily: "'Oranienbaum', cursive" }}
                    sequence={[
                        `When was the last time you had a coffee with strangers?\nNever? We got you covered!`,
                        2000,
                        '',
                    ]}
                    repeat={Infinity}
                />
                { !isScrolled && <a href="#about" className="mp-homepage__button"><FontAwesomeIcon icon={faChevronDown} beat style={{color: "#ffffff", height: 50, width: 50}} /></a> }
            </div>
            <div className="mp-about" id="about">
                <h1>{isPortuguese ? "Quem Somos?" : "Who are we?"}</h1>
                <div className="mp-about__container">
                    <div className="mp-about__container--text">
                        <p>{ isPortuguese ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis orci sed nibh accumsan vehicula. Pellentesque in ipsum enim. Sed a accumsan libero, vitae molestie dolor. Phasellus sapien lacus, blandit eget erat maximus, imperdiet rhoncus neque. Etiam viverra quam in neque condimentum egestas. Nullam euismod massa vel dolor imperdiet viverra." : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis orci sed nibh accumsan vehicula. Pellentesque in ipsum enim. Sed a accumsan libero, vitae molestie dolor. Phasellus sapien lacus, blandit eget erat maximus, imperdiet rhoncus neque. Etiam viverra quam in neque condimentum egestas. Nullam euismod massa vel dolor imperdiet viverra."}</p>
                        <p>{ isPortuguese ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis orci sed nibh accumsan vehicula. Pellentesque in ipsum enim. Sed a accumsan libero, vitae molestie dolor. Phasellus sapien lacus, blandit eget erat maximus, imperdiet rhoncus neque. Etiam viverra quam in neque condimentum egestas. Nullam euismod massa vel dolor imperdiet viverra." : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis orci sed nibh accumsan vehicula. Pellentesque in ipsum enim. Sed a accumsan libero, vitae molestie dolor. Phasellus sapien lacus, blandit eget erat maximus, imperdiet rhoncus neque. Etiam viverra quam in neque condimentum egestas. Nullam euismod massa vel dolor imperdiet viverra."}</p>
                    </div>
                    <img src={ Logo } alt="Logo"></img>
                </div>
            </div>
            <div className="mp-bg-container">
                <div className="mp-events" id="events">
                    <h1 style={{ color: '#ffffff' }}>{isPortuguese ? "Próximos Eventos" : "Next Events"}</h1>
                </div>
            </div>
            <div className="mp-tc" id="t&c">
                <h1>{isPortuguese ? "Termos & Condições" : "Terms and Conditions"}</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget metus congue, iaculis diam et, auctor urna. Maecenas eget nibh mauris. Integer congue ac diam id iaculis. Nullam bibendum eu augue eget lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in malesuada risus, quis mollis purus. Morbi tempor nec ipsum sed posuere.
                </p>
                <p>
                    Nunc tempus sit amet justo eu suscipit. Aliquam in nunc convallis, commodo ligula eget, lobortis sapien. In ut purus et magna mattis ultricies sit amet vel quam. Nulla pharetra finibus dignissim. Morbi at orci quis massa luctus tristique. Mauris at malesuada justo, ut sagittis nisi. Proin interdum, purus ut finibus commodo, diam orci molestie augue, non egestas nibh leo eget orci.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar sodales libero, non elementum ante sodales vel. Nullam sed eros sit amet nunc convallis consectetur mollis eu ipsum. Duis iaculis dui nec elementum tristique. Fusce suscipit ipsum sed gravida sollicitudin. Duis in neque eros. Vestibulum felis nibh, dignissim in elit eget, facilisis posuere leo. Aenean convallis maximus ex vel tempus. Nullam a eleifend dui. Duis pulvinar lacus ut massa dignissim, ut commodo turpis varius. Ut ultricies sed nisi vitae pretium.
                </p>
            </div>
            <div className="mp-downloads">
                <h1>TEMPTED TO TRY OUR APP?</h1>
                <h2>What are you waiting for?</h2>
            </div>
            <div className="mp-footer mp-bg-container">
                <p>© {(new Date().getFullYear())} All Rights Reserved. Meltpot</p>
            </div>
        </div>
    )
}
export default App
