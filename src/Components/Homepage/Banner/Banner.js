import React from 'react';
import image from "./beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";
import {Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="container pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div style={{textAlign:'left'}} className="me-5">
                <h2 className="fw-bolder">Beauty Saloon <br/> for every women</h2>
                <p style={{textAlign:'justify'}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                <Button style={{backgroundColor:'#ff1a1a', margin:'1px solid pink'}} as={Link} to="/ourProducts">Buy Our Products</Button>
            </div>
            <div>
                <img style={{width:'400px',height:'300px'}} src={image} alt="" className="px-5"/>
            </div>
        </div>
    );
};

export default Banner;