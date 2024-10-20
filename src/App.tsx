import "./App.scss";
import BackgroundVid from "./assets/background-vid.mp4";
import Phone from "./assets/phone_frame.png";
import DripImg from "./assets/drip.png";
import QRCode from "./assets/qr-code.png";
import AppStoreBtn from "./assets/app-store-badge.png";
import PlayStoreBtn from "./assets/google-play-badge.png";
import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLanguage } from "./store";
import Leiria from "./assets/leiria.png";
import Caldas from "./assets/caldas.png";
import More from "./assets/more.jpg";
import { Card } from "primereact/card";
import { Accordion } from "primereact/accordion";
import { AccordionTab } from "primereact/accordion";

function App() {
  // @ts-ignore
  const isPortuguese = useSelector((state) => state.isPortuguese);
  const dispatch = useDispatch();
  const updateLang = () => {
    dispatch(toggleLanguage());
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const checkIsScrolled = () => {
    if (window.scrollY >= 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    window.innerWidth < 900 ? setIsMobile(true) : setIsMobile(false);
  }, [window.innerWidth]);

  window.addEventListener("scroll", checkIsScrolled);

  const cardFooter = (
    <>
      <a className="mp-events__card--button p-button p-button-secondary" href="#downloads">
        {isPortuguese ? "Participar" : "Join now"}
      </a>
    </>
  );

  const cardHeader = (src: string) => {
    return <img alt="Card" src={src} className="mp-events__card--image" />;
  };

  // @ts-ignore
  return (
    <div className="mp-homepage">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="mp-homepage__background-vid"
      >
        <source src={BackgroundVid} type="video/mp4"></source>
      </video>
      {/* @ts-ignore*/}
      <Header changeLanguage={updateLang} />
      <div className="mp-homepage__container">
        <div className="mp-homepage-welcome-txt">
          {isPortuguese ?
              <TypeAnimation
                  key={isPortuguese}
                  className="mp-homepage__container__type-animation"
                  style={{
                    whiteSpace: "pre-line",
                    display: "block",
                    fontFamily: "'Oranienbaum', cursive",
                    height: isMobile ? "60px" : "420px",
                    fontSize: isMobile ? "200%" : "500%",
                  }}
                  sequence={[
                    `Tu,\nDesconhecidos,\nCafés,\nDo que estás à espera?`,
                    2000,
                    "",
                  ]}
                  repeat={Infinity}
              />
              :
              <TypeAnimation
                  key={isPortuguese}
                  className="mp-homepage__container__type-animation"
                  style={{
                    whiteSpace: "pre-line",
                    display: "block",
                    fontFamily: "'Oranienbaum', cursive",
                    height: isMobile ? "60px" : "420px",
                    fontSize: isMobile ? "200%" : "500%",
                  }}
                  sequence={[
                    `You,\nStrangers,\nCoffee Spots,\nWhat are you waiting for?`,
                    2000,
                    "",
                  ]}
                  repeat={Infinity}
              />
          }
          {!isMobile && (
            <a className="mp-homepage__container__qr-code" href="#downloads">
              <img src={QRCode} alt="QR Code" />
            </a>
          )}
        </div>
        {!isScrolled && (
          <a href="#about" className="mp-homepage__button">
            <FontAwesomeIcon
              icon={faChevronDown}
              beat
              style={{ color: "#ffffff", height: 50, width: 50 }}
            />
          </a>
        )}
      </div>
      <div className="mp-about" id="about">
        <h1>{isPortuguese ? "Sobre" : "About"}</h1>
        <div className="mp-about__container">
          <div className="mp-about__container--text">
            <span className="mp-black">{isPortuguese ? "Quebre o gelo e conheça pessoas novas com Meltpot!" : "Break the ice and meet new people with Meltpot!"}</span>
            <span className="mp-black">{isPortuguese ? "Mudou-se recentemente para uma nova cidade? Ou apenas quer expandir o seu círculo social e conhecer pessoas novas? Com Meltpot, sair da sua zona de conforto nunca foi tão fácil e divertido." : "Have you recently moved to a new city? Or do you just want to expand your social circle and meet new people? With Meltpot, getting out of your comfort zone has never been so easy and fun."}</span>
            <span className="mp-black">{isPortuguese ? "Esta aplicação foi desenhada para te ajudar a conectar com pessoas interessantes, seja para fazer novos amigos, encontrar colegas com interesses semelhantes, ou até mesmo descobrir novos grupos e comunidades locais." : "This app is designed to help you connect with interesting people, whether it's making new friends, finding colleagues with similar interests, or even discovering new local groups and communities."}</span>
            <span className="mp-black">{isPortuguese ? "Deixa a timidez de lado, explora novas oportunidades sociais e cria memórias incríveis connosco." : "Let go of your shyness, explore new social opportunities and create amazing memories with us."}</span>
            <span className="mp-black">{isPortuguese ? "Faz já o download e dá o primeiro passo para uma vida social mais rica e emocionante!" : "Download now and take the first step towards a richer, more exciting social life!"}</span>
            <br />
            <h3 className="mp-black">{isPortuguese ? "Como funciona?" : "How does it work?"}</h3>
            <span className="mp-black">{isPortuguese ? "Depois de fazeres download da aplicação e fazeres o teu registo, vais encontrar uma lista com os próximos eventos disponíveis nas cidades aderentes." : "Once you've downloaded the app and registered, you'll find a list of upcoming events in the host cities."}</span>
            <span className="mp-black">{isPortuguese ? "Ao subscreveres um evento gratuitamente, ficamos automaticamente a contar com a tua presença para o mesmo, e para o qual te vamos divulgando mais informação na app à medida que este se aproxima." : "By subscribing to an event for free, we automatically expect you to attend it, and we'll give you more information about it in the app as it gets closer."}</span>
            <span className="mp-black">{isPortuguese ? "Durante o evento vais desafiar a tua zona de conforto e conhecer pessoas incríveis na cidade onde te encontras. Agradece-nos depois ;)" : "During the event you'll challenge your comfort zone and meet incredible people in the city you're in. Thank us later ;)"}</span>
          </div>
          <img id="slideImage" src={Phone} alt="Logo"></img>
        </div>
      </div>
      <div className="mp-bg-container">
        <div className="mp-events" id="events">
          <h1 style={{ color: "#ffffff" }}>
            {isPortuguese ? "Cidades" : "Cities"}
          </h1>
          <div className="mp-events__card-container">
            <Card
              title="Leiria"
              /*subTitle={
                isPortuguese ? "Todas as quarta-feiras" : "Every wednesday"
              }*/
              footer={cardFooter}
              header={() => cardHeader(Leiria)}
              className="md:w-25rem"
            >
              <p className="m-0 mp-events__card--text">
                {isPortuguese
                  ? "Leiria é uma cidade encantadora, situada entre colinas verdes e o rio Lis. Destaca-se pelo seu castelo medieval, que oferece vistas panorâmicas da cidade. A mistura de história, cultura e natureza faz de Leiria um destino agradável e acolhedor."
                  : "Leiria is a charming Portuguese city, nestled between green hills and the Lis River. It is known for its medieval castle, which offers panoramic views of the city. The blend of history, culture, and nature makes Leiria a pleasant and welcoming destination."}
              </p>
            </Card>
            <Card
              title="Caldas da Rainha"
              /*subTitle={isPortuguese ? "Todas as sexta-feiras" : "Every friday"}*/
              footer={cardFooter}
              header={() => cardHeader(Caldas)}
              className="md:w-25rem"
            >
              <p className="m-0 mp-events__card--text">
                {isPortuguese
                  ? "Caldas da Rainha é uma cidade conhecida pelas suas termas e tradição cerâmica. O Parque D. Carlos I e o museu de cerâmica refletem a sua herança artística e cultural. É uma cidade vibrante, com mercados tradicionais e um ambiente acolhedor."
                  : "Caldas da Rainha is a Portuguese city known for its thermal baths and ceramic tradition. The D. Carlos I Park and the ceramic museum reflect its artistic and cultural heritage. It is a vibrant city with traditional markets and a warm atmosphere."}
              </p>
            </Card>
            <Card
                className="mp-events__card"
              title={isPortuguese ? "Em breve" : "Coming soon"}
              /*subTitle={isPortuguese ? "Fica atendo" : "Stay aware"}*/
              header={() => cardHeader(More)}
            >
              <p className="m-0 mp-events__card--text">
                {isPortuguese ? "Novidades muito em breve!" : "News very soon!"}
              </p>
            </Card>
          </div>
        </div>
      </div>
      <div className="mp-tc" id="t&c">
        <img className="mp-tc__drip" src={DripImg} alt="Drip" />
        <h1>{isPortuguese ? "Termos & Condições" : "Terms and Conditions"}</h1>
        <span style={{ color: "black" }}>
          {isPortuguese
            ? "Bem-vindo ao site do Meltpot. Ao utilizar o nosso site, o utilizador aceita as seguintes condições:" // Este site é propriedade e gerido pelo Meltpot Unipessoal., uma empresa registada em Leiria, Portugal (NIF XXX-XXX-XXX).
            : "Welcome to Meltpot. By using our site, you agree to the following terms and conditions." /*This site is owned and operated by Meltpot Unipessoal, a company registered in Leiria, Portugal (NIF XXX-XXX-XXX), with its registered office at Leiria.*/}
        </span>
        <br />
        <Accordion activeIndex={-1}>
          <AccordionTab
            header={
              isPortuguese
                ? "Inscrições e reservas"
                : "Registrations and reservations"
            }
          >
            {isPortuguese ?
              <ul className="m-0">
                <li>As inscrições para os eventos são aceites exclusivamente através da aplicação Meltpot. Registos efetuados através de outras plataformas serão recusados.</li>
                <li>Ao registar-se num evento, o utilizador concorda em cumprir os termos descritos neste acordo. Se não puder comparecer, é da sua responsabilidade cancelar o registo antes do início do evento.</li>
              </ul>
              :
              <ul className="m-0">
                <li>Event registrations are only accepted through the Meltpot app. Registrations made through other platforms will be refused.</li>
                <li>By registering for an event, you agree to comply with the terms outlined in this agreement. If you cannot attend, it is your responsibility to cancel your registration before the event begins.</li>
              </ul>
            }
          </AccordionTab>
          <AccordionTab header={isPortuguese ? "Eventos" : "Events"}>
            <p className="m-0">
              {isPortuguese ?
                <>
                  <ul className="m-0">
                    <li>Os eventos são realizados em diferentes horários e locais, que serão comunicados aos participantes antes do evento.</li>
                    <li>Os participantes devem ter, no mínimo, 18 anos para se registarem e participarem nos eventos.</li>
                    <li>Os participantes são responsáveis pelo pagamento das suas próprias contas, incluindo qualquer comida ou bebida consumida durante o evento. A Meltpot não se responsabiliza por disputas ou discrepâncias relativas aos pagamentos efetuados no local do evento.</li>
                    <li>Reservamo-nos o direito de modificar os grupos algumas horas antes do evento para o bom desenrolar da experiência.</li>
                  </ul>
                  <p><strong>Declaração:</strong> Não nos responsabilizamos pelo que acontece no estabelecimento nem pelo montante da fatura a pagar.</p>
                </>
                :
                <>
                  <ul className="m-0">
                    <li>Events are held at various times and locations, which will be communicated to participants before the event.</li>
                    <li>Participants must be at least 18 years old to register for and attend events.</li>
                    <li>Participants are responsible for paying their own bills, including any food or drinks consumed during the event. Meltpot is not liable for any disputes or discrepancies regarding payments made at the event venue.</li>
                    <li>Meltpot reserves the right to adjust group assignments shortly before the event to ensure a smooth experience.</li>
                  </ul>
                  <p><strong>Disclaimer:</strong> Meltpot is not responsible for what happens at the café or bar nor for the amount of the bill to be paid.</p>
                </>
              }
            </p>
          </AccordionTab>
          {/*<AccordionTab header={isPortuguese ? "Assinatura" : "Subscription"}>
            <p className="m-0">
              {isPortuguese
                ? "Cada subscrição é válida por 30 dias e é automaticamente renovável. Pode anular a sua assinatura a qualquer momento, até à véspera do 30º dia. Uma vez cobrada a taxa de subscrição, não será efectuado qualquer reembolso."
                : "Each subscription is valid for 30 days and is automatically renewable. You can cancel your subscription at any time, up to the day before the 30th day. Once the subscription fee has been charged, no refunds will be issued."}
            </p>
          </AccordionTab>*/}
          <AccordionTab
            header={
              isPortuguese
                ? "Modificação dos Termos e Condições de Utilização"
                : "Modification of the Terms and Conditions of Use"
            }
          >
            <p className="m-0">
              {isPortuguese ?
                <ul className="m-0">
                  <li>A Meltpot reserva-se o direito de modificar estes termos e condições a qualquer momento, sem aviso prévio. Quaisquer alterações entrarão em vigor imediatamente após serem publicadas na aplicação ou no nosso site.</li>
                  <li>A utilização contínua da aplicação Meltpot após modificações nestes termos constituirá a sua aceitação dos termos revisados. Recomendamos que reveja periodicamente estes termos para se manter informado sobre quaisquer atualizações.</li>
                </ul>
              :
                <ul className="m-0">
                  <li>Meltpot reserves the right to modify these terms and conditions without prior notice. Any changes will take effect immediately upon being posted in the app or on our website.</li>
                  <li>Continued use of the Meltpot app after modifications to these terms will constitute your acceptance of the revised terms. We encourage you to periodically review these terms to stay informed about any updates.</li>
                </ul>
              }
            </p>
          </AccordionTab>
          <AccordionTab header={isPortuguese ? "Contactar-nos" : "Contact us"}>
            <p className="m-0">
              {isPortuguese
                ? <p>Se tiver alguma questão relacionada com os presentes termos e condições, contacte-nos através do endereço <a href="mailto:contact@meltpot.pt">contact@meltpot.pt</a></p>
                : <p>If you have any questions regarding these terms and conditions, please contact us at <a href="mailto:contact@meltpot.pt">contact@meltpot.pt</a></p>}
            </p>
          </AccordionTab>
        </Accordion>
        <br />
        <br />
        <h1>{isPortuguese ? "Privacidade" : "Privacy"}</h1>
        <span style={{ color: "black" }}>
          {isPortuguese
            ? "No Meltpot, estamos empenhados em proteger e respeitar a sua privacidade."
            : "At Meltpot, we are committed to protecting and respecting your privacy."}
        </span>
        <span style={{ color: "black" }}>
          {isPortuguese
            ? "A presente política de privacidade explica como utilizamos as informações pessoais que recolhemos sobre si quando utiliza o nosso site Web, App e participa nos nossos eventos."
            : "This privacy policy explains how we use the personal information we collect about you when you use our website and participate in our events."}
        </span>
        <br />
        <Accordion activeIndex={-1}>
          <AccordionTab
            header={
              isPortuguese
                ? "Que informações recolhemos sobre si?"
                : "What information do we collect about you?"
            }
          >
            <p className="m-0">
              {isPortuguese
                ? "Recolhemos informações sobre si quando se inscreve nos nossos eventos ou quando subscreve a nossa associação. Também recolhemos informações quando fornece voluntariamente comentários e/ou nos contacta."
                : "We collect information about you when you register for our events or when you subscribe to our membership. We also collect information when you voluntarily provide feedback and/or contact us."}
            </p>
          </AccordionTab>
          <AccordionTab
            header={
              isPortuguese
                ? "Como é que utilizamos estas informações?"
                : "How do we use this information?"
            }
          >
            <p className="m-0">
              {isPortuguese
                ? "Recolhemos informações sobre o utilizador para gerir a sua conta e, se concordar, para lhe enviar e-mails sobre os nossos outros produtos e serviços. Também utilizamos estas informações para o informar sobre o seu grupo do evento."
                : "We collect information about you in order to manage your account and, if you agree, to send you emails about our other products and services. We also use this information to inform you about your event group."}
            </p>
          </AccordionTab>
          <AccordionTab
            header={
              isPortuguese
                ? "Acesso às suas informações e correção"
                : "Access to your information and correction"
            }
          >
            <p className="m-0">
              {isPortuguese
                  ? <p>O utilizador tem o direito de solicitar uma cópia das informações que temos sobre si. Se pretender solicitar uma cópia de algumas ou de todas as suas informações pessoais, envie-nos um e-mail para <a href="mailto:contact@meltpot.pt">contact@meltpot.pt</a></p>
                  : <p>You have the right to request a copy of the information that we hold about you. If you wish to request a copy of some or all of your personal information, please email us at <a href="mailto:contact@meltpot.pt">contact@meltpot.pt</a></p>}
            </p>
          </AccordionTab>
          <AccordionTab
            header={
              isPortuguese
                ? "Alterações à nossa política de privacidade"
                : "Changes to our privacy policy"
            }
          >
            <p className="m-0">
              {isPortuguese
                ? "A nossa política de privacidade é revista regularmente e publicaremos quaisquer actualizações nesta página Web."
                : "We keep our privacy policy under regular review and will post any updates on this web page"}
            </p>
          </AccordionTab>
          <AccordionTab header={isPortuguese ? "Como contactar-nos" : "How to contact us"}>
            <p className="m-0">
              {isPortuguese
                  ? <p>Se tiver alguma dúvida sobre a nossa política de privacidade ou sobre as informações que temos sobre si, contacte-nos através do endereço <a href="mailto:contact@meltpot.pt">contact@meltpot.pt</a></p>
                  : <p>If you have any questions about our privacy policy or the information we hold about you, please contact us at <a href="mailto:contact@meltpot.pt">contact@meltpot.pt</a></p>}
            </p>
          </AccordionTab>
        </Accordion>
      </div>
      <div className="mp-downloads" id="downloads">
        <span className="mp-downloads__big-txt">
          {isPortuguese ? "QUERES EXPERIMENTAR?" : "EXCITED TO TRY OUR APP?"}
        </span>
        <span className="mp-downloads__mid-txt">
          {isPortuguese
            ? "ESTÁS À ESPERA DO QUÊ?"
            : "WHAT ARE YOU WAITING FOR?"}
        </span>
        <div className="mp-downloads__btn-container">
          <a
            className="mp-downloads__button"
            href="https://apps.apple.com/pt/app/meltpot/id6651821277"
            target="__blank"
          >
            <img src={AppStoreBtn} alt="AppStore"></img>
          </a>
          <a
            className="mp-downloads__button"
            href="https://play.google.com/store/apps/details?id=pt.meltpot.meltpotapp"
            target="__blank"
          >
            <img src={PlayStoreBtn} alt="PlayStore"></img>
          </a>
        </div>
      </div>
      <div className="mp-footer mp-bg-container">
        <p>© {new Date().getFullYear()} All Rights Reserved. Meltpot</p>
      </div>
    </div>
  );
}
export default App;
