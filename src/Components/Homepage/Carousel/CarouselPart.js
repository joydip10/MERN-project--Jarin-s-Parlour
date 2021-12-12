import React from 'react';
import { Carousel } from 'react-bootstrap';
import SinglePerson from './SinglePerson';

const CarouselPart = () => {
    return (
        <Carousel variant="dark" className="px-5 py-5">
            <Carousel.Item>
                <div className="d-flex flex-column flex-md-row justify-content-evenly py-5">
                    <SinglePerson person={'Mayank'}></SinglePerson>
                    <SinglePerson person={'Adah'}></SinglePerson>
                    <SinglePerson person={'Manish'}></SinglePerson>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex  flex-column flex-md-row justify-content-evenly">
                    <SinglePerson person={'Mainul'}></SinglePerson>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex  flex-column flex-md-row justify-content-evenly">
                    <SinglePerson person={'Hasan'}></SinglePerson>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselPart;