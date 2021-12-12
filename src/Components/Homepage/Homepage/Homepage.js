import React from 'react';
import Banner from '../Banner/Banner';
import CarouselPart from '../Carousel/CarouselPart';
import MiddlePortion from '../MiddlePortion/MiddlePortion';
import Navigation from './../../Shared/Navigation/Navigation';
import Footer from './../../Shared/Footer/Footer';

const Homepage = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div className="container p-5 pt-3" style={{ backgroundColor: '#ffe6e6' }}>
                <Navigation handleOpen={handleOpen} open={open} handleClose={handleClose}></Navigation>
                <Banner></Banner>
            </div>
            <br/>
            <br/>
            <div className="container">
            <MiddlePortion/>
            </div>
            <>
                <CarouselPart />
            </>
            <Footer/>
        </>
    );
};

export default Homepage;