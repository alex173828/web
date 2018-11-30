import React from 'react';
import Form from 'blocks/form/_feedback/form_feedback.jsx';

import {AnimationContext} from 'src/js/contexts/animation/animation';
import {ModalContext} from 'src/js/contexts/modal/modal';

const ServicesWithContext = props => (
    <AnimationContext.Consumer>
        {({animation}) => (
            <ModalContext.Consumer>
                {({open}) => (
                    <Services
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

class Services extends React.Component {
    constructor(props) {
        super(props)

        this._animationTimer = null;

        this.state = {
            animatedDescription: '',
            animatedCards: ''
        };
    }

    _startAnimation() {
        setTimeout(() => this.setState({
            animatedDescription: 'description_animated',
            animatedCards: 'services__cards_animated'
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

    togglerModal({subject}) {
        this.props.open((
            <Form
                subject={subject}
            />
        ))
    }

    render() {
        const togglerModal = ::this.togglerModal;
        return (
            <div className="services">
                <div className={`description ${this.state.animatedDescription}`}>
                    <div className="title">Услуги</div>
                </div>

                <div className={`services__cards ${this.state.animatedCards}`}>
                    <div className="card services__card">
                        <div className="card__header">
                            <div className="title card__title">Marketing & Business events</div>
                        </div>

                        <div className="card__body">
                            <ul className="list services__list">
                                <li className="list__item">Семинары</li>
                                <li className="list__item">Презентации</li>
                                <li className="list__item">Форумы</li>
                                <li className="list__item">Переговоры</li>
                                <li className="list__item">Конференции</li>
                                <li className="list__item">Выставки</li>
                                <li className="list__item">Открытие офисов</li>
                            </ul>
                        </div>
                        <div className="card__footer">
                            <button className="button" onClick={() => togglerModal({subject: 'Marketing & Business events'})}>Организовать</button>
                        </div>
                    </div>

                    <div className="card services__card">
                        <div className="card__header">
                            <div className="title card__title">Special<br />events</div>
                        </div>

                        <div className="card__body">
                            <ul className="list services__list">
                                <li className="list__item">Концерты</li>
                                <li className="list__item">Фестивали</li>
                                <li className="list__item">Концертные туры</li>
                            </ul>
                        </div>

                        <div className="card__footer">
                            <button className="button" onClick={() => togglerModal({subject: 'Special<br />events'})}>Организовать</button>
                        </div>
                    </div>

                    <div className="card services__card">
                        <div className="card__header">
                            <div className="title card__title">Corporate & Private events</div>
                        </div>

                        <div className="card__body">
                            <ul className="list services__list">
                                <li className="list__item">Team-building</li>
                                <li className="list__item">Проф. праздники</li>
                                <li className="list__item">Спорт. мероприятия</li>
                                <li className="list__item">Развл. мероприятия</li>
                                <li className="list__item">Мотивационные программы</li>
                                <li className="list__item">Поздравления</li>
                            </ul>
                        </div>

                        <div className="card__footer">
                            <button className="button" onClick={() => togglerModal({subject: 'Corporate & Private events'})}>Организовать</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ServicesWithContext;

// import './services.scss';
