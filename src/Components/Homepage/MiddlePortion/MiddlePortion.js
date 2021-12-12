import React from 'react';
import photo from "./cover.png";
const MiddlePortion = () => {
    return (
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-5" style={{backgroundColor:' #ffeecc'}}>
            <div width="309px" style={{marginRight:'-60px'}}>
                <img src={photo} width="40%" alt="cover" />
            </div>
            <div style={{textAlign:'left'}}>
                <h3>Let Us Handle Your <br/> skin <span style={{color:'hotpink'}}> Professionally </span></h3>
                <p style={{textAlign:'justify',width:'50%'}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                <div className="d-flex justify-content-around w-50">
                    <div>
                        <h2 style={{color:"hotpink"}}>500+</h2>
                        <p>Satisfied Customers</p>
                    </div>
                    <div>
                    <h2 style={{color:"hotpink"}}>16+</h2>
                        <p>Total Services</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddlePortion;