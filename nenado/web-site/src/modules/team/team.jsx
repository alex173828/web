import React from 'react';
import Slider from 'react-slick';

import NextArrow from './__next-arrow/team__next-arrow.jsx';
import PrevArrow from './__prev-arrow/team__prev-arrow.jsx';
import Slide from './__slide/team__slide.jsx';

import {AnimationContext} from 'src/js/contexts/animation/animation';
import {ModalContext} from 'src/js/contexts/modal/modal';

const TeamWithContext = props => (
    <AnimationContext.Consumer>
        {({animation}) => (
            <ModalContext.Consumer>
                {({open}) => (
                    <Team
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

class Team extends React.Component {
    constructor(props) {
        super(props);

        const imgs = this._importImgs(require.context('../../assets/img/photo/team', false, /\.(png|jpe?g|svg)$/));
        const workers = [
            {
                name: 'Дмитрий Якименко',
                role: (<React.Fragment>Основатель и генеральный <br /> директор компании</React.Fragment>)
            }, {
                name: 'Владимир Антонов',
                role: (<React.Fragment>Партнёр. Руководитель технического<br />направления. Владелец компании <a className="link teammate__link" href="http://avm-sound.ru/">AVM Sound</a></React.Fragment>)
            }, {
                name: 'Анастасия Торцакова',
                role: (<React.Fragment>Партнёр. Исполнительный директор</React.Fragment>)
            }, {
                name: 'Янина Пивкина',
                role: (<React.Fragment>Юрист</React.Fragment>)
            }, {
                name: 'Светлана Боброва',
                role: (<React.Fragment>Менеджер проектов</React.Fragment>)
            }, {
                name: 'Ирина Ковалёва',
                role: (<React.Fragment>Коммерческий и PR-директор</React.Fragment>)
            }
        ]

        this._workersWithImg = imgs.map((img, index) => ({
            ...workers[index],
            img
        }));

        this._animationTimer = null;

        this.state = {
            animatedDescription: '',
            animatedSlider: ''
        }
    }

    _startAnimation() {
        setTimeout(() => this.setState({
            animatedDescription: 'description_animated',
            animatedSlider: 'team__slick-slider_animated'
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

    _importImgs(requires) {
        const imgs = [];

        requires.keys().
            map((item, index) => imgs.push(requires(item)));

        return imgs;
    }

    render() {
        const settings = {
            dots: false,
            cssEase: "ease",
            focusOnSelect: true,
            speed: 600,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1150,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        const rSliders = this._workersWithImg.map((worker, index) => (
            <Slide
                key={index}
                {...worker}
            />
        ));

        return (
            <div className="team">

                <div className={`description ${this.state.animatedDescription}`}>
                    <div className="title">Наша команда</div>
                </div>
                <Slider
                    {...settings}
                    className={`team__slick-slider ${this.state.animatedSlider}`}
                >
                    {rSliders}
                </Slider>
            </div>
        );
    }
}


export default TeamWithContext;

// import './team.scss';
