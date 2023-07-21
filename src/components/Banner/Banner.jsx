import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './Banner.css';
import image1 from '../../assets/Banner/cutting-metal-with-plasma-equipment-plant.jpg'
import image2 from '../../assets/Banner/portrait-young-worker-hard-hat-large-metalworking-plant.jpg'
import image3 from '../../assets/Banner/portrait-young-worker-large-metalworking-plant.jpg'
import image4 from '../../assets/Banner/welding-work-with-metal-construction-busy-metal-factory.jpg'
import image5 from '../../assets/Banner/worker-operating-industrial-machine-metal-workshop.jpg'


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

            <div ref={sliderRef} className="keen-slider max-h-screen w-fit">
                <div className="keen-slider__slide number-slide1">
                    <img src={image1} alt="" className='w-full min-h-screen' />
                </div>
                <div className="keen-slider__slide number-slide2">
                    <img src={image2} alt="" className='w-full min-h-screen' />
                </div>
                <div className="keen-slider__slide number-slide3">
                    <img src={image3} alt="" className='w-full min-h-screen' />
                </div>
                <div className="keen-slider__slide number-slide4">
                    <img src={image4} alt="" className='w-full min-h-screen' />
                </div>
                <div className="keen-slider__slide number-slide5">
                    <img src={image5} alt="" className='w-full min-h-screen' />
                </div>
            </div>
            

    );
};

export default Banner;