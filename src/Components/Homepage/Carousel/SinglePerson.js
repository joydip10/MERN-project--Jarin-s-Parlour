import React from 'react';
import image from "./Ellipse 91.png";
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';
const SinglePerson = (props) => {
    const name = props.person;
    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };
    const value = 3;
    return (
        <div className="d-flex flex-column align-items-center px-5">
                <div className="d-flex flex-column align-items-center">
                    <Avatar alt="Remy Sharp" src={image} />
                        <p>
                            {name}
                            <br />CEO, Aladin.co
                            <br />
                            <Box className="d-flex">
                                <Rating name="half-rating-read" defaultValue={value} precision={0.5} readOnly /> {labels[value !== -1 ? value : value]}
                            </Box>
                        </p>
                    </div>
                    <div className="px-5">
                    <p style={{textAlign:'justify'}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    </div>
            </div>
            );
};

            export default SinglePerson;