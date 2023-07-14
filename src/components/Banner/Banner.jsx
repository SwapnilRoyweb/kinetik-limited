import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './Banner.css';
import product1 from '../../assets/Products/coordinate-measuring-machine-probes.jpg'
import product2 from '../../assets/Products/IMG20211228141537.jpg'
import product3 from '../../assets/Products/IMG20220707122306.jpg'
import product4 from '../../assets/Products/IMG_20211124_202119.jpg'
import product5 from '../../assets/Products/IMG_20220718_211057.jpg'


const WheelControls = (slider) => {
    let touchTimeout
    let position
    let wheelActive

    function dispatch(e, name) {
        position.x -= e.deltaX
        position.y -= e.deltaY
        slider.container.dispatchEvent(
            new CustomEvent(name, {
                detail: {
                    x: position.x,
                    y: position.y,
                },
            })
        )
    }

    function wheelStart(e) {
        position = {
            x: e.pageX,
            y: e.pageY,
        }
        dispatch(e, "ksDragStart")
    }

    function wheel(e) {
        dispatch(e, "ksDrag")
    }

    function wheelEnd(e) {
        dispatch(e, "ksDragEnd")
    }

    function eventWheel(e) {
        e.preventDefault()
        if (!wheelActive) {
            wheelStart(e)
            wheelActive = true
        }
        wheel(e)
        clearTimeout(touchTimeout)
        touchTimeout = setTimeout(() => {
            wheelActive = false
            wheelEnd(e)
        }, 50)
    }

    slider.on("created", () => {
        slider.container.addEventListener("wheel", eventWheel, {
            passive: false,
        })
    })
}

const Banner = () => {

    const [sliderRef] = useKeenSlider(
        {
            loop: false,
            rubberband: false,
            vertical: true,
        },
        [WheelControls]
    )

    return (
        <div ref={sliderRef} className="keen-slider min-h-screen w-fit">
            <div className="keen-slider__slide number-slide1">
                <img src={product1} alt="" className='w-full min-h-screen' />
            </div>
            <div className="keen-slider__slide number-slide2">
                <img src={product2} alt="" className='w-full min-h-screen' />
            </div>
            <div className="keen-slider__slide number-slide3">
                <img src={product3} alt="" className='w-full min-h-screen' />
            </div>
            <div className="keen-slider__slide number-slide4">
                <img src={product4} alt="" className='w-full min-h-screen' />
            </div>
            <div className="keen-slider__slide number-slide5">
                <img src={product5} alt="" className='w-full min-h-screen' />
            </div>
        </div>
    );
};

export default Banner;