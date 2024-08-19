import './App.scss';
import BackgroundVid from './assets/background-vid.mp4';
import Phone from './assets/phone_frame.png';
import DripImg from './assets/drip.png';
import QRCode from './assets/mp_qr_code.png';
import AppStoreBtn from './assets/app-store-badge.png';
import PlayStoreBtn from './assets/google-play-badge.png';
import Header from "./components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { TypeAnimation } from "react-type-animation";
import {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { toggleLanguage } from './store';
import Leiria from "./assets/leiria.png";
import Caldas from "./assets/caldas.png";
import More from "./assets/more.jpg";
import {Card} from 'primereact/card';
import {Button} from "primereact/button";
import {Accordion} from "primereact/accordion";
import {AccordionTab} from "primereact/accordion";

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

    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

    useEffect(() => {
        window.innerWidth < 900 ? setIsMobile(true) : setIsMobile(false);
    }, [window.innerWidth]);

    window.addEventListener('scroll', checkIsScrolled);

    const image = document.getElementById('slideImage');

    window.addEventListener('scroll', function() {
        const imagePosition = image?.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        console.log('image pos', imagePosition);
        console.log('screen pos', screenPosition);
        console.log('scroll pos', window.scrollY);

        if ((imagePosition ?? 0) < window.scrollY) {
            image?.classList.add('visible');
        }
    });

    const cardFooter = (
        <>
            <Button className="mp-events__card--button p-button p-button-secondary" label={isPortuguese ? "Participar" : "Join now"} />
        </>
    );

    const cardHeader = (src: string) => {
        return <img alt="Card" src={src} className="mp-events__card--image" />;
    }

    // @ts-ignore
    // @ts-ignore
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
                        style={{ whiteSpace: 'pre-line', display: 'block', fontFamily: "'Oranienbaum', cursive", height: isMobile ? '60px' : '420px', fontSize: isMobile ? '200%' : '500%'}}
                        sequence={[
                            `You,\n5 Strangers,\n1 Coffee Spot,\nWhat are you waiting for?`,
                            2000,
                            '',
                        ]}
                        repeat={Infinity}
                    />
                    {!isMobile && <a className="mp-homepage__container__qr-code" href="#downloads">
                        <img src={QRCode} alt="QR Code"/>
                    </a>}
                </div>
                { !isScrolled && <a href="#about" className="mp-homepage__button"><FontAwesomeIcon icon={faChevronDown} beat style={{color: "#ffffff", height: 50, width: 50}} /></a> }
            </div>
            <div className="mp-about" id="about">
                <h1>{isPortuguese ? "Como funciona?" : "How does it work?"}</h1>
                <div className="mp-about__container">
                    <div className="mp-about__container--text">
                        <p>{ isPortuguese ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis orci sed nibh accumsan vehicula. Pellentesque in ipsum enim. Sed a accumsan libero, vitae molestie dolor. Phasellus sapien lacus, blandit eget erat maximus, imperdiet rhoncus neque. Etiam viverra quam in neque condimentum egestas. Nullam euismod massa vel dolor imperdiet viverra." : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis orci sed nibh accumsan vehicula. Pellentesque in ipsum enim. Sed a accumsan libero, vitae molestie dolor. Phasellus sapien lacus, blandit eget erat maximus, imperdiet rhoncus neque. Etiam viverra quam in neque condimentum egestas. Nullam euismod massa vel dolor imperdiet viverra."}</p>
                        <p>{ isPortuguese ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis orci sed nibh accumsan vehicula. Pellentesque in ipsum enim. Sed a accumsan libero, vitae molestie dolor. Phasellus sapien lacus, blandit eget erat maximus, imperdiet rhoncus neque. Etiam viverra quam in neque condimentum egestas. Nullam euismod massa vel dolor imperdiet viverra." : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis orci sed nibh accumsan vehicula. Pellentesque in ipsum enim. Sed a accumsan libero, vitae molestie dolor. Phasellus sapien lacus, blandit eget erat maximus, imperdiet rhoncus neque. Etiam viverra quam in neque condimentum egestas. Nullam euismod massa vel dolor imperdiet viverra."}</p>
                    </div>
                    <img id="slideImage" src={ Phone } alt="Logo"></img>
                </div>
            </div>
            <div className="mp-bg-container">
                <div className="mp-events" id="events">
                    <h1 style={{ color: '#ffffff' }}>{isPortuguese ? "Onde estamos?" : "Where are we?"}</h1>
                    <div className="mp-events__card-container">
                        <Card title="Leiria" subTitle={isPortuguese ? "Todas as quarta-feiras" : "Every wednesday"} footer={cardFooter} header={() => cardHeader(Leiria)} className="md:w-25rem">
                            <p className="m-0">
                                {isPortuguese ? "Leiria é a cidade Natal de quase toda a equipa, e por isso tem, um valor enorme para nós. É aqui que tudo começa, preparado para uma tarde/noite inesquecível?" :
                                    "Leiria is the hometown of almost the entire team, so it has a huge value for us. This is where it all starts, are you ready for an unforgettable afternoon/evening?"
                                }
                            </p>
                        </Card>
                        <Card title="Caldas da Rainha" subTitle={isPortuguese ? "Todas as sexta-feiras" : "Every friday"} footer={cardFooter} header={() => cardHeader(Caldas)} className="md:w-25rem">
                            <p className="m-0">
                                {isPortuguese ? "Caldas da Rainha foi a cidade onde realizamos o nosso primeiro teste da aplicação. Também é a cidade natal de um dos fundadores. Repleto de gente social, estarás ao nível deles?" :
                                    "Caldas da Rainha was the city where we carried out our first test of the app. It's also the hometown of one of the founders. Full of social people, are you on their level?"
                                }
                            </p>
                        </Card>
                        <Card title={isPortuguese ? "Em breve" : "Coming soon"} subTitle={isPortuguese ? "Fica atendo" : "Stay aware"} footer={cardFooter} header={() => cardHeader(More)}>
                            <p className="m-0">
                                {isPortuguese ? "Novidades muito em breve!" :
                                    "News very soon!"
                                }
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="mp-tc" id="t&c">
                <img className="mp-tc__drip" src={DripImg} alt="Drip" />
                <h1>{isPortuguese ? "Termos & Condições" : "Terms and Conditions"}</h1>
                <span style={{ color: 'black'}}>
                    {isPortuguese ? "Bem-vindo ao site do Meltpot. Este site é propriedade e gerido pelo Meltpot Unipessoal., uma empresa registada em Leiria, Portugal (NIF XXX-XXX-XXX). Ao utilizar o nosso site, o utilizador aceita as seguintes condições:" : "Welcome to Meltpot. This site is owned and operated by Meltpot Unipessoal, a company registered in Leiria, Portugal (NIF XXX-XXX-XXX), with its registered office at Leiria. By using our site, you agree to the following terms and conditions."}
                </span>
                <br />
                <Accordion activeIndex={0}>
                    <AccordionTab header={isPortuguese ? "Inscrições e reservas": "Registrations and Reservations"}>
                        <p className="m-0">
                            {isPortuguese ? "As inscrições para os eventos abrem todas as quintas-feiras de manhã para a quarta-feira da semana seguinte e encerram na segunda-feira às 13 horas. As inscrições para os eventos só são aceites através da App do Meltpot; as inscrições efectuadas através de outras plataformas serão recusadas." : "Registrations for events open every Tuesday morning for the Wednesday of the following week and close on Monday at 11:59 PM. Registrations for events are only accepted through Meltpot app; registrations made through other platforms will be refused."}
                        </p>
                    </AccordionTab>
                    <AccordionTab header={isPortuguese ? "Eventos": "Events"}>
                        <p className="m-0">
                            {isPortuguese ? "Os eventos realizam-se todas as quartas-feiras às 21h00 e têm uma duração aproximada de duas horas. A morada exacta do estabelecimento é comunicada no dia do evento. Os participantes devem ser maiores de 18 anos e são responsáveis pelas suas próprias facturas. Reservamo-nos o direito de modificar os grupos algumas horas antes do evento para o bom desenrolar da experiência. Não nos responsabilizamos pelo que acontece no estabelecimento nem pelo montante da fatura a pagar. Os bilhetes para o evento comprados não são reembolsáveis." : "Events are held every Wednesday at 9:00 PM and last approximately two hours. The exact address of the café or bar is communicated on the day of the event. Participants must be at least 18 years old and are responsible for their own bills. We reserve the right to modify the groups a few hours before the event for the smooth running of the experience. We are not responsible for what happens at the café or bar nor for the amount of the bill to be paid. Purchased dinner tickets are non-refundable."}
                        </p>
                    </AccordionTab>
                    <AccordionTab header={isPortuguese ? "Assinatura" : "Subscription"}>
                        <p className="m-0">
                            {isPortuguese ? "Cada subscrição é válida por 30 dias e é automaticamente renovável. Pode anular a sua assinatura a qualquer momento, até à véspera do 30º dia. Uma vez cobrada a taxa de subscrição, não será efectuado qualquer reembolso." : "Each subscription is valid for 30 days and is automatically renewable. You can cancel your subscription at any time, up to the day before the 30th day. Once the subscription fee has been charged, no refunds will be issued."}
                        </p>
                    </AccordionTab>
                    <AccordionTab header={isPortuguese ? "Modificação dos Termos e Condições de Utilização" : "Modification of the Terms and Conditions of Use"}>
                        <p className="m-0">
                            {isPortuguese ? "O Meltpot reserva-se o direito de modificar estes termos e condições em qualquer altura sem aviso prévio." : "Meltpot reserves the right to modify these terms and conditions at any time without prior notice."}
                        </p>
                    </AccordionTab>
                    <AccordionTab header={isPortuguese ? "Contactar-nos" : "Contact Us"}>
                        <p className="m-0">
                            {isPortuguese ? "Se tiver alguma questão relacionada com os presentes termos e condições, contacte-nos através do endereço contact@meltpot.pt." : "If you have any questions regarding these terms and conditions, please contact us at contact@meltpot.pt."}
                        </p>
                    </AccordionTab>
                </Accordion>
                <br />
                <br />
                <h1>{isPortuguese ? "Privacidade" : "Privacy"}</h1>
                <span style={{ color: 'black'}}>
                    {isPortuguese ? "No Meltpot, estamos empenhados em proteger e respeitar a sua privacidade." : "At Meltpot, we are committed to protecting and respecting your privacy."}
                </span>
                <span style={{ color: 'black'}}>
                    {isPortuguese ? "A presente política de privacidade explica como utilizamos as informações pessoais que recolhemos sobre si quando utiliza o nosso site Web, App e participa nos nossos eventos." : "This privacy policy explains how we use the personal information we collect about you when you use our website and participate in our events."}
                </span>
                <br />
                <Accordion activeIndex={0}>
                    <AccordionTab header={isPortuguese ? "Que informações recolhemos sobre si?" : "What information do we collect about you?"}>
                        <p className="m-0">
                            {isPortuguese ? "Recolhemos informações sobre si quando se inscreve nos nossos eventos ou quando subscreve a nossa associação. Também recolhemos informações quando fornece voluntariamente comentários e/ou nos contacta." : "We collect information about you when you register for our events or when you subscribe to our membership. We also collect information when you voluntarily provide feedback and/or contact us."}
                        </p>
                    </AccordionTab>
                    <AccordionTab header={isPortuguese ? "Como é que utilizamos estas informações?" : "How do we use this information?"}>
                        <p className="m-0">
                            {isPortuguese ? "Recolhemos informações sobre o utilizador para gerir a sua conta e, se concordar, para lhe enviar e-mails sobre os nossos outros produtos e serviços. Também utilizamos estas informações para o informar sobre o seu grupo do evento." : "We collect information about you in order to manage your account and, if you agree, to send you emails about our other products and services. We also use this information to inform you about your event group."}
                        </p>
                    </AccordionTab>
                    <AccordionTab header={isPortuguese ? "Acesso às suas informações e correção" : "Access to your information and correction"}>
                        <p className="m-0">
                            {isPortuguese ? "O utilizador tem o direito de solicitar uma cópia das informações que temos sobre si. Se pretender solicitar uma cópia de algumas ou de todas as suas informações pessoais, envie-nos um e-mail para contact@meltpot.pt." : "You have the right to request a copy of the information that we hold about you. If you wish to request a copy of some or all of your personal information, please email us at contact@meltpot.pt."}
                        </p>
                    </AccordionTab>
                    <AccordionTab header={isPortuguese ? "Alterações à nossa política de privacidade" : "Changes to our privacy policy"}>
                        <p className="m-0">
                            {isPortuguese ? "A nossa política de privacidade é revista regularmente e publicaremos quaisquer actualizações nesta página Web." : "We keep our privacy policy under regular review and will post any updates on this web page"}
                        </p>
                    </AccordionTab>
                    <AccordionTab header={isPortuguese ? "Como contactar-nos" : "How to contact us"}>
                        <p className="m-0">
                            {isPortuguese ? "Se tiver alguma dúvida sobre a nossa política de privacidade ou sobre as informações que temos sobre si, contacte-nos através do endereço contact@meltpot.pt." : "If you have any questions about our privacy policy or the information we hold about you, please contact us at contact@meltpot.pt."}
                        </p>
                    </AccordionTab>
                </Accordion>
            </div>
            <div className="mp-downloads" id="downloads">
                <span className="mp-downloads__big-txt">{isPortuguese ? 'QUERES EXPERIMENTAR?' : 'EXCITED TO TRY OUR APP?' }</span>
                <span className="mp-downloads__mid-txt">{isPortuguese ? 'ESTÁS À ESPERA DO QUÊ?' : 'WHAT ARE YOU WAITING FOR?' }</span>
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
