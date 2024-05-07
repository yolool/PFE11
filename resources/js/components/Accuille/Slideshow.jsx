import { useEffect, useState } from "react";


// eslint-disable-next-line react/prop-types
const Slideshow = ({interval = 3000}) => {

    const images = [
        'images/SLIDER111.png',
      'images/SLIDER222.png',
        'images/SLIDER333.png'
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, interval);
        return () => clearInterval(slideInterval);
    }, [currentSlide, images.length, interval]);


    return (
        <div className="slideshow">
            <div className="slideshow-slide" >
                <div className="slide" >
                    <img src={images[currentSlide]} alt="" />
                </div>

            <div className="carousel-indicators">
                <button type="button" style={{backgroundColor: currentSlide === 0 ? 'grey' : 'rgba(3, 1, 14, 0.831)', margin: '5px 7px', height: '1px'}}></button>
                <button type="button" style={{backgroundColor: currentSlide === 1 ? 'grey' : 'rgba(3, 1, 14, 0.831)', margin: '5px 7px', height: '1px'}} ></button>
                <button type="button" style={{backgroundColor: currentSlide === 2 ? 'grey' : 'rgba(3, 1, 14, 0.831)', margin: '5px 7px', height: '1px'}} ></button>
            </div>

            </div>
            <button className="slide-button prev" onClick={prevSlide}>&#10094;</button>
            <button className="slide-button next" onClick={nextSlide}>&#10095;</button>
        </div>
    )

}

export default Slideshow;
