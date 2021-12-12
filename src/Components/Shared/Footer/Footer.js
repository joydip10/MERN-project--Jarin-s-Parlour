import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate=useNavigate();
    return (
        <div className="bg-dark bg-gradient py-3 text-center mt-3">
            <h2 className="text-white" onClick={()=>navigate('/home')} style={{cursor:'pointer'}}><span > Jerin's</span> <span style={{color:'hotpink'}}>Parlour</span></h2>
            <h5 className="mt-0 py-0 text-warning">Buy <span className="text-muted">your beauty products from us</span></h5>
            <h3><i className="fab fa-google text-danger"></i>{'  '}<i className="fab fa-facebook text-white"></i>{'  '}<i className="fab fa-github text-success"></i>{'  '}<i className="fab fa-instagram-square text-warning"></i>{'  '}<i className="fab fa-twitter-square text-primary"></i></h3>
        </div>
    );
};

export default Footer;