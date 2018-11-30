import React from 'react';
import Slider from 'react-slick';

import NextArrow from './__next-arrow/about__next-arrow.jsx';
import PrevArrow from './__prev-arrow/about__prev-arrow.jsx';
import Slide from './__slide/about__slide.jsx';

import {AnimationContext} from 'src/js/contexts/animation/animation';
import {ModalContext} from 'src/js/contexts/modal/modal';

const AboutWithContext = props => (
    <AnimationContext.Consumer>
        {({animation}) => (
            <ModalContext.Consumer>
                {({open}) => (
                    <About
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

class About extends React.Component {
    constructor(props) {
        super(props);

        this._animationTimer = null;

        this.state = {
            animatedDescription: '',
            animatedStatistics: ''
        }
    }

    _startAnimation() {
        setTimeout(() => this.setState({
            animatedDescription: 'description_animated',
            animatedStatistics: 'statistics_animated'
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

    render() {
        var settings = {
            arrows:false,
            dots: false,
            className: "test",
            cssEase: "ease",
            speed: 700,
            slidesToShow: 7,
            slidesToScroll: 1,
            initialSlide: 2,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1150,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: true
                    }
                }, {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true
                    }
                }
            ]
        };

        return (
            <div className="about">
                <div className={`description about__description ${this.state.animatedDescription}`}>
                    <div className="title">
                        О компании
                    </div>

                    <div className="subtitle">
                        Агентство создано в 2017 году людьми, чей опыт в шоу-бизнесе на троих партнёров равен 40 годам. Команда состоит из профессионалов, ежедневно работающих на мероприятиях по всему миру. Мы знаем, что такое концерт, корпоратив, конкурс, праздник, фестиваль или соревнование. Наш воздух и наша цель - эмоции, креатив и стиль, которыми способны управлять. "НЕ НАДО" - крик души, как сделать лучше и продуктивнее, не меняя концепции события и сократив бюджет. Вам "НЕ НАДО"? Мы готовы, ведь за нашими плечами свыше 1000 мероприятий!
                    </div>
                </div>

                <div className={`${this.state.animatedStatistics} statistics`}>
                    <Slider {...settings}>
                        <Slide
                            amount='7'
                            title='Выставок'

                            classNameTitle='statistics__text_size_sm'
                            classNameAmount='statistics__number_size_sm'
                        />
                        <Slide
                            amount='22'
                            title={(<React.Fragment>Профессиональных <br/> праздника</React.Fragment>)}

                            classNameAmount='statistics__number_size_md'
                            classNameTitle='statistics__text_size_md'
                        />
                        <Slide
                            amount='84'
                            title={(<React.Fragment>Корпоративных <br/> события</React.Fragment>)}

                            classNameAmount='statistics__number_size_lg'
                            classNameTitle='statistics__text_size_lg'
                        />
                        <Slide
                            amount='1025'
                            title={(<React.Fragment>Концертов российских <br/> и зарубежных <br/> исполнителей</React.Fragment>)}

                            classNameAmount='statistics__number_size_xl'
                            classNameTitle='statistics__text_size_xl'
                        />
                        <Slide
                            amount='43'
                            title={(<React.Fragment>Международных <br/> конкурса</React.Fragment>)}

                            classNameAmount='statistics__number_size_lg'
                            classNameTitle='statistics__text_size_lg'
                        />
                        <Slide
                            amount='16'
                            title='Фестивалей'

                            classNameAmount='statistics__number_size_md'
                            classNameTitle='statistics__text_size_md'
                        />
                        <Slide
                            amount='3'
                            title={(<React.Fragment>Спортивных <br/> меропрития</React.Fragment>)}

                            classNameAmount='statistics__number_size_sm'
                            classNameTitle='statistics__text_size_sm'
                        />
                    </Slider>
                </div>
            </div>
        );
    }
}

export default AboutWithContext;

// import './about.scss';
