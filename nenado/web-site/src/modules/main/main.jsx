import React, {Component} from 'react';
import {withRouter} from 'react-router';
import classNames from 'classnames';
// slick slider
import Form from 'blocks/form/_feedback/form_feedback.jsx';
import Slide from './__slide/main__slide.jsx';
import Slider from 'react-slick';
import axios from 'axios';

import {AnimationContext} from 'src/js/contexts/animation/animation';
import {ModalContext} from 'src/js/contexts/modal/modal';

const MainWithContext = props => (
    <AnimationContext.Consumer>
        {({animation}) => (
            <ModalContext.Consumer>
                {({open}) => (
                    <Main
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

class Main extends React.Component {
    constructor(props) {
        super(props);

        this._animationTimer = null;

        this.state = {
            animatedSlick: '',
            slides: []
        };
    }

    // Lifecycle
    componentDidMount() {
        if(this.props.animation) this._startAnimation();

        const url = 'http://nenado.pro/wp-json/wp/v2/gallery';
        axios.get(url).then(res => {
            const slides = res.data.map(r => r.acf);
            if (this)
                this.setState({
                    slides
                })
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.animation && !prevProps.animation)
            this._startAnimation();
    }

    componentWillUnmount() {
        clearTimeout(this._animationTimer);
    }

    // Helpers
    _togglerModal({subject}) {
        this.props.open((
            <Form
                subject={subject}
            />
        ))
    }

    _startAnimation() {
        this._animationTimer = setTimeout(() => this.setState({
            animatedSlick: 'main__slick-slider_animated'
        }), 300);
    }

    render() {
        const settings = {
            dots: true,
            speed: 800,
            arrows: false,
            autoplay: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 5000,
            className: `main__slick-slider ${this.state.animatedSlick}`,
            customPaging: i => (<div className="bullets__item bullets__item_slick-slider"></div>)
        };

        const togglerModal = ::this._togglerModal;
        const rSlides = this.state.slides.map((slide, key) => (
            <Slide
                {...{key}}
                title={(
                    <React.Fragment>
                        <div
                            dangerouslySetInnerHTML={{__html: slide.title}}
                        />
                    </React.Fragment>
                )}
                description={(
                    <React.Fragment>
                        <div
                            dangerouslySetInnerHTML={{__html: slide.desc}}
                        />
                    </React.Fragment>
                )}
                togglerModal={() => togglerModal({
                    subject: slide.title
                })}
                link={slide.href}
            />
        ))
        return (
            <div className="main">
                <Slider {...settings}>
                    {rSlides}
                </Slider>
            </div>
        );
    }
}

export default withRouter(MainWithContext);
