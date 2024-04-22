import './App.scss';
import BackgroundVid from './assets/background-vid.mp4';
import Logo from './assets/mp_logo_noname.png';
import DripImg from './assets/drip.png';
import QRCode from './assets/mp_qr_code.png';
import AppStoreBtn from './assets/app-store-badge.png';
import PlayStoreBtn from './assets/google-play-badge.png';
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
                <div className="mp-homepage-welcome-txt">
                    <TypeAnimation
                        className="mp-homepage__container__type-animation"
                        style={{ whiteSpace: 'pre-line', display: 'block', fontFamily: "'Oranienbaum', cursive", height: '420px' }}
                        sequence={[
                            `You,\n5 Strangers,\n1 Coffee Spot,\nWhat are you waiting for?`,
                            2000,
                            '',
                        ]}
                        repeat={Infinity}
                    />
                    <a className="mp-homepage__container__qr-code" href="#downloads">
                        <img src={QRCode} alt="QR Code"/>
                    </a>
                </div>
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
                    <p>Currently, we are doing events every Wednesday. The meeting hour may vary from event to event. Here are the places we are currently available:</p>
                    <ul>
                        <li>Leiria</li>
                        <li>Caldas da Rainha</li>
                    </ul>
                    <p>More information available soon!</p>
                </div>
            </div>
            <div className="mp-tc" id="t&c">
                <img className="mp-tc__drip" src={DripImg} alt="Drip" />
                <h1>{isPortuguese ? "Termos & Condições" : "Terms and Conditions"}</h1>
                <span style={{ color: 'black'}}>
                    {isPortuguese ? "Bem-vindo ao site do Meltpot. Este site é propriedade e gerido pelo Meltpot Unipessoal., uma empresa registada em Leiria, Portugal (NIF XXX-XXX-XXX). Ao utilizar o nosso site, o utilizador aceita as seguintes condições:" : "Welcome to Meltpot. This site is owned and operated by Meltpot Unipessoal, a company registered in Leiria, Portugal (NIF XXX-XXX-XXX), with its registered office at Leiria. By using our site, you agree to the following terms and conditions."}
                </span>
                <br />
                <h3 style={{ color: 'black'}}>{isPortuguese ? "Inscrições e reservas": "Registrations and Reservations"}</h3>
                <span style={{ color: 'black'}}>
                    {isPortuguese ? "As inscrições para os eventos abrem todas as quintas-feiras de manhã para a quarta-feira da semana seguinte e encerram na segunda-feira às 13 horas. As inscrições para os eventos só são aceites através da App do Meltpot; as inscrições efectuadas através de outras plataformas serão recusadas." : "Registrations for events open every Tuesday morning for the Wednesday of the following week and close on Monday at 11:59 PM. Registrations for events are only accepted through Meltpot app; registrations made through other platforms will be refused."}
                </span>
                <br />
                <h3 style={{ color: 'black'}}>{isPortuguese ? "Eventos": "Events"}</h3>
                <span style={{ color: 'black'}}>
                    {isPortuguese ? "Os eventos realizam-se todas as quartas-feiras às 21h00 e têm uma duração aproximada de duas horas. A morada exacta do estabelecimento é comunicada no dia do evento. Os participantes devem ser maiores de 18 anos e são responsáveis pelas suas próprias facturas. Reservamo-nos o direito de modificar os grupos algumas horas antes do evento para o bom desenrolar da experiência. Não nos responsabilizamos pelo que acontece no estabelecimento nem pelo montante da fatura a pagar. Os bilhetes para o evento comprados não são reembolsáveis." : "Events are held every Wednesday at 9:00 PM and last approximately two hours. The exact address of the café or bar is communicated on the day of the event. Participants must be at least 18 years old and are responsible for their own bills. We reserve the right to modify the groups a few hours before the event for the smooth running of the experience. We are not responsible for what happens at the café or bar nor for the amount of the bill to be paid. Purchased dinner tickets are non-refundable."}
                </span>
                <br />
                <h3 style={{ color: 'black'}}>{isPortuguese ? "Assinatura" : "Subscription"}</h3>
                <span style={{ color: 'black'}}>
                    {isPortuguese ? "Cada subscrição é válida por 30 dias e é automaticamente renovável. Pode anular a sua assinatura a qualquer momento, até à véspera do 30º dia. Uma vez cobrada a taxa de subscrição, não será efectuado qualquer reembolso." : "Each subscription is valid for 30 days and is automatically renewable. You can cancel your subscription at any time, up to the day before the 30th day. Once the subscription fee has been charged, no refunds will be issued."}
                </span>
                <br />
                <h3 style={{ color: 'black'}}>{isPortuguese ? "Modificação dos Termos e Condições de Utilização" : "Modification of the Terms and Conditions of Use"}</h3>
                <span style={{ color: 'black'}}>
                    {isPortuguese ? "O Meltpot reserva-se o direito de modificar estes termos e condições em qualquer altura sem aviso prévio." : "Meltpot reserves the right to modify these terms and conditions at any time without prior notice."}
                </span>
                <br />
                <h3 style={{ color: 'black'}}>{isPortuguese ? "Contactar-nos" : "Contact Us"}</h3>
                <span style={{ color: 'black'}}>
                    {isPortuguese ? "Se tiver alguma questão relacionada com os presentes termos e condições, contacte-nos através do endereço contact@meltpot.pt." : "If you have any questions regarding these terms and conditions, please contact us at contact@meltpot.pt."}
                </span>
                <br />
                <h1>{isPortuguese ? "Privacidade" : "Privacy"}</h1>
                <span style={{ color: 'black'}}>
                    {isPortuguese ? "No Meltpot, estamos empenhados em proteger e respeitar a sua privacidade." : "At Meltpot, we are committed to protecting and respecting your privacy."}
                </span>
                <span style={{ color: 'black'}}>
                    {isPortuguese ? "A presente política de privacidade explica como utilizamos as informações pessoais que recolhemos sobre si quando utiliza o nosso site Web, App e participa nos nossos eventos." : "This privacy policy explains how we use the personal information we collect about you when you use our website and participate in our events."}
                </span>
                <h3 style={{ color: 'black'}}>{isPortuguese ? "Que informações recolhemos sobre si?" : "What information do we collect about you?"}</h3>
                <span style={{ color: 'black'}}>
                    {isPortuguese ? "Recolhemos informações sobre si quando se inscreve nos nossos eventos ou quando subscreve a nossa associação. Também recolhemos informações quando fornece voluntariamente comentários e/ou nos contacta." : "We collect information about you when you register for our events or when you subscribe to our membership. We also collect information when you voluntarily provide feedback and/or contact us."}
                </span>
                <br />
                <h3 style={{ color: 'black'}}>{isPortuguese ? "Como é que utilizamos estas informações?" : "How do we use this information?"}</h3>
                <span style={{ color: 'black'}}>
                    {isPortuguese ? "Recolhemos informações sobre o utilizador para gerir a sua conta e, se concordar, para lhe enviar e-mails sobre os nossos outros produtos e serviços. Também utilizamos estas informações para o informar sobre o seu grupo do evento." : "We collect information about you in order to manage your account and, if you agree, to send you emails about our other products and services. We also use this information to inform you about your event group."}
                </span>
                <br />
                <h3 style={{ color: 'black'}}>{isPortuguese ? "Acesso às suas informações e correção" : "Access to your information and correction"}</h3>
                <span style={{ color: 'black'}}>
                    {isPortuguese ? "O utilizador tem o direito de solicitar uma cópia das informações que temos sobre si. Se pretender solicitar uma cópia de algumas ou de todas as suas informações pessoais, envie-nos um e-mail para contact@meltpot.pt." : "You have the right to request a copy of the information that we hold about you. If you wish to request a copy of some or all of your personal information, please email us at contact@meltpot.pt."}
                </span>
                <br />
                <h3 style={{ color: 'black'}}>{isPortuguese ? "Alterações à nossa política de privacidade" : "Changes to our privacy policy"}</h3>
                <span style={{ color: 'black'}}>
                    {isPortuguese ? "A nossa política de privacidade é revista regularmente e publicaremos quaisquer actualizações nesta página Web." : "We keep our privacy policy under regular review and will post any updates on this web page"}
                </span>
                <br />
                <h3 style={{ color: 'black'}}>{isPortuguese ? "Como contactar-nos" : "How to contact us"}</h3>
                <span style={{ color: 'black'}}>
                    {isPortuguese ? "Se tiver alguma dúvida sobre a nossa política de privacidade ou sobre as informações que temos sobre si, contacte-nos através do endereço contact@meltpot.pt." : "If you have any questions about our privacy policy or the information we hold about you, please contact us at contact@meltpot.pt."}
                </span>
            </div>
            <div className="mp-downloads" id="downloads">
                <span className="mp-downloads__big-txt">EXCITED TO TRY OUR APP?</span>
                <span className="mp-downloads__mid-txt">WHAT ARE YOU WAITING FOR?</span>
                <div className="mp-downloads__btn-container">
                    <a className="mp-downloads__button" href="https://www.apple.com/pt/app-store/" target="__blank">
                        <img src={AppStoreBtn} alt="AppStore"></img>
                    </a>
                    <a className="mp-downloads__button" href="https://play.google.com/store/games?device=windows" target="__blank">
                        <img src={PlayStoreBtn} alt="PlayStore"></img>
                    </a>
                </div>
            </div>
            <div className="mp-footer mp-bg-container">
                <p>© {(new Date().getFullYear())} All Rights Reserved. Meltpot</p>
            </div>
        </div>
    )
}
export default App
