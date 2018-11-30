import React from 'react';
import Swiper from 'react-id-swiper';

import {AnimationContext} from 'src/js/contexts/animation/animation';
import {ModalContext} from 'src/js/contexts/modal/modal';

const ExperienceWithContext = props => (
    <AnimationContext.Consumer>
        {({animation}) => (
            <ModalContext.Consumer>
                {({open}) => (
                    <Experience
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

class Experience extends React.Component {
    constructor(props) {
        super(props);

        this._imgs = this._importImags(require.context('../../assets/img/photo', false, /\.(png|jpe?g|svg)$/));
        this._animationTimer = null;

        this.state = {
            animatedDescription: '',
            animatedGallery: '',
            showGallery: false
        }
    }

    _importImags(requires) {
        const imgs = [];

        requires.keys().
            map((item, index) => imgs.push(requires(item)));

        return imgs;
    }

    _startAnimation() {
        setTimeout(() => this.setState({
            animatedDescription: 'description_animated',
            animatedGallery: 'gallery_animated',
            showGallery: true
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
        const params = {
            mousewheel: {
                invert: false,
            },
            shouldSwiperUpdate: true,
            rebuildOnUpdate: true,
            slidesPerView: 'auto',
            slidesPerColumn: 2,
            spaceBetween: 10
        }

        const r_imgs = this._imgs.map((img, index) => (
            <img
                key={index}
                src={img}
            />
        ));

        // this.state.images.map((img, index) => (
        //     <img
        //         key={index}
        //         src={img}
        //     />
        // ));

        return (
            <div className="experience">
                <div className={`description ${this.state.animatedDescription}`}>
                    <div className="title">Наш опыт</div>
                    <div className="subtitle experience__subtitle">
                        Emin, Nile Rodgers, Take That, David Foster, Chris Botti, Craig David, Top Hit Music Awards 2017, Big Love Show , Jennifer Lopez, Hurts, Lou Bega , Serj Tankian, Whitesnake, Звёзды Русского радио, Steven Seagal, Uriah Heep, The Pink Floyd Tribute Show, Abba Tribute Show, Церемония награждения в области радиовещания «Радиомания», Конкурс «Мисс Вселенная», Zaz, Stomp, Nightwish, Сергей Лазарев, Музыкальный фестиваль ЖАРА, Elton John, Scorpions, Anne-Marie, «Золотой грамофон», Баста, Enrique Iglesias, Елена Темникова, Тимати, Леонид Агутин, Григорий Лепс, Бизнес-форум «Атланты», Ария, Sepultura, Премия Ру-ТВ, Ани Лорак, Светлана Лобода, Полина Гагарина, Концерт памяти Муслима Магомаева, А-Студио, Андрей Макаревич, Машина Времени, Tokio, LP, Ennio Morricone , Сосо Павлиашвилли, Smokie, Led Zeppelin, 30 seconds to mars, Nikelback, Премия МУЗ-ТВ, Toni Braxton, «World Music Awards» 2014, Lorde, Руки Вверх, «Eurovision 2012», Дима Билан, Synergy Global Forum, Ольга Кормухина, Самые стильные по версии журнала HELLO, Vanessa Mae, Аквариум, Тамара Гвердцители, Гарик Сукачёв, Вячеслав Бутусов, IL DIVO, BONNIE TYLER, Владимир Пресняков, GARBAGE, Би-2, Михаил Шуфутинский, Chris Rea, Валерия, Boyz II Men, Motley Crue, Иосиф Кобзон, Спектакль «Заново родиться» – Александр Петров, UMA2RMAN, Игорь Бутман, Goran Bregovic, Garou, ЧАЙФ, ЛЮБЭ, Alice Cooper, Demis Roussos, Adam Lambert, Стас Михайлов и др.
                    </div>
                </div>
                <div className={`gallery ${this.state.animatedGallery}`}>
                    {
                        this.state.showGallery
                            ? (
                                <Swiper {...params}>
                                    {r_imgs}
                                </Swiper>
                            )
                            : null
                    }
                </div>
            </div>
        );
    }
}


export default ExperienceWithContext;

// import './experience.scss';
