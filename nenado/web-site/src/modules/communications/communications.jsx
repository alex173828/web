import React from 'react';

import axios from 'axios';

import Agreement from 'blocks/agreement/agreement.jsx';
import Politics from 'blocks/politics/politics.jsx';
import Address from 'blocks/address/address.jsx';

import {AnimationContext} from 'src/js/contexts/animation/animation';
import {ModalContext} from 'src/js/contexts/modal/modal';

const CommunicationsWithContext = props => (
    <AnimationContext.Consumer>
        {({animation}) => (
            <ModalContext.Consumer>
                {({open}) => (
                    <Communications
                        {...{
                            animation,
                            open
                        }}
                        {...props}
                    />
                )}
            </ModalContext.Consumer>
        ) }
    </AnimationContext.Consumer>
);

class Communications extends React.Component {
    constructor(props) {
        super(props);

        this._animationTimer = null;

        this.state = {
            openAddress: false,
            openPolitics: false,
            openAgreement: false,

            loading: false,
            name: '',
            email: '',
            msg: '',

            animatedDescription: '',
            animatedContacts: '',
            animatedFooter: '',
            animatedForm: ''
        }
    }

    _startAnimation() {
        setTimeout(() => this.setState({
            animatedDescription: 'description_animated',
            animatedForm: 'form_feedback_animated',
            animatedContacts: 'contacts_animated',
            animatedFooter: 'footer_animated'
        }), 300);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.animation && !prevProps.animation)
            this._startAnimation();
    }

    componentDidMount() {
        if(this.props.animation) this._startAnimation();
    }

    componentWillUnmount() {
        clearTimeout(this._animationTimer);
    }

    // Form
    updateValue(e, name) {
        const value = e.target.value;
        const newState = {};

        newState[name] = value;
        this.setState(newState);
    }

    isName(value) {
        return String(value).trim().length != 0;
    }

    isEmail(value) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(String(value).toLowerCase());
    }

    isMsg(value) {
        return String(value).trim().length != 0;
    }

    sendEmail() {
        const {
            updateValue,
            isEmail,
            isName,
            isMsg,
            state: {
                msg,
                name,
                email
            }
        } = this;

        const err = [];
        if (!Boolean(name) || !isName(name))
            err.push('Заполните корректно поле "Имя"')
        if (!Boolean(email) || !isEmail(email))
            err.push('Заполните корректно поле "E-mail"')
        if (!Boolean(msg) || !isMsg(msg))
            err.push('Заполните корректно поле "Сообщение"')
        if (err.length != 0)
            return console.log('err', err)/* Show modal window */;

        this.setState({
            loading: true
        })
        const subject = 'Nenado.pro. Обратная связь. Познакомимся?'
        axios.post('/wp-content/themes/nenado/mail.php', {
            subject,
            email,
            name,
            msg
        }).then(res => {
            for(key in ['msg', 'name', 'email'])
                updateValue({e:{ target: {value: ''}}}, key);
                this.setState({
                    loading: false
                })
            // Show modal. Ok.
        }).catch(err => {
            this.setState({
                loading: false
            });
            console.log('error', err)
            // Show modal. Smth wrong...
        })

    }

    openAddress() {
        this.props.open(<Address />, "modal__content_address");
    }

    openPolitics() {
        this.props.open(<Politics />, "modal__content_politics");
    }

    openAgreement() {
        this.props.open(<Agreement />, "modal__content_agreement");
    }

    render() {
        return(
            <div className="communications">

            <div className={`description communications__description ${this.state.animatedDescription}`}>
            <div className="title communications__title">Познакомимся?</div>
            <div className="subtitle communications__subtitle">Свяжитесь с нами в любое время наиболее удобным для вас способом</div>
            </div>
            <form className={`form form_feedback ${this.state.animatedForm}`}>
                <div className="form__group">
                    <div className="label form__label">Имя</div>
                    <input
                        value={this.state.name}
                        onChange={event => this.updateValue(event, 'name')}
                        type="text"
                        className="input form__input"
                        placeholder="Ваше ваше имя"
                    />
                </div>

                <div className="form__group">
                    <div className="label form__label">E-mail</div>
                    <input
                        value={this.state.email}
                        onChange={event => this.updateValue(event, 'email')}
                        type="emial"
                        className="input form__input"
                        placeholder="Введите ваш E-mail"
                    />
                </div>

                <div className="form__group form__group_textarea">
                    <div className="label form__label">Сообщение</div>
                    <textarea
                        value={this.state.msg}
                        onChange={event => this.updateValue(event, 'msg')}
                        rows="7"
                        className="textarea form__textarea"
                        placeholder="Введите ваше сообщение"
                    />
                </div>

                <button
                    onClick={::this.sendEmail}
                    className="button button_feedback"
                >
                    { this.state.loading? 'Отправляется...' : 'Отправить сообщение' }
                </button>
            </form>

            <div className={`contacts ${this.state.animatedContacts}`}>
                <div className="container contacts__container">
                    <svg className="icon contacts__icon">
                        <use xlinkHref="#phone-receiver" />
                    </svg>
                    <div className="contacts__data">
                        +7 (495) 006 92 35
                    </div>
                </div>
                <div className="container contacts__container">
                    <svg className="icon contacts__icon">
                        <use xlinkHref="#black-back-closed-envelope-shape" />
                    </svg>
                    <div className="contacts__data">
                        Клиентам: hello@nenado.pro <br /> Работать с нами: hr@nenado.pro <br /> Сотрудничество: partner@nenado.pro
                    </div>
                </div>
                <div className="container contacts__container">
                    <svg className="icon contacts__icon">
                        <use xlinkHref="#maps-and-flags" />
                    </svg>
                    <div className="contacts__data">
                        Москва, Полковая ул. 3с2, Офис 616 <br /> м. Марьина роща <br />
                        <a
                            className="link contacts__link"
                            href="#"
                            onClick={::this.openAddress}
                        >
                            Cхема проезда
                        </a>
                    </div>
                </div>
                <div className="socials">
                    <a href="https://vk.com/nenadopro" className="link socials__link">
                        <svg className="icon socials__icon">
                            <use xlinkHref="#vk-social-network-logo" />
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/channel/UCo-Yu107lpkYPP5cWSfme2w?view_as=subscriber" className="link socials__link">
                        <svg className="icon socials__icon">
                            <use xlinkHref="#youtube" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/nenado.pro" className="link socials__link">
                        <svg className="icon socials__icon">
                            <use xlinkHref="#instagram-logo" />
                        </svg>
                    </a>
                    {/* <a href="#" className="link socials__link">
                        <svg className="icon socials__icon">
                            <use href="#whatsapp" />
                        </svg>
                    </a>
                    <a href="#" className="link socials__link">
                        <svg className="icon socials__icon">
                            <use href="#telegram" />
                        </svg>
                    </a> */}
                    <a href="https://www.facebook.com/nenado.pro" className="link socials__link">
                        <svg className="icon socials__icon">
                            <use xlinkHref="#facebook-logo" />
                        </svg>
                    </a>
                </div>

                <a href="https://goo.gl/forms/IT0DCKxbLN9eb0973" className="button contacts__button">Заполнить бриф</a>
                </div>
                <div className={`footer ${this.state.animatedFooter}`}>
                    <a
                        href="#"
                        className="link link_modal"
                        onClick={::this.openPolitics}
                    >
                        Политика конфиденциальности
                    </a>
                    <a
                        href="#"
                        className="link link_modal"
                        onClick={::this.openAgreement}
                    >
                        Пользовательское соглашение
                    </a>
                    <br />Сopyright 2018
                </div>
            </div>
        );
    }
}

export default CommunicationsWithContext;

// import './communications.scss';
