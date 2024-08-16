import { Footer } from "../components/Footer/Footer";
import MeltpotLogoNegative from "../assets/mp_logo_negative.png";
import {useRef, useState} from "react";
import {FloatLabel} from "primereact/floatlabel";
import {InputText} from "primereact/inputtext";
import Header from "../components/Header";
import {useDispatch, useSelector} from "react-redux";
import {toggleLanguage} from "../store";
import {Button} from "primereact/button";
import axios from 'axios';
import {ConfirmDialog} from "primereact/confirmdialog";
import {Toast} from "primereact/toast";

export const DeleteAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);

    const isPortuguese = useSelector((state) => state.isPortuguese);

    const dispatch = useDispatch();
    const updateLang = () => {
        dispatch(toggleLanguage());
    }
    const checkIsMobile = () => {
        if (window.innerWidth <= 900) {
            setIsMobile(true)
        }
        else {
            setIsMobile(false)
        }
    }

    window.addEventListener('resize', checkIsMobile);

    async function handleSubmit() {
        let axiosConfig = {
            baseURL: 'https://api.meltpot.pt/api/v1',
            headers: {
                'Content-Type': 'application/json',
                //Authorization: `Bearer ${loginAuth}`,
            },
        };

        try {
            const response = await axios.post('/auth/login', { email, password }, axiosConfig);
            const token = response.data.token;

            console.log(token);

            axiosConfig = {
                baseURL: 'https://api.meltpot.pt/api/v1',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            };

            await axios.delete('/consumer', axiosConfig);
            toast.current.show({ severity: 'success', summary: 'Deleted', detail: 'You have deleted your account', life: 3000 });
        } catch (err) {
            toast.current.show({ severity: 'error', summary: 'Failed', detail:`${err?.response?.data?.message ?? 'Try again later'}`, life: 3000 });
        }
    }

    return (
        <div className="mp-delete-account">
            <Header changeLanguage={ updateLang } isLightMode />
            <div className="mp-delete-account__body">
                {!isMobile && <img className="mp-delete-account__image" src={MeltpotLogoNegative} alt="Logo"/>}
                <div className="mp-delete-account__container">
                    <h3 className="mp-black">{ isPortuguese ? 'Lamentamos que queira eliminar a conta. Depois de eliminada, todo o seu conteúdo será permanentemente apagado, incluindo o perfil e eventos inscritos.' : 'We\'re sorry to see you go. Once your account is deleted, all of your content will be permanently gone, including your profile and subscribed events.' }</h3>
                    <div className="mp-delete-account__input">
                        <FloatLabel>
                            <InputText className="mp-delete-account__input-text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="email">Email</label>
                        </FloatLabel>
                    </div>
                    <div className="mp-delete-account__input">
                        <FloatLabel>
                            <InputText className="mp-delete-account__input-text" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="password">Password</label>
                        </FloatLabel>
                    </div>
                    <Toast ref={toast} />
                    <ConfirmDialog
                        group="declarative"
                        visible={visible}
                        onHide={() => setVisible(false)}
                        message="Are you sure you want to proceed?"
                        header="Confirmation"
                        icon="pi pi-exclamation-triangle"
                        accept={handleSubmit}
                        reject={() => setVisible(false)}
                        style={{ width: '50vw' }}
                        breakpoints={{ '1100px': '75vw', '960px': '100vw' }}
                    />
                    <Button className="mp-delete-account__input-button" onClick={() => setVisible(true)} label={isPortuguese ? 'Eliminar conta' : 'Delete Account'} severity="warning" raised />
                </div>
            </div>
            <Footer />
        </div>
    );
};