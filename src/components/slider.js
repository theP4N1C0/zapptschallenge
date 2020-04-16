import React from 'react';

//Plugins
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

//Imgs
import background2x from '../assets/imgs/singin-singup-2x.png';
import background from '../assets/imgs/singin-singup.png';

//Variable
const AutoplaySlider = withAutoplay(AwesomeSlider);

//View
const SliderComponent = () => (
    <section className="slide-content">
        <AutoplaySlider className="slider" organicArrows={false} play cancelOnInteraction={false} interval={4000}>
            <div className="slider-item">
                <img srcSet={`${background2x} 2x`} src={background} className="slider-img" alt="Marcenas mattis egestas" />
                <p className="slider-title">Marcenas mattis egestas</p>
                <p className="slider-text">Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</p>
            </div>

            <div className="slider-item">
                <img srcSet={`${background2x} 2x`} src={background} className="slider-img" alt="Marcenas mattis egestas" />
                <p className="slider-title">Marcenas mattis egestas</p>
                <p className="slider-text">Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</p>
            </div>
            <div className="slider-item">
                <img srcSet={`${background2x} 2x`} src={background} className="slider-img" alt="Marcenas mattis egestas" />
                <p className="slider-title">Marcenas mattis egestas</p>
                <p className="slider-text">Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</p>
            </div>
        </AutoplaySlider>
    </section>
);

export default SliderComponent;
