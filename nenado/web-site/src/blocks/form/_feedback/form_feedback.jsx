import React from 'react';
import axios from 'axios';
import SVG from 'blocks/svg/svg.jsx';

class Form extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			agree: false,
			email: '',
			name: '',
			tel: ''
		}
	}

	updateValue(e, name) {
		const value = e.target.value;
		const newState = {};

		newState[name] = value;
		this.setState(newState);
	}

	sendEmail() {
        const {
            updateValue,
            isEmail,
            isName,
            isMsg,
            state: {
                tel,
                name,
                email,
				agree
            }
        } = this;

        const err = [];
        if (!Boolean(agree))
            err.push('Вы не согласились')
        if (!Boolean(name) || !isName(name))
            err.push('Заполните корректно поле "Имя"')
        if (!Boolean(email) || !isEmail(email))
            err.push('Заполните корректно поле "E-mail"')
        if (!Boolean(tel) || !isMsg(tel))
            err.push('Заполните корректно поле "Номер телефона"')
        if (err.length != 0)
            return console.log('err', err)/* Show modal window */;

        this.setState({
            loading: true
        });
        const subject = this.props.subject;

        axios.post('/wp-content/themes/nenado/mail.php', {
            subject,
            email,
            name,
            msg: tel
        }).then(res => {
            for(key in ['tel', 'name', 'email'])
                this.updateValue({e:{ target: {value: ''}}}, key);
                this.setState({
                    loading: false,
					agree: false
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

	render() {
		const {
			sendEmail,
			props: {
				subject
			}
		} = this;
		const updateValue = this.updateValue.bind(this);

		return (
			<React.Fragment>
				<div className="description modal__description">
					<div className="title modal__title">
						Заявка на консультацию
					</div>

					<div className="subtitle modal__subtitle">
						Наш менеджер свяжется с вами в течение 15 минут
					</div>
				</div>

				<div className="form form_modal">
					<div className="form__group form__group_modal">
						<input
							value={this.state.name}
							onChange={event => updateValue(event, 'name')}
							type="text"
							className="input form__input"
							placeholder="Ваше имя"
						/>
						<input
							value={this.state.email}
							onChange={event => updateValue(event, 'email')}
							type="emial"
							className="input form__input"
							placeholder="Введите ваш E-mail"
						/>

						<input
							value={this.state.tel}
							onChange={event => updateValue(event, 'tel')}
							type="text"
							className="input form__input"
							placeholder="Введите ваш номер телефона"
						/>
					</div>

					<input
						id="modal__checkbox"
						className="checkbox modal__checkbox"
						type="checkbox"
						checked={this.state.argee}
						onChange={() => this.setState({
							agree: !this.state.argee
						})}
					/>
					<label className="label label_checkbox">
						Я согласен на обработку персональных данных
					</label>

					<button
						className="button button_modal"
						onClick={sendEmail.bind(this)}
					>
						Оформить заявку
					</button>
				</div>
			</React.Fragment>
		)
	}
}



export default Form;

// import './modal.scss';
